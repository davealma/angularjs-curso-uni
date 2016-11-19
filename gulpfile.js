// Include gulp
var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({}))
    .pipe(gulp.dest('./'));
});
