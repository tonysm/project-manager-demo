'use strict';

// Dependencies
require('angular');
require('angular-route');

var app = angular.module('app', ['ngRoute']);

// Application bindings
require('./services');
require('./directives');
require('./controllers');
require('./config');