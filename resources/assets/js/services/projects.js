function ProjectService($http) {

    function getProjects()
    {
        return $http.get('/api/projects');
    }

    function addProject(project)
    {
        return $http.post('/api/projects', project);
    }

    return {
        getProjects: getProjects,
        addProject: addProject
    };
}

ProjectService.$inject = ['$http'];

module.exports = ProjectService;