<!DOCTYPE html>
<html ng-app="app">
<head>
    <title>Project Manager - @yield('title', 'Home')</title>
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet" type="text/css">
</head>
<body>
    @include('layouts._nav')

    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <ng-view></ng-view>
            </div>

            <div class="col-md-4">
                <h1>Recent Updates</h1>

            </div>
        </div>
    </div>

    <script src="{{ elixir('js/bundle.js') }}"></script>
</body>
</html>
