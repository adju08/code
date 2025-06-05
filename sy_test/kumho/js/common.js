

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


$(window).scroll(function(){

})


function resize_chk(){
    window_w = $(window).width()
    if(window_w > mobile_size){
        device_status = 'pc'
    }else{
        device_status = 'mobile'
    }
}
function scroll_chk(){
    scrolling = $(window).scrollTop()
    if(scrolling > 0){
        $('header').addClass('fixed')
    }else{

    }
}