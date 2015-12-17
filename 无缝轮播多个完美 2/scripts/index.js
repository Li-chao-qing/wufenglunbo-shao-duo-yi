$(function(){
    //所有动的都要加上定位，设定开始位置
    var fn=function(){
        $('#chang').find('.yi:first').animate({left:-412},'slow',function(){
            $(this).css({left:0});
            $('.ding').append(this);
        });
        $('#chang').find('.yi:last').animate({left:0},'slow');
        $('.ding').find('.yi:first').animate({left:-414},'slow',function(){
            $(this).css({left:412});
            $('#chang').append(this);
        });
    };
    var timerId=setInterval(fn,2000);
    $('.aa').hover(function(){
        clearInterval(timerId);
    },function(){
        clearInterval(timerId);
        timerId=setInterval(fn,2000);
    });
        
});