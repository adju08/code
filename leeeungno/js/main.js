
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




/********* exhibitions 연결 : 시작 *********/
const exhibitions_swiper = new Swiper('.exhibitions .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		768: {    /* 640px 이상일때 적용 */
			spaceBetween: 24,
		},
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	
});
/********* exhibitions 연결 : 종료 *********/




/********* public 연결 : 시작 *********/
const public_swiper = new Swiper('.public .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            // 768: {    /* 768px 이상일때 적용 */
            //     spaceBetween: 0,
            //     centeredSlides: true,
            // },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.public .list .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });
/********* public 연결 : 종료 *********/




/********* collection 연결 : 시작 *********/
const collection_swiper = new Swiper('.collection .list_mobil .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		768: {
			spaceBetween: 16,
		},
        1024: {
			spaceBetween: 24,
		},
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	// autoplay: {  /* 팝업 자동 실행 */
	// 	delay: 2500,
	// 	disableOnInteraction: true,
	// },
    navigation: {
		nextEl: '.collection .ctrl_wrap .btn_next',
		prevEl: '.collection .ctrl_wrap .btn_prev',
	},
	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.collection .ctrl_wrap .paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	},
});
/********* collection 연결 : 종료 *********/



}) //$(document).ready