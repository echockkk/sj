window.onload = function(){
    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);
    var liWidth = $('.ch-slide li').width();
    var i = 1;
    $('.ch-slide').on('swipeLeft',function(){
        var width = liWidth*i;
        i++;
        $(this).animate({translateX:-width+'px'},1000);
        var mgl = $(this).offset().left;
        console.log(mgl)
    });
     $('.ch-slide').on('swipeRight',function(){
        var width = liWidth*i;
        i--;
        $(this).animate({translateX:width+'px'},1000);
        var mgl = $(this).offset().left;
        console.log(mgl)
     });
     $('.ch-slide li').on('tap',function(){
        var index = $(this).index();
        $(this).children().children()[0].src;
        console.log(src)
        // $('.ch-xk').css('background',);
     })
}