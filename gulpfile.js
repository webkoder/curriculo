var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    // browserSync.init({
    //     proxy: "localhost:8000"
    // });

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["*.html", "*.css", "*.js"]).on('change', browserSync.reload);
});