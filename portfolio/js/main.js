$(document).ready(function(){

	console.log('들어가니')
	gsap.registerPlugin(ScrollTrigger);
	const items = gsap.utils.toArray(".accordion");

	items.forEach((item, i) => {
		const content = item.querySelector(".accordion .conts");
		const header = item.querySelector(".accordion .tit");
		gsap.to(content, {
			height: 0,
			ease: "none",
			scrollTrigger: {
				trigger: item,
				start: "top " + header.clientHeight * i,
				endTrigger: ".final",  // 고정요소 하단에 종료를 뜻하는 class
				end: "top " + header.clientHeight * items.length,
				pin: true,
				pinSpacing: false,
				scrub: true,
				markers: false,
				id: i + 1
			}
		});
	});
})//$(document).ready
