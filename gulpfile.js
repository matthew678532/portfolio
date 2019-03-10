'use strict'

const gulp = require('gulp')

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const sourcemaps = require('gulp-sourcemaps')

const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')

const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const eslint = require('gulp-eslint')

const rename = require('gulp-rename')
const del = require('del')
const cp = require('child-process')

sass.compiler = require('node-sass')

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll'

gulp.task('jekyll', (done) => {
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('error', err => console.error(err.message))
        .on('close', done)
})
