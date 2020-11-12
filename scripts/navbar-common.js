
function navbarCommonAdd() {
    /* this code is badly formatted however it makes the textblock a little clearer */
    
    $("body").prepend('<navbar class="navbar navbar-expand-lg navbar-dark bg-dark">');
    $("navbar").append('<a class="navbar-brand" href="">Home</a>');
    $("navbar").append('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">');
        $("button").append('<span class="navbar-toggler-icon">');
    $("navbar").append('<div class="collapse navbar-collapse" id="navbarToggler">');
        $("#navbarToggler").append('<ul id="burgerMenu" class="navbar-nav ml-auto">');
            $("#burgerMenu").append('<li class="nav-item" id="searchNavButton">');
            $("#burgerMenu").append('<li class="nav-item" id="reviewsNavButton">');
            $("#burgerMenu").append('<li class="nav-item" id="homeNavButton">');
            $("#burgerMenu").append('<li class="nav-item" id="loginNavButton">');
                $("#searchNavButton").append('<a class="nav-link" href="search.html">Search</a>');
                $("#reviewsNavButton").append('<a class="nav-link" href="review-tutor.html">Reviews</a>');
                $("#homeNavButton").append('<a class="nav-link" href="index.html">Home</a>');
                $("#loginNavButton").append('<a class="nav-link" href="login.html">Login</a>');
}

navbarCommonAdd();

/* Old Code
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="search.html">Search</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="review-tutor.html">Reviews</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="login.html">Login</a>
            </li>
        </ul>
    </div>
</nav>
*/