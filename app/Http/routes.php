<?php

Route::get('/', function () {
    return view('welcome');
});

Route::group(['before' => 'auth', 'namespace' => 'Api', 'prefix' => 'api'], function() {
    Route::resource('projects', 'ProjectsController', ['only' => ['index', 'store']]);
});
