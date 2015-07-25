@extends('layouts.external')

@section('content')
    <div class="row">
        <div class="col-md-4 col-md-offset-4 well">
            <h2>Login!</h2>
            @include('auth._errors')
            <hr>
            <form action="{{ action('Auth\\AuthController@postLogin') }}" method="post">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" class="form-control" />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" class="form-control" />
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-lg">Login!</button>
                </div>
            </form>
        </div>
    </div>
@stop