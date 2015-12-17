$(function(){
    //所有的div都具有定位属性，因为要移除孩子添加到其他地方，用浮动位置会变，所以全部用定位
    var fn=function(){
       $('#chang').find('.aa:first').animate({left:-206},'slow',function(){
            $(this).css({left:0});
            $('.ding').append(this);
        });
        $('#chang').find('.aa:first').next().animate({left:0},'slow');
        $('#chang').find('.aa:first').next().next().animate({left:206},'slow');
        $('#chang').find('.aa:last').animate({left:412},'slow');
        $('.ding').find('.aa:first').animate({left:-208},'slow',function(){
            $(this).css({left:618});
            $('#chang').append(this);
        }); 
    };
    var timerId=setInterval(fn,1000);
    $('.aa').hover(function(){
        clearInterval(timerId);
    },function(){
        clearInterval(timerId);
        timerId=setInterval(fn,1000);
    });
        
});