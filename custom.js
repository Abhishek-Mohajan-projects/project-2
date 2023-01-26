$(document).ready(function (){

    $('.menu-toggler').click(function (){

        $('body').addClass('active');

    });

    $('.close-menu').click(function (){

        $('body').removeClass('active');

    });

});