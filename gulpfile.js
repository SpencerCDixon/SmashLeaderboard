var gulp = require('gulp'),
  webpack = require('gulp-webpack');

gulp.task("webpack", function() {
  return gulp.src("client/assets/javascripts/entry.jsx")
  .pipe(webpack(require("./webpack.config.js")))
  .pipe(gulp.dest("app/assets/javascripts/"));
});

gulp.task("watch", function() {
  gulp.watch(["client/assets/javascripts/**/*.js","client/assets/javascripts/**/*.jsx"], ["webpack"]);
});

gulp.task("default", ["watch"]);
