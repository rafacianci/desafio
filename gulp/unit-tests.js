'use strict';

var path = require('path'),
    gulp = require('gulp'),
    conf = require('./conf'),
    karma = require('karma');

function runTests(singleRun, done) {
    karma.server.start({
        configFile: path.join(__dirname, '/../karma.conf.js'),
        singleRun: singleRun,
        autoWatch: !singleRun
    }, function (failCount) {
        done(failCount ? new Error("Failed " + failCount + " tests.") : null);
    });
}

gulp.task('test', ['scripts'], function (done) {
    runTests(true, done);
});

gulp.task('test:auto', ['watch'], function (done) {
    runTests(false, done);
});
