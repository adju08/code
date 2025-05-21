$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */
    //const(변수임/let으로 바꿔도 상관없음) 상수 -> 값이 한번 들어가면 못바꿈

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000, //##5초 / 1000 = 1초
            disableOnInteraction: true, //##사용자가 상호작용하면 자동 기능 중단 -> false는 계속 동작함
        }, //##딜레이 안할거면 싹 다 지우거나 주석처리 하면 됨

        //effect: "fade", /* fade 효과(##부드럽게 넘어감) */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        //loop: false /* ##마지막 팝업이면 다음으로 안넘어감 */


        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 / ##동그라미 할거면 주석처리 */
            
            //renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 / ##동그라미 할거면 주석처리 */
            //    return '<span class="' + className + '">' + (index + 1) + "</span>"; // ##동그라미 할거면 주석처리
            //}, // ##동그라미 할거면 주석처리
        },
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    });


    
    /* 영역 밖으로 콘텐츠 안나감/ 사이즈 변동됨 */
    const biz_swiper = new Swiper('.biz .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            467: {    /* 467~767px 사이 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            768: {    /* 768~1023px 사이 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
            1024: {    /* 1024px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        }
    });



    /* 영역 밖으로 콘텐츠 나감/ 사이즈 변동 안됨 */
    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* auto -> css에서 준대로 들어감 ... li 갯수로 적으면 자기가 계산한 값으로 들어감 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        //loop: true /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });


})//$(document).ready