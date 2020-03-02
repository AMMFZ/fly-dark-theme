$(document).ready(function() {
    'use strict';
    // add active class on bars icon when open navbar
    $('.navbar-light .bars-icon').click(function(){
        $(this).toggleClass('active');
        $('.navbar-light .collapse').toggleClass('active');
    })
    // Smooth moving between sections in page
    $('.navbar-light .nav-link').click(function(){
        var con = $(this).attr('href');
        if(con == '#footer'){
            $('html,body').animate({
                scrollTop:$(con).offset().top - 300
            },1000)
        }else{
            $('html,body').animate({
                scrollTop:$(con).offset().top - 10
            },1000)
        }
    })
    //show and hidden gotop button
    $(window).on('scroll',function(){
        var window_scroll = $(this).scrollTop();
        if(window_scroll > 1300){
            $('.gotop').css({'bottom':'-5px','left':'-23px','display':'block'});
        }else{
            $('.gotop').css({'left':'-55px','bottom':'-55px'});
        }
    });
    // GoToTop
    $('.gotop').click(function(){
        $('body,html').animate({
            scrollTop: $(this).scrollTop()
        },1000)
    });
    // remove placeholder when focus on input
    $('.footer form .form-control').focus(function(){
        $(this).attr('placeholder','');
    }).blur(function(){
        $(this).attr('placeholder','example@example.com')
    })
    // Animate Page
    // Animate Website
    $(window).on('scroll', function(){
        var window_scroll = $(this).scrollTop(),
            features = $('#features').offset().top - 150,
            work = $('#work').offset().top - 150,
            team = $('#team').offset().top - 200,
            footer = $('#footer').offset().top - 600;
        // Animate Features Section
        if(window_scroll >= features){
            $('.features .odd').css({
                transform:'translateX(0px) scale(1)',
                opacity:1
            })
            $('.features .even').css({
                transform:'translateX(0px) scale(1)',
                opacity:1
            })
        }else{
            $('.features .odd').css({
                transform:'translateX(25px) scale(1)',
                opacity:0
            })
            $('.features .even').css({
                transform:'translateX(-25px) scale(1)',
                opacity:0
            })
        }
        // Animate Work Section
        if(window_scroll >= work){
            $('.work .work-info').css({
                transform:'translateX(0)'
            })
        }else{
            $('.work .work-info').css({
                transform:'translateX(-150%)'
            })
            $('.work .work-info2').css({
                transform:'translateX(150%)'
            })
        }
        // Animate Team Section
        if(window_scroll >= team){
            $('.customer').css({
                transform:'translate(0px,0px)'
            })
        }else{
            $('.custleft').css({transform:'translate(-150%,0px)'})
            $('.custright').css({transform:'translate(150%,0px)'})
        }
        // Animate Footer
        if(window_scroll >= footer){
            $('.footer .row:first-of-type .before_footer').css({
                transform:'rotate(0deg) scale(1)',
                opacity:1
            })
        }else{
            $('.footer .row:first-of-type .before_footer').css({
                transform:'rotate(-45deg) scale(.1)',
                opacity:0
            })
        }
    });
});