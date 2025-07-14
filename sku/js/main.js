
$(document).ready(function(){
    //console.log('들어가니')

    AOS.init({
        offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });


/*************************** visual swiper 연결 : 시작 ***************************/
    let visual_name = ['Seokyeong Univ', 'Ideas, together', '2nd in jobs, career aid']
    //console.log(visual_name[3]) 숫자가 0부터 시작
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">  ' + visual_name[index] + "</span>";
            },
        },
    });

/*************************** visual swiper 연결 : 종료 ***************************/





/******************************* updates 탭 기능 : 시작 ******************************/
    /* 
        1. 클릭한 li에서 data-content값을 가져와서
            ==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
        2. 클릭한 li에만 active 클래스 줌
        3. 클릭한 li 안에 있는 span에 선택됨이라고 글자 써줌(다른 li에 있는 건 삭제)
        4. 클릭한 li 속성 aria-selected값을 true로 변경 (다른 li는 모두 false)
    */
        let updates_content //클릭한 메뉴의 이름(id)
        $('.updates .notice .list .tab_list ul li').on('click', function(){

            if($(this).hasClass('active') == false){
                //1.
                updates_content = $(this).attr('data-content')
                //console.log(updates_content)
                $('.updates .notice .list .tab_content .tab_item').removeClass('active')
                $('.updates .notice .list .tab_content').find('#'+updates_content).addClass('active')
    
                //2.
                $('.updates .notice .list .tab_list ul li').removeClass('active')
                $(this).addClass('active')
    
                //3.
                $('.updates .notice .list .tab_list ul li button span').text('')
                $(this).find('span').text('선택됨')
    
                //4.
                $('.updates .notice .list .tab_list ul li').attr('aria-selected', 'false')
                $(this).attr('aria-selected', 'true')
            }
        })
    /******************************* updates 탭 기능 : 끝 ******************************/





}) //$(document).ready