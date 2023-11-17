$(document).ready(function () {

    $("header").each(function(){

        let win = $(window);
        let header = $(this);
        let main = $("main .main>h1");
        let spot = main.offset().top;

        win.scroll(function(){
            if(win.scrollTop() > spot ){
                header.addClass("fix")
            }else{
                header.removeClass("fix")
            }
        })
    });


//////mouseevent/////////
  $(window).mousemove(function(){
          $(".mouse>img").css({
               position: 'absolute', 
               zIndex : '9999',  
               left: event.pageX+2,  
               top: event.pageY+2,  
          });
     });

        $("button").hover(function(){
            $(".mouse>img").attr('src','img/cursor-hand.png')
        },function(){
            $(".mouse>img").attr('src','img/cursor-pointer.png')
        });

        $("#efect").hover(function(){
            $(".mouse>img").attr('src','img/cursor-see.png')
        },function(){
            $(".mouse>img").attr('src','img/cursor-pointer.png')
        });
        $(".big_video p").hover(function(){
            $(".mouse>img").attr('src','img/cursor-hand.png')
        },function(){
            $(".mouse>img").attr('src','img/cursor-pointer.png')
        });

        $("#sec2 .contents .con").hover(function(){
            $(".mouse>img").attr('src','img/cursor-heart.png')
        },function(){
            $(".mouse>img").attr('src','img/cursor-pointer.png')
        });

        $("#sec3 .img .inner").hover(function(){
            $(".mouse>img").attr('src','img/cursor-heart.png')
        },function(){
            $(".mouse>img").attr('src','img/cursor-pointer.png')
        });

        $("footer .left .fbox .save").hover(function(){
            $(".mouse>img").attr('src','img/cursor-tiny.png')
        },function(){
            $(".mouse>img").attr('src','img/cursor-pointer.png')
        });

//////mouseevent/////////






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
        let main = $("#sec1>h1");
        let spot = main.offset().top;

        win.scroll(function(){
            if(win.scrollTop() > spot ){
                top.stop(true).animate({opacity : '1'},200)
            }else {
                top.stop(true).animate({opacity : '0'},200)
            }
        
        })

        $(top).click(function(){
            $(window).scrollTop(0);
        });
    });

    





});
