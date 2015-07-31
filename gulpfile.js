var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    jasmine = require('gulp-jasmine');

gulp.task('tests', function() {
    return gulp.src('./resources/assets/specs/**/*.js')
        .pipe(jasmine());
});

elixir(function(mix) {
    mix.task('tests');

    mix.scripts([
        'jquery/dist/jquery.js',
        'bootstrap-sass/assets/javascripts/bootstrap.js',
        'angular/angular.js',
        'angular-route/angular-route.js'
    ], 'public/js/vendor.js', './node_modules/');

    mix
        .sass('app.scss')
        .browserify('app.js')
        .version(['css/app.css', 'js/vendor.js', 'js/bundle.js']);
});
