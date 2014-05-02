var gulp = require('gulp');

gulp.task('update_assets_from_vendor', function() {
  gulp.src('./vendor/assets/font-awesome/fonts/fontawesome-webfont.svg')
   .pipe(gulp.dest('./assets/fonts'));
});
