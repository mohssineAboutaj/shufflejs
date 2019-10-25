// dependencies & modules
const gulp = require('gulp'),
			gulpBabel = require('gulp-babel'),
			gulpTypescript = require('gulp-typescript'),
			browserify = require('gulp-browserify'),
			gulpPug = require('gulp-pug'),
			gulpJasmine = require('gulp-jasmine'),
			browserSync = require('browser-sync');

// main project config file
const config = require('./config');

// global variables
const { rootDir,
				dist, 
				docs, 
				jsFolder, 
				jsFiles, 
				jsMain, 
				tsFiles,
				tsMain,
				pugFiles,
				port,
} = config;

// custom error handler
function errHandler(err) {
	if (err) {
		console.log(err);
	}
}

// javaScript gulp task
gulp.task('js-task', () => {
	gulp.src(jsMain)
	.pipe(gulpBabel({
	  presets: ['@babel/env']
	}))
	.on('error', errHandler)
	.pipe(gulp.dest(dist))
});

// PUG gulp task
gulp.task('pug-task', () => {
	return gulp.src(pugIndex)
				.pipe(gulpPug({
					pretty: true
				}))
				.on('error', errHandler)
				.pipe(gulp.dest(docs))
});

gulp.task('ts-task', () => {
	return gulp.src(tsMain)
				/*			
				.pipe(gulpTypescript({
					allowJs: true,
				}))
				*/
				.pipe(browserify({
					transform: ['typescript'],
					extensions: ['.ts'],
				}))
				.on('error', errHandler)
				.pipe(gulp.dest(dist))
});

// watching gulp task
gulp.task('watch-task', () => {
	//gulp.watch(jsFiler, ['js-task']);
	gulp.watch(tsFiles, ['ts-task']);
	gulp.watch(pugFiles, ['pug-task']);
});

// dev server gulp task
gulp.task('server-task', () => {
	browserSync.init({
		server: {
			baseDir: rootDir,
		},
		ui: false,
		port: port,
	})
});


// developement task
gulp.task('dev-task', [
	//'js-task',
	'ts-task',
	'pug-task',
	'watch-task',
	'server-task'
]);


// testing task
gulp.task('test-task', () => {
	gulp.src(specFiles)
			.pipe(gulpJasmine());
});

// testing with watching task
gulp.task('test-task-watch', ['test-task'], () => {
	gulp.watch(specFiles, ['test-task'])
});

// default task
gulp.task('default', ['dev-task']);
