const gulp = require('gulp');
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
const concat = require('gulp-concat');
 
gulp.task('jsdoc', () => gulp.src('lib/*.js')
    .pipe(concat('jsdoc.md'))
    .pipe(gulpJsdoc2md())
    .pipe(gulp.dest('./docs')));
    
gulp.task('readme', () => gulp.src([
        'docs/badges.md',
        'docs/header.md',
        'docs/jsdoc.md',
    ])
    .pipe(concat('README.md'))
    .pipe(gulp.dest('.')));
    
gulp.task('docs', gulp.series('jsdoc', 'readme'));
    
