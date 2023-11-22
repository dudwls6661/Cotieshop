$(document).ready(function () {

    $("header").each(function(){

        let win = $(window);
        let header = $(this);
        let main = $("main .main>h2");
        let spot = main.offset().top;

        win.scroll(function(){
            if(win.scrollTop() > spot ){
                header.addClass("fix")
            }else{
                header.removeClass("fix")
            }
        })
    });









    $("#efect").hover(function () {
        $("#efect").find('span').stop(true).animate({ opacity: '1' })
    }, function () {
        $("#efect").find('span').stop(true).animate({ opacity: '0' })
    });

    $("#efect").click(function () {
        $(".big_video").stop(true).animate({opacity : '1'});
        $(".big_video").css({zIndex: '999'})
    });
    $(".big_video p").click(function () {
        $(".big_video").stop(true).css({opacity : '0'});
        $(".big_video").css({zIndex: '-99'})
    });





    $("#sec2 .contents .con .img img").hover(function () {
        $(this).stop(true).animate({ opacity: '0' })
    }, function () {
        $(this).stop(true).animate({ opacity: '1' })
    });


    $("#sec3 .img span").hover(function () {
        $(this).stop(true).animate({ opacity: '1' })
    }, function () {
        $(this).stop(true).animate({ opacity: '0' })
    });


    $("header>ul>li:nth-child(6)").click(function () {
        $(".search").stop(true).css({display : 'block'});
    });
    $(".search .ex p").click(function () {
        $(".search").stop(true).css({display : 'none'});
    });


    $("header>ul>li:last-child a>i").click(function () {
        $(".small_menu").stop(true).css({display : 'block'});
    });
    $(".small_menu .ex p").click(function () {
        $(".small_menu").stop(true).css({display : 'none'});
    });


    $("footer .left .fbox").click(function () {
        $("footer .left .fbox .fade").stop(true).slideToggle();
    });


    $(".menu").hover(function () {
        $(".subul", this).stop(true).slideToggle();
    });


    
    $("footer .top").each(function(){

        let win = $(window);
        let top = $(this);
        let main = $("#sec1>h2");
        let spot = main.offset().top;
        let start = $("html,body")

        win.scroll(function(){
            if(win.scrollTop() > spot ){
                top.stop(true).animate({opacity : '1'},200)
            }else {
                top.stop(true).animate({opacity : '0'},200)
            }
        
        })

        $(top).click(function(){
            $(start).animate({scrollTop : 0},500)
        });
    });

    





});
