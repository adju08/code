
$(document).ready(function(){
    //console.log('들어가니')

    AOS.init({
        offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });


/*************************** visual swiper 연결 : 시작 ***************************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        // pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        //     el: '.swiper-pagination', /* 해당 요소의 class명 */
        //     clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        //     type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        //     renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
        //         return '<span class="' + className + '">' + (index + 1) + "</span>";
        //     },
        // },

        navigation: {  /* 이전, 다음 버튼 */
		    nextEl: '.visual .ctrl_wrap .btn_next',  /* 다음 버튼의 클래스명 */
	    },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .ctrl_wrap .count_pc', /* 해당 요소의 class명 */
            //clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	    },
        // pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        //     el: '.visual .ctrl_wrap .count_mobil', /* 해당 요소의 class명 */
        //     clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        //     //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        //     renderBullet: function (index, className) {
        //         return '<span class="' + className + '">' + (index + 1) + "</span>";
        //     },
	    // },
    });

    

/*************************** visual swiper 연결 : 종료 ***************************/







}) //$(document).ready