'use strict';

var path = require('path'),
    gulp = require('gulp'),
    conf = require('./conf'),
    browserSync = require('browser-sync'),
    $ = require('gulp-load-plugins')(),
    wiredep = require('wiredep').stream,
    _ = require('lodash');

gulp.task('styles', function () {
    var lessOptions = {
        options: [
            'bower_components',
            path.join(conf.paths.src, '/app')
        ]
    };

    var injectFiles = gulp.src([
        path.join(conf.paths.src, '/app/**/*.less'),
        path.join('!' + conf.paths.src, '/app/index.less')
    ], { read: false });

    var injectOptions = {
        transform: function (filePath) {
            filePath = filePath.replace(conf.paths.src + '/app/', '');
            return '@import "' + filePath + '";';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };


    return gulp.src([
        path.join(conf.paths.src, '/app/index.less')
    ])
        .pipe($.inject(injectFiles, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe($.sourcemaps.init())
        .pipe($.less(lessOptions)).on('error', conf.errorHandler('Less'))
        .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))
        .pipe(browserSync.reload({ stream: true }));
});
