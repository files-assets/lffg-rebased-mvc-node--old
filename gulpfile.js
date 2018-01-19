const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

let count = 1;

/**
 * Sass.
 *
 * If true, only sass files will be compiled.
 * Otherwise, only sass files will be compiled.
 */
const is_sass = false;

const sass_dir = is_sass ? 'sass' : 'scss';

gulp.task('default', [ 'sass', 'watch' ]);

gulp.task('watch', function () {
  gulp.watch([
    `./public/.dev/${sass_dir}/*.${sass_dir}`,
    `./public/.dev/${sass_dir}/**/*.${sass_dir}`,
    `./public/.dev/${sass_dir}/**/**/*.${sass_dir}`
  ], [ 'sass' ]);
});

gulp.task('sass', function () {
  gulp.src(`./public/.dev/${sass_dir}/index.${sass_dir}`)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/assets/css'))
  ;

  console.log('\x1b[31m', `[GULP -- INFO] Currently compiling ${sass_dir}.`);
  console.log('\x1b[0m', `[GULP -- INFO] You are currently in task ${count}.`);
  count++;
});
