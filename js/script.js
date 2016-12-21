$(document).ready(function(){

    $(".link_tab").each(function(i){
        $(this).attr("href", "#tab" + i);
    });
    $(".content").each(function(i){
        $(this).attr("id", "tab" + i);
    });

    $(".tab__container li").click(function(e){
        e.preventDefault();
        $(".tab__container .active").removeClass("active");
        $(this).addClass("active");
        var tab = $(this).find("a").attr("href");
        $(".content").not(tab).css({"display":"none"});
        $(tab).fadeIn(200);
    });

});