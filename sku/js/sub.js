$(document).ready(function(){

    //his 콘텐츠 스크롤
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".his_year_group").forEach((section) => {
        const large = section.querySelector(".cont_wrap .year_cont");

        if (!large) return; // 요소가 없으면 무시

        gsap.to(large, {
            y: () => (window.innerHeight - large.clientHeight - 64),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                pin: true,
                start: "top 15%",
                end: () => "+=" + large.clientHeight,
                scrub: true,
                markers: false,
                invalidateOnRefresh: true,
            }
        });
    });
})//$(document).ready