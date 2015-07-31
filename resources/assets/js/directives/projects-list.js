'use strict';

function ProjectsList() {
    function ProjectsListController(Projects) {
        Projects.getProjects().then(function(result) {
            this.projects = result.data;
        }.bind(this));

        this.newProject = {
            name: '',
            description: ''
        };
        this.modal = null;

        this.showForm = function showForm(id) {
            this._getModal(id).modal();
        }.bind(this);

        this._getModal = function _getModal(id) {
            if ( ! this.modal) {
                this.modal = $("#" + id);
            }

            return this.modal;
        }.bind(this);

        this.createProject = function createProject() {
            Projects.addProject(this.newProject)
                .then(function(result) {
                    this.newProject = {name: '', description: ''};
                    this._getModal().modal('toggle');
                }.bind(this));
        }.bind(this);
    }

    return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: ProjectsListController,
        bindToController: true,
        replace: true,
        scope: {},
        template: require('./../templates/directives/projects-list.html')
    };
}

module.exports = ProjectsList;