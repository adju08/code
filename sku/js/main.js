
$(document).ready(function(){
    //console.log('들어가니')

    AOS.init({
        offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });



    /******************************************************
     * aside quick 열고 닫기
     * 닫혀있을 때 (open 클래스가 있을 때) - close 클래스로 교체, detail 보임
     * 열려있을 때 (open 클래스가 없을 때) - open 클래스로 교체, detail 숨김
     */

    $('.quick .btn').on('click', function(){
        if($(this).hasClass('open') == true){
            $(this).removeClass('open')
            $(this).addClass('close')
            $(this).find('span').text('닫기')
            // $(this).attr('title', '열기/닫기') //html에 title을 사용했다면.
            $('.quick .detail').slideDown(300) //나타남
        }else{
            $(this).removeClass('close')
            $(this).addClass('open')
            $(this).find('span').text('열기')
            $('.quick .detail').slideUp(200) //사라짐
        }
    })


/*************************** visual swiper 연결 : 시작 ***************************/
    let visual_name = ['Seokyeong Univ', 'Ideas, together', '2nd in jobs, career aid']
    //console.log(visual_name[3]) 숫자가 0부터 시작
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

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




    /******************************* department list : 시작 ******************************/
    $('.department .list ul.depth1 > li').on('mouseenter', function(){
        $('.department .list ul.depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    



    /******************************* sns list : 시작 ******************************/
    const sns_swiper = new Swiper('.sns .list .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            500: {
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.btn_next',
            prevEl: '.btn_prev',
        },
    });
    //sns_swiper.autoplay.stop();  /* 일시정지 기능 */
    //sns_swiper.autoplay.start();  /* 재생 기능 */

    $('.sns .list .swiper .ctrl_wrap button.btn_stop').on('click', function(){
        //console.log('정지버튼 클릭')
        sns_swiper.autoplay.stop();
        $(this).hide() //나를 숨김
        $('.sns .list .swiper .ctrl_wrap button.btn_play').show() //play 버튼 나타남
    })
    $('.sns .list .swiper .ctrl_wrap button.btn_play').on('click', function(){
        //console.log('재생버튼 클릭')
        sns_swiper.autoplay.start()
        $(this).hide() //나를 숨김
        $('.sns .list .swiper .ctrl_wrap button.btn_stop').show() //stop 버튼 나타남
    })





}) //$(document).ready