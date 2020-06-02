// main.js
$(function(){

    
    // 윈도우 시작하면 화면 맨위로 이동
    $("html,body").stop().animate({"scrollTop":0},1500,"swing")

    // 윈도우 시작하면 퀵메뉴 위치
    var t = $(window).height()/2 - $("#quick").height()/2;
    $("#quick").stop().animate({"top":t},700,"linear")

    

    // 브라우저의 높이값을 div의 높이값으로
    /*중요*//*중요*//*중요*//*중요*//*중요*/
    var ht = $(window).height();
    $("#container>div").height(ht);
    

    
    // window크기가 바뀔때마다 100%로 리사이즈
    $(window).resize(function(){
        var ht = $(window).height();
        $("#container>div").height(ht);
    });
    /*중요*//*중요*//*중요*//*중요*//*중요*/
    

    // 처음부터 content1안에 section 보여라.
    var start = setTimeout(function(){
        $("#content1>section").addClass("on")
    },500);

    
    // scroll 움직일때
    $(window).scroll(function(){
    
    
    
    //퀵메뉴 위치 
    var t = $(this).scrollTop()+$(window).height()/2 - $("#quick").height()/2;
    $("#quick").stop().animate({"top":t},700,"linear")

    var scroll = $(this).scrollTop(); //현재 scroll 위치값
    var content = $("#container>div"); 


    // content1
    if(scroll>=content.eq(0).offset().top-$("#container").offset().top){
        
        $(".gnb li a").removeClass("on");
        $(".gnb li a").eq(0).addClass("on");
        
        
        $(".quick li a").removeClass("on");
        $(".quick li a").eq(0).addClass("on");

        // 내용물 움직임 시작
        $("#content1>section").addClass("on");
    }else{
        // 움직임 취소
        $("#content1>section").removeClass("on")
    };
    // content2
    if(scroll>=content.eq(1).offset().top-$("#container").offset().top){
            
        $(".gnb li a").removeClass("on");
        $(".gnb li a").eq(1).addClass("on");
        
        $(".quick li a").removeClass("on");
        $(".quick li a").eq(1).addClass("on");

        // 내용물 움직임 시작
        $("#content2>section").addClass("on");
    }else{
        // 움직임 취소
        $("#content2>section").removeClass("on");
    };
    // content3
        if(scroll>=content.eq(2).offset().top-$("#container").offset().top){
            
            $(".gnb li a").removeClass("on");
            $(".gnb li a").eq(2).addClass("on");
            
            $(".quick li a").removeClass("on");
            $(".quick li a").eq(2).addClass("on");
        
            // 내용물 움직임 시작
            $("#content3>section").addClass("on");
        }else{
            // 움직임 취소
            $("#content3>section").removeClass("on")

        };
    // content3
    if(scroll>=content.eq(3).offset().top-$("#container").offset().top){
            
        $(".gnb li a").removeClass("on");
        $(".gnb li a").eq(3).addClass("on");
        
        $(".quick li a").removeClass("on");
        $(".quick li a").eq(3).addClass("on");
    
        // 내용물 움직임 시작
        $("#content4>section").addClass("on");
    }else{
        // 움직임 취소
        $("#content4>section").removeClass("on")
    };

    
    // 한페이지씩 이동       mousewheel 이벤트는 mousewheel플러그인을 html에 꽂아야 사용가능.
        $("#container>div").mousewheel(function(event,delta){
            if(delta>0){ //마우스 휠을 올렸을떄
                
                var prev = $(this).prev().offset().top;
                $("html,body").stop().animate({"scrollTop":prev},1400,"linear")
            
            }else if(delta<0){//마우스 휠을 내렸을떄
                
                var next = $(this).next().offset().top;
                $("html,body").stop().animate({"scrollTop":next},1400,"linear")
            }
        });



    });//scroll

    
    $(".gnb li,.quick li").click(function(){
        
        var i = $(this).index();
        var target = $("#container>div").eq(i).offset().top-$("#container").offset().top; 

        
        $("html,body").stop().animate({"scrollTop":target},1500,"swing")

    });


    
    
    //상단 메뉴가 없을 경우
    // $(".gnb li,.quick li").click(function(){
    //     var ht = $(window).height(); 
    //     var i = $(this).index();
    //     var target = i*ht;

    //     $("html,body").stop().animate({"scrollTop":target},1500,"swing")

    // });


});