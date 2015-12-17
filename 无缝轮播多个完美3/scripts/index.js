$(function(){
    //动的都要具有定位属性
    var fn=function(){
          $('#chang').find('.aa').animate({left:-506},'slow',function(){
            $(this).css({left:0});
            $('.ding').append(this);
        });
        $('.ding').find('.aa:first').animate({left:-508},'slow',function(){
            $(this).css({left:0});
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