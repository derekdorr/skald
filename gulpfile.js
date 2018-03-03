const gulp = require('gulp');
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
const concat = require('gulp-concat');
 
gulp.task('docs', () => gulp.src('lib/*.js')
    .pipe(concat('README.md'))
    .pipe(gulpJsdoc2md())
    .pipe(gulp.dest('.')));
