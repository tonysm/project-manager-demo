<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\Projects\CreateProjectRequest;
use App\Http\Requests;
use App\Projects\CreateProject;
use App\Projects\PaginatedUserProjectsQuery;
use Illuminate\Http\Response;

class ProjectsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @param PaginatedUserProjectsQuery $query
     * @return Response
     */
    public function index(PaginatedUserProjectsQuery $query)
    {
        return $query->paginate($this->currentUser);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateProjectRequest  $request
     * @return Response
     */
    public function store(CreateProjectRequest $request)
    {
        $project = $this->dispatchFrom(CreateProject::class, $request, [
            'user' => $this->currentUser
        ]);

        return response()
            ->json($project)
            ->setStatusCode(201);
    }
}
