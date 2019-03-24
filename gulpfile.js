'use strict'

const gulp = require('gulp')

const sass = require('gulp-sass')
sass.compiler = require('node-sass')
const prefix = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const sourcemaps = require('gulp-sourcemaps')

const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')

const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const eslint = require('gulp-eslint')

const browserSync = require('browser-sync').create()
const rename = require('gulp-rename')
const del = require('del')
const cp = require('child-process')

function jekyll(done) {
    const instance = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll'

    return cp.spawn(instance, ['build'], {stdio: 'inherit'})
        .on('error', err => console.error(err.message))
        .on('close', done)
}

function css() {
    return gulp.src('src/assets/css/main.sass')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('dist/assets/css'))
        .pipe(prefix())
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream())
}

function lint() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
}

function js() {
    const vinyls = ['node_modules/jquery/dist/jquery.min.js', 'src/assets/js/**/*.js']
    return gulp.src(vinyls)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(sourcemaps.write('dist/assets/js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(browserSync.stream())
}

function image() {
    return gulp.src('src/assets/img/**/*')
        .pipe(cache(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ])))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(browserSync.stream())
}

function bs() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        port: 8080
    })
}

function clean() {
    return del(['dist/**/*'])
}

function watch() {
    gulp.watch('src/**/*.{html,md}', jekyll)
    gulp.watch('src/assets/css/**/*.{sass,scss}', css)
    gulp.watch('src/assets/js/**/*.js', js)
    gulp.watch('src/assets/img/**/*', image)
}

function build() {
    return gulp.series(clean, gulp.parallel(jekyll, sass, js, image))
}

function main() {
    return gulp.series(build, bs, watch)
}

exports.default = main
exports.watch = watch
exports.build = build
exports.lint = lint
