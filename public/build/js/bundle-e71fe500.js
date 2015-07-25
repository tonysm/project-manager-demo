(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app = angular.module('app', []);
var ProjectsList = require('./directives/projectsList');
var ProjectsService = require('./services/projects');

app.service('Projects', ProjectsService);
app.directive('projectsList', ProjectsList);

},{"./directives/projectsList":2,"./services/projects":3}],2:[function(require,module,exports){
'use strict';

function ProjectsList() {
    function ProjectsListController(Projects) {
        Projects.getProjects().then((function (result) {
            this.projects = result.data;
        }).bind(this));

        this.newProject = {
            name: '',
            description: ''
        };
        this.modal = null;

        this.showForm = (function showForm(id) {
            this._getModal(id).modal();
        }).bind(this);

        this._getModal = (function _getModal(id) {
            if (!this.modal) {
                this.modal = $("#" + id);
            }

            return this.modal;
        }).bind(this);

        this.createProject = (function createProject() {
            Projects.addProject(this.newProject).then((function (result) {
                this.newProject = { name: '', description: '' };
                this._getModal().modal('toggle');
            }).bind(this));
        }).bind(this);
    }

    return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: ProjectsListController,
        bindToController: true,
        replace: true,
        scope: {},
        template: require('./../templates/projects-list.html')
    };
}

module.exports = ProjectsList;

},{"./../templates/projects-list.html":4}],3:[function(require,module,exports){
'use strict';

function ProjectService($http) {

    function getProjects() {
        return $http.get('/api/projects');
    }

    function addProject(project) {
        return $http.post('/api/projects', project);
    }

    return {
        getProjects: getProjects,
        addProject: addProject
    };
}

ProjectService.$inject = ['$http'];

module.exports = ProjectService;

},{}],4:[function(require,module,exports){
module.exports = '<div class="row">\n    <h3>Projects List</h3>\n\n    <button class="btn btn-primary" ng-click="vm.showForm(\'formCreateProjectModal\')">Create a Project</button>\n\n    <hr />\n\n    <!-- List group -->\n    <div ng-show="vm.projects.total > 0">\n        <div class="list-group">\n            <a href="#" class="list-group-item" ng-repeat="project in vm.projects.data">\n                <h4 class="list-group-item-heading">{{ project.name }}</h4>\n                <p class="list-group-item-text">{{ project.description }}</p>\n            </a>\n        </div>\n    </div>\n\n    <div class="modal fade visible" id="formCreateProjectModal">\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <div class="modal-header">\n                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                    <h4 class="modal-title">New Project</h4>\n                </div>\n\n                <form ng-submit="vm.createProject()">\n                    <div class="modal-body">\n                        <div class="form-group">\n                            <label for="name">Project name</label>\n                            <input type="text" id="name" name="name" ng-model="vm.newProject.name" class="form-control" />\n                        </div>\n\n                        <div class="form-group">\n                            <label for="description">Project description</label>\n                            <textarea name="description" id="description" cols="30" rows="10" class="form-control" ng-model="vm.newProject.description"></textarea>\n                        </div>\n                    </div>\n                    <div class="modal-footer">\n                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n                        <button class="btn btn-primary">Create</button>\n                    </div>\n                </form>\n            </div><!-- /.modal-content -->\n        </div><!-- /.modal-dialog -->\n    </div><!-- /.modal -->\n</div>';
},{}]},{},[1]);
