var app = angular.module('app', []);
var ProjectsList = require('./directives/projectsList');
var ProjectsService = require('./services/projects');

app.service('Projects', ProjectsService);
app.directive('projectsList', ProjectsList);