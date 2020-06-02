// main.js
$(function () {
    /*윈도우가 실행되면 스크롤탑이 0이된다.*/
    $("html, body").stop().animate({"scrollTop":0}, 1500, "swing");

    /*컨텐트 가로값 = 윈도우 가로값*/
    var wt =$(window).width();
    $("#container > div").width(wt);

    /*container 가로크기만큼 body의 높이값 지정*/
    var Length = $("#container>div").size(); //.length 속성
    var containerWid = wt * Length;
    $("body").height(containerWid);

    var start = setTimeout(function(){
       $("#content1>section").addClass("on");
    })

    var lastScrollTop = 0; //마지막스크롤값

    $(window).scroll(function(){

        var winW = $(window).width();
        var winH = $(window).height();
        var scrollTop = $(window).scrollTop();

        var W = containerWid - winW;
        var H = containerWid - winH;


        var R = W / H ; // 비율
        var scrollR = scrollTop * R // 가로세로 비율


        $("#container").css({"transform":"translateX(-"+scrollR+"px)"});

        var scroll = $(this).scrollTop(); // 현재의 scroll 위치값
        //캐릭터 움직이기
        if(scroll>lastScrollTop){
            //스크롤 내릴때
            //현재 스크롤 값이 이전 스크롤값lastScrollTop보다 크면
            $(".character").removeClass("left");
            $(".character").addClass("on");
        }else{
            //스크롤 올릴때
            //현재 스크롤 값이 이전 스크롤값lastScrollTop보다 작으면
            $(".character").addClass("on");
            $(".character").addClass("left");
        }
        
        lastScrollTop = scroll;

        clearTimeout($.data(this, "scrollCheck"));
        
        //스크롤이 멈추면 0.5초 후에 애니메이션이 멈춤
        $.data(this, "scrollCheck", setTimeout(function(){ //setTimeout은 한번만 실행
            $(".character").removeClass("on");
        }), 500);




        var scroll = $(this).scrollTop(); // 현재 scroll위치값
        if (scroll>=wt*0){ //if(scroll>=content.eq(0).offset().left)
            $("#content1>section").addClass("on");
        } else {
            $("#content1>section").removeClass("on");
        }
        if (scroll>=wt*1){ //if(scroll>=content.eq(0).offset().left)
            $("#content2>section").addClass("on");
        } else {
            $("#content2>section").removeClass("on");
        }
        if (scroll>=wt*2){ //if(scroll>=content.eq(0).offset().left)
            $("#content3>section").addClass("on");
        } else {
            $("#content3>section").removeClass("on");
        }
        if (scroll>=wt*3){ //if(scroll>=content.eq(0).offset().left)
            $("#content4>section").addClass("on");
        } else {
            $("#content4>section").removeClass("on");
        }
        if (scroll>=wt*4){ //if(scroll>=content.eq(0).offset().left)
            $("#content5>section").addClass("on");
        } else {
            $("#content5>section").removeClass("on");
        }
        if (scroll>=wt*5){ //if(scroll>=content.eq(0).offset().left)
            $("#content6>section").addClass("on");
        } else {
            $("#content6>section").removeClass("on");
        }
        if (scroll>=wt*6){ //if(scroll>=content.eq(0).offset().left)
            $("#content7>section").addClass("on");
        } else {
            $("#content7>section").removeClass("on");
        }
        if (scroll>=wt*7){ //if(scroll>=content.eq(0).offset().left)
            $("#content8>section").addClass("on");
        } else {
            $("#content8>section").removeClass("on");
        }
        if (scroll>=wt*8){ //if(scroll>=content.eq(0).offset().left)
            $("#content9>section").addClass("on");
        } else {
            $("#content9>section").removeClass("on");
        }
        if (scroll>=wt*9){ //if(scroll>=content.eq(0).offset().left)
            $("#content10>section").addClass("on");
        } else {
            $("#content10>section").removeClass("on");
        }

        $(document).keydown(function(e){
            if(e.keyCode == 39){ //오른쪽 방향키
                var scrollNow = $(document).scrollTop();
                $(window).scrollTop(scrollNow + 01);
            }
            if(e.keyCode == 37){ //왼쪽 방향키
                var scrollNow = $(document).scrollTop();
                $(window).scrollTop(scrollNow - 01);
            }
        });

        // for(i=1;i>=10;i++){
        //     if (scroll>=wt*(i-1)){ //if(scroll>=content.eq(0).offset().left)
        //         $("#content"+i+">section").addClass("on");
        //     } else {
        //         $("#content"+i+">section").removeClass("on");
        //     }
        // }
    });

});