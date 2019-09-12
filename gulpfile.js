const gulp = require('gulp');

gulp.task('statics', function() {
    return gulp.src('./public/**').pipe(gulp.dest('./dist/public'));
});
