$(document ).ready(function() {
    console.log( "ready!" );

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      $('nav').addClass("bg-danger");
      $('nav').removeClass("bg-none");
      $("#topButton").show();
      $("#navBr").addClass('scroll-down');
    } else{
        $('nav').removeClass("bg-danger");
        $('nav').addClass("bg-none");
        $("#topButton").hide();
        $("#navBr").removeClass('scroll-down');


    // }
}
});
});

// $(document).scroll(function() {
//
//    if(scroll_start > 500px) {
//        $(".navbar-default").css('background-color', '#f0f0f0');
//     } else {
//        $('.navbar-default').css('background-color', 'transparent');
//     }
// // });
// var myNav = document.getElementById('myNav');
// window.onscroll = function () {
//
//     if (document.body.scrollTop >= 200 ) {
//         myNav.classList.add("bg-danger");
//         myNav.classList.remove("bg-none");
//     }
//     else {
//         myNav.classList.add("bg-none");
//         myNav.classList.remove("bg-danger");
//     }
// };
