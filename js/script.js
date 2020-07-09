$(function(){
    $('html, body').animate({
        scrollTop : 0
    }, 1)

    $(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    })    
    //btn_close .onclick
    $('.btn_close').on('click', function(){
        $(this).parent().addClass('close');
    })

    //header .onmouseenter
    $('header').on('mouseleave', function(){
        $('header').removeClass('on');
        $('header > .inner > .gnb > ul > div > li > a').removeClass('on');
        $('header > .inner > .gnb > ul > div > li > ul').removeClass('on');
    });
    $('header > .inner > .gnb > ul > div > li > a').on('mouseenter',function(){
        $('header > .inner > .gnb > ul > div > li > a').removeClass('on');
        $('header > .inner > .gnb > ul > div > li > ul').removeClass('on');
        $(this).parent().find('ul').addClass('on');
        $(this).addClass('on');
        $('header').addClass('on');
        if($(this).hasClass('empty') === true){
            $('header').removeClass('on');
            $(this).removeClass('on');
        }
    });

    
})