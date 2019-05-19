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
const cp = require('child_process')

function jekyll(done) {
    const instance = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll'

    return cp.spawn(instance, ['build'], {stdio: 'inherit'})
        .on('error', err => console.error(err.message))
        .on('close', done)
}

function css() {
    return gulp.src('src/css/main.sass')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix())
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
}

function lint() {
    return gulp.src('src/js/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
}

function js() {
    // const vinyls = ['node_modules/jquery/dist/jquery.min.js', 'src/assets/js/**/*.js']
    return gulp.src('src/**/*.js')
        // .pipe(sourcemaps.init())
        // .pipe(concat('main.js'))
        // .pipe(rename({suffix: '.min'}))
        // .pipe(uglify())
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
}

function image() {
    return gulp.src('src/img/**/*')
        .pipe(cache(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ])))
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream())
}

function bs(done) {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        port: 8080
    })
    done()
}

function bsReload(done) {
    browserSync.reload()
    done()
}

function clean() {
    return del(['dist/**/*'])
}

function watch() {
    gulp.watch('src/**/*.{html,md}', gulp.series(jekyll, bsReload))
    gulp.watch('src/css/**/*.{sass,scss}', gulp.series(css, bsReload))
    gulp.watch('src/js/**/*.js', gulp.series(js, bsReload))
    gulp.watch('src/img/**/*', gulp.series(image, bsReload))
}

const build = gulp.series(clean, gulp.parallel(jekyll, css, js, image))
const main = gulp.series(build, bs, watch)

exports.default = main
exports.watch = watch
exports.build = build
exports.lint = lint
