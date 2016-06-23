$(function(){
    //导航栏
    var sear_btn=$(".sear-btn"),
        head=$(".head"),
        nav=$(".nav"),
        index_nav=$(".index-nav"),
        sear_bar=$(".nav-bar .sear-bar"),
        index_sear_bar=$(".index-head .r-tip .sear-bar"),
        sear_close=sear_bar.find(".close"),
        index_sear_close=index_sear_bar.find(".close");
    sear_btn.on("click",function(){
        if(index_nav){
            index_nav.hide();
        }
        nav.hide();
        head.css("height",42);
        if(index_sear_bar){
            index_sear_bar.show();
        }
        sear_bar.show();
        return false;
    });
    sear_close.on("click",function(){
        sear_bar.hide();
        sear_bar.find("input").val("");
        nav.show();
        head.css("height",100);
    });
    if(index_sear_close){
        index_sear_close.on("click",function(){
            index_sear_bar.hide();
            index_sear_bar.find("input").val("");
            index_nav.show();
        })
    }

    /*返回顶部*/
    var to_top=$(".to-top");
    $(window).scroll(function(){
        var sTop=$(window).scrollTop();
        if(sTop >= 400){
            to_top.fadeIn();
        }else{
            to_top.fadeOut();
        }
    });
    to_top.on("click", function () {
        $("html,body").animate({"scrollTop":0},800);
    });

    //延迟加载
    $(".lazy").scrollLoading();


    //登录侧边栏
    var m_body=$(".main-box"),
        head_img=$(".head-img"),
        login_btn=$(".login-btn"),
        pageslide=$("#pageslide");

    pageslide.perfectScrollbar();

    m_body.on("click",function(){
        close_bar(m_body,pageslide);
    });
    login_btn.on("click",function(){
        toggle_bar(m_body,pageslide);
        return false;
    });
    head_img.on("click",function(){
        toggle_bar(m_body,pageslide);
        return false;
    });



    //登录注册
    var to_log=$(" .to-log"),
        to_reg=$(" .to-reg"),
        check_box=$(" .check-box");

    to_reg.on("click",function(){
        $(" .login-lay").fadeOut(function(){
            $(" .reg-lay").fadeIn();
        });
    });
    to_log.on("click",function(){
        $(" .reg-lay").fadeOut(function(){
            $(" .login-lay").fadeIn();
        });
    });
    check_box.on("click",function(){
        $(this).toggleClass("check-on");
    });

    //礼包
    var my_pack=$(".my-pack"),
        pack_dl=my_pack.children("dl");
    pack_dl.on("click",function(){
        $(this).addClass("on").siblings("dl").removeClass("on");
    });


    //复制

    if(window.addEventListener){
        var clipboard = new Clipboard(".copy");
        clipboard.on('success', function(e) {
            alert("复制成功");
        });
        clipboard.on('error', function(e) {
            alert("复制失败");
        });
    }else{
        $(".copy").on("click",function(){
            alert("复制失败，该升级浏览器了");
        });
    }
});


function toggle_bar(m_body,pageslide){
    if(pageslide.is(".on")){
        m_body.animate({"margin-left":0});
        pageslide.animate({"right":-320}).removeClass("on");
    }else{
        m_body.animate({"margin-left":-320});
        pageslide.animate({"right":0}).addClass("on ");
    }
}
function close_bar(m_body,pageslide){
    m_body.animate({"margin-left":0});
    pageslide.animate({"right":-320}).removeClass(" on");
}


