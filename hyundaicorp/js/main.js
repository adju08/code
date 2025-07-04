$(document).ready(function(){

    AOS.init({
        offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });

    
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

        navigation: true, /* 오른쪽에 각 페이지의 paging */
        navigationPosition: 'left', /* 위치 */
        navigationTooltips: ['Main', 'Lineup', 'Global Net', 'Media', 'footer'], /* 툴팁 */
        showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
        
        lockAnchors: true, //true -> 새로고침하면 main 페이지로 이동
        //false -> 새로고침했을 때 보던 페이지로 자동 이동
        anchors: ['Main', 'Lineup', 'Global', 'Media', 'footer'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

        autoScrolling:true, /* 한페이지씩 스크롤 */
        scrollHorizontally: true,

        verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
        
        scrollOverflow: false, /* 컨텐츠가 넘치면 스크롤 함 */

        afterLoad: function(origin, destination, direction, trigger){
            if(destination.index == 0){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
                //console.log('1번째 슬라이드가 로딩 되었을때');
                $('body').removeClass('bg_w')

            }else if(destination.index == 1){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
                //console.log('2번째 슬라이드가 로딩 되었을때');
                $('body').addClass('bg_w')
                /************ tree 숫자가 넘어가는 애니메이션 ************/
                $('.counter').counterUp(); /* 숫자 요소의 클래스명을 써준다. */

            }else if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
                //console.log('3번째 슬라이드가 로딩 되었을때');
                $('body').removeClass('bg_w')

            }else if(destination.index == 3){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
                //console.log('4번째 슬라이드가 로딩 되었을때');
                $('body').addClass('bg_w')
            }
        },

        responsiveWidth: 1025 /* fullpage를 적용시키지 않을 모바일 사이즈 (768부터 모바일) */
        //responsiveHeight: 700 /* 브라우저 높이가 700이하로 줄면 fullpage 안함 */
    }); //fullpage





    /********************* visual swiper 추가 ********************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            //clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderFraction: function (currentClass, totalClass) {
            //     return '<span class="' + currentClass + '"></span><span class="' + totalClass + '"></span>';
            // }, //숫자들 사이 "/" 제거
        },

        navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.btn_next',  /* 다음 버튼의 클래스명 */
		prevEl: '.btn_prev',
	    },
        
    });
    //visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    //visual_swiper.autoplay.start();  /* 재생 기능 */

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






    /********************* lineup swiper 추가 ********************/
    const lineup_swiper = new Swiper('.lineup .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            
            769: {    /* 1281~768 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        //loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });






     /******************************* media 탭 기능 : 시작 ******************************/
    /* 
        1. 클릭한 li에서 data-content값을 가져와서
            ==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
        2. 클릭한 li에만 active 클래스 줌
        3. 클릭한 li 안에 있는 span에 선택됨이라고 글자 써줌(다른 li에 있는 건 삭제)
        4. 클릭한 li 속성 aria-selected값을 true로 변경 (다른 li는 모두 false)
    */
        let media_content //클릭한 메뉴의 이름(id)
        $('.media .group .notice .list .tab_list ul li').on('click', function(){

            if($(this).hasClass('active') == false){
                //1.
                media_content = $(this).attr('data-content')
                //console.log(media_content)
                $('.media .group .notice .list .tab_content .tab_item').removeClass('active')
                $('.media .group .notice .list .tab_content').find('#'+media_content).addClass('active')
    
                //2.
                $('.media .group .notice .list .tab_list ul li').removeClass('active')
                $(this).addClass('active')
    
                //3.
                $('.media .group .notice .list .tab_list ul li button span').text('')
                $(this).find('span').text('선택됨')
    
                //4.
                $('.media .group .notice .list .tab_list ul li').attr('aria-selected', 'false')
                $(this).attr('aria-selected', 'true')
            }
        })
    /******************************* media 탭 기능 : 끝 ******************************/


    

    
    /******************************* global 아이콘 애니메이션 ******************************/
    const items = document.querySelectorAll('.global .map .list ul li');
        let current = 0;

        function animateItem(index) {
            const item = items[index];
            item.classList.add('animate');

            item.addEventListener('animationend', () => {
            item.classList.remove('animate'); // 다음 실행을 위해 초기화
            const next = (index + 1) % items.length;
            animateItem(next);
            }, { once: true });
    }

  // 첫 시작
  animateItem(0);

})//$(document).ready