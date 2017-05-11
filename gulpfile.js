var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concatCss = require('gulp-concat-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin');
 
gulp.task('concatCss', function () {
  return gulp.src(['!src/css/ie.css', '!src/css/fonts.css', 'src/css/**/*.css'])
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('build/css'));
});

 gulp.task('concat', function () {
	 return gulp.src([
		 'src/js/script.js',
		 'src/js/search-img.js'
	 ])
		 .pipe(concat('main.script.min.js'))
         .pipe(uglify())
         .pipe(gulp.dest('build/js'))

 });
gulp.task('imagemin', function() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'))
}
);

gulp.task('sass', function(){
	return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*scss'])
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('src/css'))
});

gulp.task('watch', function(){
	gulp.watch(['src/sass/**/*.sass', 'src/sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);