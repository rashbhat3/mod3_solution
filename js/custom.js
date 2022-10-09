$(document).ready(function(){
    $('#nav-list li a').on('click', function (e) {
        var targetSec = $(this).attr('href');
        $('html, body').animate({
           scrollTop: $(targetSec).offset().top
        }, 2000);
     });
});