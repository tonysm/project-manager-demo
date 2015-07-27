<?php

Route::get('/', ['as' => 'home', 'before' => 'guest', 'uses' => 'PagesController@home']);
Route::get('/about', ['as' => 'about', 'uses' => 'PagesController@about']);

Route::controller('auth', 'Auth\AuthController');

Route::group(['before' => 'auth'], function() {
    Route::get('dashboard', ['as' => 'dashboard', 'uses' => 'ScreenController@internal']);
});

Route::group(['before' => 'auth', 'namespace' => 'Api', 'prefix' => 'api'], function() {
    Route::resource('projects', 'ProjectsController', ['only' => ['index', 'store']]);
});
