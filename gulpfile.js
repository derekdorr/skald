const gulp = require('gulp')
const gutil = require('gulp-util')
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown')
const concat = require('gulp-concat')
 
gulp.task('docs', () => gulp.src('lib/*.js')
    .pipe(concat('README.md'))
    .pipe(gulpJsdoc2md())
    .on('error', function (err) {
        gutil.log('jsdoc2md failed:', err.message)
    })
    .pipe(gulp.dest('.')));
