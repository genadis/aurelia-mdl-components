let gulp = require('gulp');
let runSequence = require('run-sequence');
let to5 = require('gulp-babel');
let paths = require('../paths');
let compilerOptions = require('../babel-options');
let assign = Object.assign || require('object.assign');
var replace = require('gulp-replace');
var prefix = 'amdl-';
var prefix2 = '\'amdl';
var mdlDepName = '@annoto/mdl';

gulp.task('annoto-build-es2015', function() {
  return gulp.src(paths.source)
    .pipe(replace('mdl-', prefix))
    .pipe(replace('\'mdl', prefix2))
    .pipe(replace('encapsulated-mdl', mdlDepName))
    .pipe(to5(assign({}, compilerOptions.es2015())))
    .pipe(gulp.dest(paths.output + 'es2015'));
});

gulp.task('annoto-build-commonjs', function() {
  return gulp.src(paths.source)
    .pipe(replace('mdl-', prefix))
    .pipe(replace('\'mdl', prefix2))
    .pipe(replace('encapsulated-mdl', mdlDepName))
    .pipe(to5(assign({}, compilerOptions.commonjs())))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('annoto-build-amd', function() {
  return gulp.src(paths.source)
    .pipe(replace('mdl-', prefix))
    .pipe(replace('\'mdl', prefix2))
    .pipe(replace('encapsulated-mdl', mdlDepName))
    .pipe(to5(assign({}, compilerOptions.amd())))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('annoto-build-system', function() {
  return gulp.src(paths.source)
    .pipe(replace('mdl-', prefix))
    .pipe(replace('\'mdl', prefix2))
    .pipe(replace('encapsulated-mdl', mdlDepName))
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-annoto', function(callback) {
  return runSequence(
    'clean',
    ['build-html', 'build-css',
      'annoto-build-es2015', 'annoto-build-commonjs', 'annoto-build-amd', 'annoto-build-system'],
    callback
  );
});
