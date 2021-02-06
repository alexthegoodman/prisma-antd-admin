const gulp = require("gulp");
// const sass = require("gulp-sass");
// const less = require("gulp-less");
// const autoprefixer = require("gulp-autoprefixer");
// const concat = require("gulp-concat");
// const cleanCSS = require("gulp-clean-css");
// const uglify = require("gulp-uglify");
// const pump = require("pump");
// const babel = require("gulp-babel");
// const refresh = require("gulp-refresh"); // install LiveReload chrome ext and turn on
// const image = require("gulp-image");
const minifyImg = require("gulp-imagemin");
// const obfuscate = require("gulp-obfuscate");

// // try gulp-image for compressing static assets - set Progressive?
// // try gulp-accessibility for auto audit
// // auto css comb on the /sass/ source dir?
// // stylelint-performance-animation
// // compress fonts and video to move source out of /public/
// // gulp-img-retina may good for the occassional thing (downsize 2x to 1x or 4x to 2x)
// // https://www.npmjs.com/package/gulp-obfuscate

// // move /assets/ to /craft/, only put folder-min into /public/ (private + no double min folders)
// // https://gist.github.com/demisx/beef93591edc1521330a

// // const sassGlob    = require('gulp-sass-glob'); // separate each section into a file now?

const prefix = `assets/`;

// gulp.task("video", function () {
//   return gulp
//     .src("static/video/**/*")
//     .pipe(gulp.dest("./web/assets/video-min/"));
// });

// gulp.task("fonts", function () {
//   return gulp
//     .src("static/fonts/**/*")
//     .pipe(gulp.dest("./web/assets/fonts-min/"));
// });

// // move unminified libs only due to pre-requisites
// gulp.task("libmover", function () {
//   return gulp.src("static/lib/**/*").pipe(gulp.dest("./web/assets/lib/"));
// });

gulp.task("image", function () {
  return (
    gulp
      .src(`${prefix}img/**/*`)
      //.pipe(image())
      .pipe(minifyImg())
      .pipe(gulp.dest(`${prefix}img-min/`))
  );
});

// // gulp.task("styles", function() {
// //   return gulp
// //     .src("static/scss/style.scss")
// //     .pipe(sass().on("error", sass.logError))
// //     .pipe(autoprefixer())
// //     .pipe(cleanCSS())
// //     .pipe(gulp.dest("./web/assets/css-min/"))
// //     .pipe(refresh());
// // });

// gulp.task("styles", function () {
//   return gulp
//     .src("static/scss/style.scss")
//     .pipe(less())
//     .pipe(autoprefixer())
//     .pipe(cleanCSS())
//     .pipe(gulp.dest("./web/assets/css-min/"))
//     .pipe(refresh());
// });

// gulp.task("compress", function (cb) {
//   return pump(
//     [
//       gulp.src("static/js/*.js"),
//       babel({
//         presets: ["babili"],
//       }),
//       //uglify(),
//       // use alternative which retains safety
//       // obfuscate({ replaceMethod: obfuscate.ZALGO, exclude:
//       //   ['document', 'window', '$.browser', 'console.info', 'evt',
//       //   'window.open', 'document.location', 'location']
//       // }),
//       gulp.dest("./web/assets/js-min/"),
//     ],
//     cb
//   );
// });

// gulp.task("compressWidgets", function (cb) {
//   return pump(
//     [
//       gulp.src("static/js/widgets/*.js"),
//       //uglify(),
//       babel({
//         presets: ["babili"],
//       }),
//       //obfuscate({ replaceMethod: obfuscate.ZALGO }),
//       gulp.dest("./web/assets/js-min/widgets/"),
//     ],
//     cb
//   );
// });

// // utlity to move SVGs packaged in libs
// gulp.task("libSVGS", function () {
//   return gulp
//     .src("static/lib/**/*.svg")
//     .pipe(gulp.dest("./web/assets/lib-min/"));
// });

// gulp.task("libStyles", function () {
//   return gulp
//     .src("static/lib/**/*.css")
//     .pipe(cleanCSS())
//     .pipe(gulp.dest("././web/assets/lib-min/"));
// });

// gulp.task("libScripts", function (cb) {
//   return pump(
//     [
//       gulp.src("static/lib/**/*.js"),
//       uglify(),
//       gulp.dest("./web/assets/lib-min/"),
//     ],
//     cb
//   );
// });

// // Watch tasks
// gulp.task("watch", function () {
//   refresh.listen();
//   gulp.watch("static/img/**/*", gulp.series("image"));
//   gulp.watch("static/video/**/*", gulp.series("video"));
//   gulp.watch("static/fonts/**/*", gulp.series("fonts"));

//   gulp.watch("static/**/*.scss", gulp.series("styles"));
//   gulp.watch("static/js/*.js", gulp.series("compress"));
//   gulp.watch("static/js/widgets/*.js", gulp.series("compressWidgets"));
//   gulp.watch("static/lib/**/*.css", gulp.series("libStyles"));
//   gulp.watch("static/lib/**/*.js", gulp.series("libScripts"));
// });

// let build = gulp.series(
//   "styles",
//   "compress",
//   "compressWidgets",
//   "libStyles",
//   "libScripts",
//   "libSVGS",
//   "fonts",
//   "image",
//   "video",
//   "libmover"
// );

// // Start up tasks
// gulp.task(
//   "default",
//   gulp.parallel(build, "watch", function (done) {
//     console.log("gulp done");
//     done();
//   })
// );
