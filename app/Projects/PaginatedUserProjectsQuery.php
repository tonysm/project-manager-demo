<?php

namespace App\Projects;

use App\User;
use Illuminate\Pagination\Paginator;

class PaginatedUserProjectsQuery
{
	/**
	 * @param User $user
	 * @param int $count
	 *
	 * @return Paginator
	 */
	public function paginate(User $user, $count = 20)
	{
		return $user->projects()->paginate($count);
	}
}