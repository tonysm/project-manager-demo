<?php

namespace App\Projects;

use App\Jobs\Job;
use App\Projects\Project;
use App\User;
use Illuminate\Contracts\Bus\SelfHandling;

class CreateProject extends Job implements SelfHandling
{
    /**
     * @var User
     */
    private $user;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $description;

    /**
     * Create a new job instance.
     * @param User $user
     * @param $name
     * @param $description
     */
    public function __construct(User $user, $name, $description)
    {
        $this->user = $user;
        $this->name = $name;
        $this->description = $description;
    }

    /**
     * Execute the job.
     *
     * @return Project
     */
    public function handle()
    {
        return $this->user->createProject($this->name, $this->description);
    }
}
