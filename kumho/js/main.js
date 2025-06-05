
$(document).ready(function(){
    //console.log('들어가니')



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
    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .ctrl_wrap button.btn_stop').on('click', function(){
        //console.log('정지버튼 클릭')
        visual_swiper.autoplay.stop();
        $(this).hide() //나를 숨김
        $('.visual .ctrl_wrap button.btn_play').show() //play 버튼 나타남
    })
    $('.visual .ctrl_wrap button.btn_play').on('click', function(){
        //console.log('재생버튼 클릭')
        visual_swiper.autoplay.start()
        $(this).hide() //나를 숨김
        $('.visual .ctrl_wrap button.btn_stop').show() //stop 버튼 나타남
    })

/*************************** visual swiper 연결 : 종료 ***************************/





/*************************** biz의 list에 마우스 오버 이벤트 : 시작 ***************************/
    // $('.biz .list ul li').on('mouseenter', function(){
    //     $('.biz .list ul li').removeClass('on')
    //     $(this).addClass('on')
    // })
/*************************** biz의 list에 마우스 오버 이벤트 : 종료 ***************************/






/*************************** news swiper 연결 : 시작 ***************************/
const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		768: {    /* 768px 이상일때 적용 */
			spaceBetween: 24,
		},
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	// loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	// autoplay: {  /* 팝업 자동 실행 */
	// 	delay: 2500,
	// 	disableOnInteraction: true,
	// },
	navigation: {
		nextEl: '.news .ctrl_wrap .btn_next',
		prevEl: '.news .ctrl_wrap .btn_prev',
	},
	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.news .ctrl_wrap .count', /* 해당 요소의 class명 */
		// clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값(동그라미) */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	},
    scrollbar: {
        el: ".news .ctrl_wrap .swiper-scrollbar",
        hide: false,
        draggable: true, /* 수동으로 드래그 가능 */
        dragSize: 200,
      },
});




/*************************** news swiper 연결 : 종료 ***************************/





/*************************** service 배경 변경 : 시작 **************************
 * .service .list ul li a에 마우스를 오버해서 a에 있는
 * date-name 값을 가져다가 list의 class명으로 줌
*/

    let service_name //가져온 data-name 값을 저장
    $('.service .list ul li a').on('mouseenter', function(){
        if($(window).width() > 1024){
            service_name = $(this).attr('data-name') //attr -> 속성값을 가져감
            console.log(service_name)
            $('.service .list').attr('data-bg', service_name) //-> 속성값 바꿔라!
        }
    })
    $('.service .list').on('mouseleave', function(){
        $('.service .list').attr('data-bg', '')
    })

/*************************** service 배경 변경 : 종료 ***************************/

}) //$(document).ready