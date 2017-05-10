'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

const cfg = {
    js: {
        watch: './src/**/*.js',
        src: './src/index.js',
        vendor: [
            'node_modules/angular/angular.js',
            'node_modules/angular-aria/angular-aria.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-material/angular-material.js'
        ],
        dest: './dist'
    }, styles: {
        watch: './src/**/*.scss',
        src: './src/styles.scss',
        dest: './dist'
    },
    markup: {
        watch: './src/**/*.pug',
        src: './src/*.pug',
        dest: './dist'
    }
};

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('styles', (done) => {
    gulp
        .src(cfg.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cfg.styles.dest))
        .pipe(browserSync.stream());
    done();
});

gulp.task('styles:watch', (done)=> {
    gulp.watch(cfg.styles.watch, gulp.series('styles'));
    done();
});

gulp.task('markup', (done) => {
    gulp
        .src(cfg.markup.src)
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(cfg.markup.dest))
        .pipe(browserSync.stream())
    ;
    done();
});

gulp.task('markup:watch', (done)=> {
    gulp.watch(cfg.markup.watch, gulp.series('markup'));
    done();
});

gulp.task('js-custom', (done) => {
    gulp
        .src(cfg.js.src)
        .pipe(gulp.dest(cfg.js.dest))
        .pipe(browserSync.stream())
    ;
    done();
});

gulp.task('js-vendor', (done) => {
        gulp
            .src(cfg.js.vendor)
            .pipe(concat('vendor.js'))
            .pipe(gulp.dest(cfg.js.dest))
        ;
        done();
    }
);

gulp.task('js-custom:watch', (done)=> {
    gulp.watch(cfg.js.watch, gulp.series('js-custom'));
    done();
});

gulp.task('watch', gulp.series(gulp.parallel('js-custom:watch', 'js-custom', 'js-vendor', 'markup:watch', 'markup', 'styles:watch', 'styles'), 'serve'));

gulp.task('default', gulp.parallel('styles', 'markup', 'js-custom', 'js-vendor'));