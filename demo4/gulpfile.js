var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');

//SASS plugins
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

//JS plugins
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var CONFIG = require('./gulp-config.json');
CONFIG.sass.processedFiles = CONFIG.sass.files.map(function(file) {
  return CONFIG.sass.sourceDir+file;
});
CONFIG.js.processedFiles = CONFIG.js.files.map(function(file) {
  return CONFIG.js.sourceDir+file;
});

gulp.task('default', ['html', 'sass', 'js']);

gulp.task('html', function() {
  gulp.src(CONFIG.html.sourceDir+CONFIG.html.file)
    .pipe(gulp.dest(CONFIG.html.destDir));
});

gulp.task('sass', function() {
  gulp.src(CONFIG.sass.processedFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(CONFIG.sass.destDir));
});

gulp.task('js', function() {
  gulp.src(CONFIG.js.processedFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(babel({presets:['env']}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(CONFIG.js.destDir));
});

gulp.task('watch', function() {
  gulp.watch(CONFIG.html.sourceDir+CONFIG.html.file, ['html']);
  gulp.watch(CONFIG.sass.sourceDir+"**", ['sass']);
  gulp.watch(CONFIG.js.processedFiles, ['js']);
});
