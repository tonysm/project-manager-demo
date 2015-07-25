<!DOCTYPE html>
<html>
<head>
    <title>Project Manager - @yield('title', 'Home')</title>
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet" type="text/css">
</head>
<body>
    @include('layouts._nav')

    <div class="container">
        @yield('content')
    </div>

    <script src="{{ elixir('js/vendor.js') }}"></script>
</body>
</html>
