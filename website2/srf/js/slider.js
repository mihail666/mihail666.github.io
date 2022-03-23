const showSlider = new Swiper('.showcase-carusel', {
	loop: true,
	speed: 1800,
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 0.5,
		},
		400: {
			slidesPerView: 1.5,
		},
		700: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 2,
		},
		1800: {
			slidesPerView: 2.5,
		}
	},
	navigation: {
		nextEl: '.showcase-navigation__next',
		prevEl: '.showcase-navigation__prev'
	}
})