const gulp = require('gulp');
const babel = require('gulp-babel');//转义
const uglify = require('gulp-uglify');//压缩js文件
const rename = require('gulp-rename');//gulp-rename 重命名文件
const cssnano = require('gulp-cssnano');//压缩css文件
const concat = require('gulp-concat');//合并文件
const browserify = require('browserify');//让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码
const source = require('vinyl-source-stream');//将Browserify的bundle()的输出转换为Gulp可用的vinyl（一种虚拟文件格式）流
const browserSync = require('browser-sync').create();//实时更新

// 编译并压缩js
gulp.task('convertJS', function(){
  return gulp.src('app/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
})

// 合并并压缩css
gulp.task('convertCSS', function(){
  return gulp.src('app/css/*.css')
    .pipe(concat('app.css'))
    .pipe(cssnano())
    .pipe(rename(function(path){
      path.basename += '.min';
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
})

// 监视文件变化，自动执行任务
//gulp.task('watch', function(){
//gulp.watch('app/css/*.css', ['convertCSS']);
//gulp.watch('app/js/*.js', ['convertJS', 'browserify']);
//})

// browserify
//gulp.task("browserify", function () {
//  var b = browserify({
//      entries: "dist/js/app.js"
//  });
//
//  return b.bundle()
//      .pipe(source("bundle.js"))
//      .pipe(gulp.dest("dist/js"))
//      .pipe(browserSync.stream());;
//});

//gulp.task('start', ['convertJS', 'convertCSS', 'browserify', 'watch']);

gulp.task('browser-sync',['convertJS','convertCSS'], function() {
    browserSync.init({
        server: "./"
    });
      gulp.watch('app/css/*.css', ['convertCSS']);
      gulp.watch('app/js/*.js', ['convertJS']);
      gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);