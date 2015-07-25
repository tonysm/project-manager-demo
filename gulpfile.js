var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.scripts([
        'jquery/dist/jquery.js',
        'bootstrap-sass/assets/javascripts/bootstrap.js',
        'angular/angular.js'
    ], 'public/js/vendor.js', './node_modules/');

    mix
        .sass('app.scss')
        .browserify('app.js')
        .version(['css/app.css', 'js/vendor.js', 'js/bundle.js']);
});
