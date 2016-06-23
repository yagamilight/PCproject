/*
* 延迟加载
* */
;(function($){
    $.fn.extend({
        scrollLoading:function() {
            var container = $(window);
            var _this=$(this);
            var load = function () {
                var con_h = container.height(),
                    con_top = container.scrollTop();
                $(_this).each(function (i) {
                    if((con_h+con_top) > $(this).offset().top && ($(this).height()+$(this).offset().top) > con_top){
                        $(this).attr("src",$(this).data("url"));
                    }
                });
            };
            load();
            container.on("scroll",load);
        }
    });
})(jQuery);