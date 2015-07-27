'use strict';

angular
    .module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'DashboardController as vm',
                template: require('./../templates/views/dashboard.html')
            })
            .otherwise({
                redirectTo: '/'
            });
    });