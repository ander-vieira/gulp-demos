var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['html', 'sass']);

gulp.task('html', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('public/'));
});

gulp.task('sass', function() {
  gulp.src('src/sass/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css/'))
})
