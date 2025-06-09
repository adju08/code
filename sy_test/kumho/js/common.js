

/******************* 
 * pc버전, 모바일 버전 구분
 * 스크롤된 값 계산
 * 
 * 스크롤을 내리면 header에 fixed 클래스 주기
 * 메뉴에 마우스를 올리면 menu_over 클래스 추가
 * 메뉴를 오버한 li에 over 클래스 추가
 * 
 * 스크롤을 내릴 때는 gnb_up 클래스 추가
 * 스크롤을 올릴 때는 gnb_up 클래스 삭제
 * ===> 이전에 스크롤값과 현재 스크롤값을 비교해서
 *      현재 값이 더 크면 내려가는 중 ( 100 --> 200 )
 *      현재 값이 작으면 올라가는 중 ( 200 --> 100 )
 *******************/

let device_status
let scrolling
let scroll_prev
let window_w
let mobile_size = 1024
let menu_open


$(window).scroll(function(){
    scroll_chk()
})
$(window).resize(function(){
    resize_chk()
})
$(document).ready(function(){
    scroll_chk()
    resize_chk()

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })


    /************* 모바일 메뉴 열고 닫기 ************/
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    /************* 모바일 2차 메뉴 열고 닫기 *************
     * 지금 현재 메뉴가 열려있는지 닫혀있는지 구분 (li에 open 클래스 있는지 유무)
     * 메뉴가 열려있으면 - li에 open클래스 삭제, 2차 메뉴 접기
     * 메뉴가 닫혀있으면 - li에 open클래스 추가, 2차 메뉴 열기
     */
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open')
            // console.log(menu_open)

            if(menu_open == true){
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
        }
    })


})//$(document).ready


function resize_chk(){
    window_w = $(window).width()
    if(window_w > mobile_size){
        device_status = 'pc'
    }else{
        device_status = 'mobile'
    }
}
function scroll_chk(){
    scroll_prev = scrolling
    scrolling = $(window).scrollTop()
    if(scrolling > 0){
        $('header').addClass('fixed')
        if(scrolling > scroll_prev){
            $('header').addClass('gnb_up')
        }else{
            $('header').removeClass('gnb_up')
        }
    }else{
        $('header').removeClass('fixed')
    }
}