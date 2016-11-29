// Load plugins
var gulp = require('gulp');

// Copies the assetts from the pearson elements library and brings them into UI / Pattern Lab.

gulp.task('copy-bower', function() {
    gulp.src("bower_components/**")
        .pipe(gulp.dest('pattern-lab/source/js/lib/'))
        .pipe(gulp.dest('pattern-lab/public/js/lib/'));
});

