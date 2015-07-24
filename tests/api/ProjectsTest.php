<?php

use App\Projects\Project;
use App\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProjectsTest extends TestCase
{
	use DatabaseTransactions;

	/** @test */
	public function user_create_project()
	{
		$user = factory(User::class)->create();
		$project = factory(Project::class)->make();
		$this->be($user);

		$this->post('/api/projects', $project->toArray())
			->seeJsonContains([
				'name' => $project->name
			])
			->seeStatusCode(201);
	}

	/** @test */
	public function user_can_see_his_project()
	{
		$user = factory(User::class)->create();
		$project = $user->projects()->save(factory(Project::class)->make());

		$this->be($user);

		$this->get('/api/projects')
			->seeJsonContains([
				'id' => (string) $project->id,
				'name' => $project->name,
				'description' => $project->description,
			])
			->seeStatusCode(200);
	}

	/** @test */
	public function user_can_only_see_his_projects()
	{
		$user = factory(User::class)->create();
		$user->projects()->save(factory(Project::class)->make());

		// other user projects
		factory(User::class)
			->create()
			->projects()
			->save(factory(Project::class)->make());

		$this->be($user);

		$this->get('/api/projects')
			->seeJsonContains([
				'total'=> 1
			])
			->seeStatusCode(200);
	}
}
