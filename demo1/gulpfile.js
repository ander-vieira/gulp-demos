var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['html', 'css']);

gulp.task('html', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('public/'));
});

gulp.task('css', function() {
  gulp.src('src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('app.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css/'))
})
