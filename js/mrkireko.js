$(document).ready(function(){
    $(".works-subcard").mouseenter(function(){
        $(this).children(".work-title").css("margin-top", "-64px");
        $(this).children("#work-img").css("width", "192px");
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