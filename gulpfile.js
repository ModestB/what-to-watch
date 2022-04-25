const gulp = require("gulp");
const zip = require("gulp-zip");
const fs = require("fs");
const json = JSON.parse(fs.readFileSync("./package.json"));

exports.default = () =>
  gulp
    .src("build/*")
    .pipe(zip(`${json.name}-${json.version}.zip`))
    .pipe(gulp.dest("chrome"));
