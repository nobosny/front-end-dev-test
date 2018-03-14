const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('product-listing/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('product-listing/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('product-listing/scss/*.scss', ['sass']);
  gulp.watch('product-listing/*.html').on('change', browserSync.reload);
});
