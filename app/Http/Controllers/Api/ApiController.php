<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Auth\Guard;

abstract class ApiController extends Controller
{
	/**
	 * @var User
	 */
	protected $currentUser;

	/**
	 * @param Guard $guard
	 */
	public function __construct(Guard $guard)
	{
		$this->currentUser = $guard->user();
	}
}