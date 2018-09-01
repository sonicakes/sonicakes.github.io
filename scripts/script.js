$(document).ready(function () {
    console.log("ready!");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            $('nav').addClass("bg-info");
            $("#navBr").addClass('scroll-down');
        } else {
            $('nav').removeClass("bg-info");

        }
    });
});
