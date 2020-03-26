const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  clean = require('gulp-clean-css'),
  rename = require('gulp-rename');

gulp.task('styles', done => {
  gulp.src('./scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ extname: '.min.css' }))    
    .pipe(clean())
    .pipe(gulp.dest('./assets/css/'))
  done();
});

gulp.task('default', done => { 
  gulp.watch('./scss/**/*.scss', gulp.parallel('styles'));
  done();

});