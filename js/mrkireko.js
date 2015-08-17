$(document).ready(function(){
    $(".works-subcard").mouseenter(function(){
        $(this).children(".work-title").css("margin-top", "-75px");
        $(this).children("#work-img").css("width", "100%");
        $(this).children("#work-img").css("margin-left", "0");
        $(this).children("#work-img").css("margin-top", "0");
    });
    $(".works-subcard").mouseleave(function(){
        $(this).children(".work-title").css("margin-top", "0px");
        $(this).children("#work-img").css("width", "256px");
        $(this).children("#work-img").css("margin-left", "-32px");
        $(this).children("#work-img").css("margin-top", "-32px");
    });
});