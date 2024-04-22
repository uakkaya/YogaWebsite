import gulp from 'gulp';
import webp from 'gulp-webp';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';

// webpackConfig is your existing webpack configuration
import webpackConfig from './webpack.config.js';

// Task to copy HTML files to dist
gulp.task('html', function(){
    return gulp.src('src/*.html').pipe(gulp.dest('dist/'));
});

// Webp Conversion from JPG
gulp.task('webp', function(){
    return gulp.src('src/img/*.jpg')
    .pipe(webp({quality: 98}))
    .pipe(gulp.dest('dist/img/'));
});

// Webp Conversion from PNG
gulp.task('webpPNG', function(){
    return gulp.src('src/img/*.png')
    .pipe(webp({quality: 98}))
    .pipe(gulp.dest('dist/img/'));
});

// Webp Conversion from SVG
gulp.task('SVG', function(){
    return gulp.src('src/img/*.svg')
    .pipe(gulp.dest('dist/img/'));
});

// Task to bundle JS 
gulp.task("js", function () {
  console.log("Running JS task with Webpack config:", webpackConfig);
  return gulp.src("src/js/*.js")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("dist/js/"));
});

// Watch for changes in src
gulp.task('watch', function(){
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/img/*.jpg', gulp.series('webp'));
    gulp.watch('src/img/*.png', gulp.series('webpPNG'));
    gulp.watch('src/img/*.svg', gulp.series('SVG'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
});

// Default task running all the above tasks
gulp.task('default', gulp.parallel('html', 'js', 'watch'));