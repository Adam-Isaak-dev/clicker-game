const { src, dest, series, parallel } =  require('gulp');

// html task
function htmlTask() {
  return src('src/*.html')
    .pipe(dest('dist'))
}

// scripts task
function jsTask() {
  return src('src/js/*.js')
    .pipe(dest('dist/js'))
}

// scripts task
function cssTask() {
  return src('src/css/*.css')
    .pipe(dest('dist/css'))
}

exports.html = htmlTask;
exports.scripts = jsTask;
exports.styles = cssTask;
exports.default = series(htmlTask, parallel(jsTask, cssTask));