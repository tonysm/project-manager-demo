'use strict';

var DashboardController = require('./../../js/controllers/dashboard.js');

describe('Dashboard controller', function() {
    var controller;

    beforeEach(function (){
        controller = new DashboardController();
    });

    it('starts with a hello message', function() {
        expect(controller.hello).toEqual('World');
    });
});