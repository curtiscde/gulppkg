const gulp = require('gulp');

const build = () => (
  gulp.series('build')
);

module.exports = {
  build,
};