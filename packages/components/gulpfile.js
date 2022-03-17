const gulp = require("gulp");
const ts = require("gulp-typescript");
const merge = require("merge2");

const tsProject = ts.createProject("tsconfig.json", {
  declaration: true,
});

function tsBuild() {
  const tsResult = gulp.src("src/**/*.{ts,tsx}").pipe(tsProject());

  return merge([
    tsResult.dts.pipe(gulp.dest("dist")),
    tsResult.js.pipe(gulp.dest("dist")),
  ]);
}

function tsWatch() {
  gulp.watch("src/**/*.{ts,tsx}", tsBuild);
}

exports.build = tsBuild;
exports.watch = tsWatch;
