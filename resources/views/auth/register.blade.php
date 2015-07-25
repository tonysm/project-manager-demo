@extends('layouts.external')

@section('content')
    <div class="row">
        <div class="col-md-4 col-md-offset-4 well">
            <h2>Register!</h2>
            @include('auth._errors')
            <hr>
            <form action="{{ action('Auth\\AuthController@postRegister') }}" method="post">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="form-control" />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" class="form-control" />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" class="form-control" />
                </div>

                <div class="form-group">
                    <label for="password_confirmation">Confirmation</label>
                    <input type="password" name="password_confirmation" class="form-control" />
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-lg">Register!</button>
                </div>
            </form>
        </div>
    </div>
@stop