'use strict';

var path = require('path'),
    gulp = require('gulp'),
    conf = require('./conf'),
    browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {

    gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject']);

    gulp.watch([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join(conf.paths.src, '/app/**/*.less')
    ], function (event) {
        if(isOnlyChange(event)) {
            gulp.start('styles');
        } else {
            gulp.start('inject');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function (event) {
        if(isOnlyChange(event)) {
            gulp.start('scripts');
        } else {
            gulp.start('inject');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function (event) {
        browserSync.reload(event.path);
    });
});
