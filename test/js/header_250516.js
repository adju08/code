$(document).ready(function(){

    /*
        header에 fixd 클래스를 주는 것 ...
        1. 브라우저가 조금이라도 스크롤이 되면 header에 fixd 클래스를 추가
           스크롤 값이 0보다 크면 (0포함 안함)

        2. 다시 브라우저 맨 위로 스크롤이 되면 header에 fixd 클래스를 삭제
           스크롤 값이 0이거나 그보다 작으면 (0포함)

        ★클래스를 주는 명령★

        ★브라우저가 스크롤 되는 것을 체크할 수 있는 명령을 알아야함★
    */

    //$('header').addClass('fixd')
    //$('header').removeClass('fixd')

    //html이 로딩된 이후 단 1번만 실행
    let scrolling //출생신고 / 바구니(변수-scrolling)에 $(window).scrollTop()를 담음
    scroll_chk() //함수를 호출 (함수의 실행)

    function scroll_chk(){
        //함수 선언(scroll_chk라는 이름의 함수가 있어요!!)
        scrolling = $(window).scrollTop() /* lte=출생신고/ 단 한번만 해주면 됨 
                                            -> 출생신고를 제외하고는 새로 부를때마다 선언해줘야함 */
        console.log(scrolling)

        if(scrolling > 0){ //스크롤 된 값이 0보다 크면
            //console.log('0보다 크다')
            $('header').addClass('fixd')
        }else{ //그외 나머지 전부 (0이거나 0보다 작으면)
            //console.log('0이다')
            $('header').removeClass('fixd')
        }
    }

    $(window).scroll(function(){
        //스크롤 할 때마다 1번씩 실행(스크롤을 안하면 실행XXXXX)
        scroll_chk() //함수를 호출 (함수의 실행)
    })

})//$(document).ready