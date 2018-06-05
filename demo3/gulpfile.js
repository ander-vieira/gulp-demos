var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');

//SASS plugins
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

//JS plugins
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', ['html', 'sass', 'js']);

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

gulp.task('js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js/'));
});
