const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	breakpoints: {
		0: {
			slidesPerView: 1.5,
			spaceBetween: -10
		},
		680: {
			slidesPerView: 4.5,
			spaceBetween: 10
		}
	}
})