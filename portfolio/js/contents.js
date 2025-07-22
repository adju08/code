$(document).ready(function(){


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




    //breadcrumb 메뉴
    $('.sub_menu .breadcrumb ol > li').on('click', function(){
        if($(this).hasClass('open') == true){
            //console.log('가지고 있음')
            $(this).removeClass('open')
        }else{
            //console.log('아니')
            $('.sub_menu .breadcrumb ol > li').removeClass('open')
            $(this).addClass('open')
        }
    })





    //his_tit 글자 색 차오름
    let scrolling;
    let win_h;
    let slogan = $('.ctn_history .his_tit');
    let slogan_obj = $('.ctn_history .his_tit h2 span');
    let slogan_leng = slogan_obj.length;
    let slogan_top, slogan_start, slogan_end, slogan_scroll;

    function slogan_ani() {
        slogan_top = slogan.offset().top;
        slogan_start = slogan_top - win_h + (win_h * 0.3);
        slogan_end = slogan_top + slogan.height() - win_h + (win_h * 0.5);

        slogan_scroll = (scrolling - slogan_start) / (slogan_end - slogan_start) * 100;

        // clamp(0, slogan_scroll, 100)
        if (scrolling < slogan_start) {
            slogan_obj.width(0);
        } else if (scrolling >= slogan_end) {
            slogan_obj.width('100%');
        } else {
            // 슬라이드 비율 계산 후 각 span에 적용
            for (let i = 0; i < slogan_leng; i++) {
                let part = (slogan_scroll - (100 / slogan_leng) * i) * slogan_leng;
                if (part < 0) part = 0;
                if (part > 100) part = 100;
                slogan_obj.eq(i).width(part + '%');
            }
        }
    }

    $(window).on('scroll resize', function () {
    scrolling = $(window).scrollTop();
    win_h = $(window).height();
    slogan_ani();
    });

    // 최초 실행
    $(function () {
        scrolling = $(window).scrollTop();
        win_h = $(window).height();
        slogan_ani();
    });







    // console.log($('.ctn_history').length)
    if($('.ctn_history').length > 0){
    
        let scrolling //브라우저가 스크롤 된 값
        let window_h //브라우저 높이
        let obj_name = $('.ctn_history .his_photo')
        let obj_photo
        let obj_photo_top
        let obj_photo_show //위로 얼마나 나타났는지 단차값
        let obj_nav = $('.ctn_history .his_nav')
        let obj_nav_area = $('.ctn_history')
        let obj_nav_start //보이기 시작하는 스크롤값
        let obj_nav_end //보이는 마지막 스크롤값
        let obj_nav_p = $('.sub_visual .depth1_name span')
        /*
        eq -> 몇번째
        offset -> 위치를 시작점으로 하는 위치값
        */
        

        
    

        function nav_show(){
            obj_nav_start = obj_nav_area.offset().top
            // obj_nav_end = obj_nav_start + obj_nav_area.height() - window_h //선생님이랑

            obj_nav_end = obj_nav_area.height() + obj_nav_p.offset().top
            // console.log('스크롤', scrolling, '종료', obj_nav_end)


            if((scrolling > obj_nav_start) && (scrolling < obj_nav_end)){ /* && = and */
                obj_nav.addClass('active')
            }else{
                obj_nav.removeClass('active')
            }
        }
        function scroll_chk(){
            scrolling = $(window).scrollTop()
            // console.log('스크롤', scrolling, 'photo', obj_photo_top, '브라우저', window_h)
        }
        function resize_chk(){
            window_h = $(window).height()
        }
        function photo_show(){
            // for -> 반복적인 동작을 수행하는 데 사용
            // length -> 몇개있나 물어봄
            for(i = 0; i < obj_name.length; i++){ //i++ -> 1씩 증가라는 뜻
                // console.log(i)
                obj_photo = obj_name.eq(i) //그래야 몇번째인지 선택해서 줄 수 있음
                obj_photo_top = obj_photo.offset().top
                obj_photo_show = (window_h + scrolling) - obj_photo_top - obj_photo.height()
                //console.log('스크롤', scrolling, 'photo', obj_photo_top, '브라우저', window_h)
                //console.log(obj_photo_show)
                if(obj_photo_show > 0){
                    obj_photo.addClass('active')
                }else{
                    obj_photo.removeClass('active')
                }
            }
        }
        

        $(window).scroll(function(){
            //스크롤 할 때 마다 한번씩 실행
            scroll_chk()
            photo_show()
            nav_show()
        })
        $(window).resize(function(){
            //브라우저가 리사이즈 될떄마다 한번씩 실행
            resize_chk()
            photo_show()
            nav_show()
        })
        

        scroll_chk() //문서가 로딩 되었을 때, 단 한번
        resize_chk()
        photo_show()
        nav_show()




        /************* nav 메뉴 선택 클릭 이동 *****************/
        let menuName = $('.ctn_history .his_nav')  // 상단에 고정할 메뉴 영역 선택자
        let menuItem = $('.ctn_history .his_nav ul li') // data-link 값을 준 클릭할 요소의 선택자
        let sectionName
        let moveTop
        let areaTop
        let areaH
        let areaName
        let scrollTop
        menuItem.on('click', function(){
            sectionName = $(this).attr('data-link');
            let target = $('*[data-menu="'+sectionName+'"]');
            let menuHeight = menuName.height();
            let targetTop = target.offset().top - menuHeight;

            // 현재 문서의 최대 스크롤 가능한 값 계산
            let documentHeight = $(document).height();
            let windowHeight = $(window).height();
            let maxScrollTop = documentHeight - windowHeight;

            // 이동할 위치가 maxScrollTop을 넘지 않도록 보정
            if (targetTop > maxScrollTop) {
                targetTop = maxScrollTop;
            }

            $('html, body').animate({
                scrollTop : targetTop
            }, 500);
        });
        menuChk()
        $(window).scroll(function(){
            menuChk()
        })
        function menuChk(){
            scrollTop = $(window).scrollTop();
            let winH = $(window).height();
            let triggerLine = scrollTop + winH / 2; // 뷰포트 중간을 기준으로 함

            menuItem.removeClass('active');

            $('*[data-menu]').each(function () {
                let $this = $(this);
                let thisTop = $this.offset().top;
                let thisBottom = thisTop + $this.outerHeight();
                let thisName = $this.attr('data-menu');

                if (triggerLine >= thisTop && triggerLine < thisBottom) {
                    menuItem.filter('[data-link="' + thisName + '"]').addClass('active');
                    return false; // 하나만 active 처리하고 루프 종료
                }
            });
        }
    } //if종료

})//$(document).ready