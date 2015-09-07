var gulp = require('gulp'),
    gulpSass = require('gulp-sass');

gulp.task('sassTask', function () {
    gulp.src('./*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('sassWatchTask', function () {
    gulp.watch('./*.scss', ['sassTask']);
});

gulp.task('default',['sassTask','sassWatchTask']);
