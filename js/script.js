// ********** Tab **********
$(function(){

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

// ********** ToolTip **********

    $("input").each(function() {
        var tooltip = $(this).attr("title");
        var thisButton = $(this);

        $(this).mouseover(function() {
            $(this).attr("title", "");
            $("p#tooltip").remove();
            $(this).parent().append('<p id="tooltip">' + tooltip + '</p>');
        });

        $(this).mouseout(function() {
            $(this).attr("title", tooltip);
            $("p#tooltip").remove();
        });

        $(".button__form").click(function(e){
            e.preventDefault();
            $(thisButton).parent().append('<p id="tooltip">' + tooltip + '</p>');
        });

    });

});


