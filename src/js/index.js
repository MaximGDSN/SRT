
// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

import openModal from './modules/open-modal.js';
openModal();

import validateForm from './modules/validate-form.js';
validateForm();

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiperServices = new Swiper('.swiper__services', {
	direction: 'horizontal',
	loop: true,
	looperSlides: 3,
	slidesPerView: 3,
	centeredSlides:true,
	speed:1000,
	effect: 'creative',
	creativeEffect: {
		limitProgress: 3,
		prev: {
			translate: ["-100%", -115, 0],
		},
		next: {
			translate: ["100%", -115, 0],
		},
	},
	breakpoints: {
		100: {
			slidesPerView:1,
			creativeEffect: {
				prev:{
					translate: ["-100%", -24, 0],
				},
				next: {
					translate: ["100%", -24, 0],
				},
			},
		},
		500: {
			slidesPerView:2,
			centeredSlides:false,
			creativeEffect: {
				prev:{
						translate: ["-100%", 0, 0],
				},
				next: {
					translate: ["100%", 0, 0],
				},
			},
		},
		768: {
			slidesPerView:3,
			centeredSlides: true,
			creativeEffect: {
				prev:{
					translate: ["-100%", -60, 0],
				},
				next: {
					translate: ["100%", -60, 0],
				},
			},
		},
		1200: {
			creativeEffect: {
				prev:{
					translate: ["-100%", -60, 0],
				},
				next: {
					translate: ["100%", -60, 0],
				},
			},
		},
		1440: {
			creativeEffect: {
				prev:{
					translate: ["-100%", -115, 0],
				},
				next: {
					translate: ["100%", -115, 0],
				},
			},
		}
},
	pagination: {
	  el: '.swiper-pagination__services',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 });


 const swiperExamplesBefore = new Swiper ('.examples__before', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	speed:600,
	allowTouchMove: false,
	effect: "creative",
	creativeEffect: {
	  prev: {
		 shadow: true,
		 translate: [0, 0, -400],
	  },
	  next: {
		 translate: ["100%", 0, 0],
	  },
	},
	pagination: {
		el: '.examples__pagination',
		clickable: true,
	 },
	 navigation: {
		nextEl: '.examples__btn-next',
		prevEl: '.examples__btn-prev',
	 },
 });

 const swiperExamplesAfter = new Swiper ('.examples__after', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	speed:600,
	allowTouchMove: false,
	effect: "creative",
	creativeEffect: {
	  prev: {
		 shadow: true,
		 translate: [0, 0, -400],
	  },
	  next: {
		 translate: ["100%", 0, 0],
	  },
	},
	pagination: {
		el: '.examples__pagination',
		clickable: true,
	 },
	 navigation: {
		nextEl: '.examples__btn-next',
		prevEl: '.examples__btn-prev',
	 },
 });

 const swiperExamplesDesc = new Swiper ('.examples__desc', {

	direction: 'horizontal',
	slidesPerView: 1,
	speed:600,
	allowTouchMove: false,
	loop:true,
	effect: "flip",

	pagination: {
		el: '.examples__pagination',
		clickable: true,
	 },
	 navigation: {
		nextEl: '.examples__btn-next',
		prevEl: '.examples__btn-prev',
	 },
 });

 import examplesOpenDesc from './modules/mobile-examples.js';
 examplesOpenDesc();

  const swiperReviews = new Swiper ('.swiper__reviews', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	spaceBetween: 15,
	speed:600,
	breakpoints: {
		441: {
			slidesPerView:2,
		},
		700: {
			spaceBetween: 15,
			slidesPerView:3,
		},
		1200: {
			spaceBetween: 25,
			slidesPerView:3,
		},
		1440: {
			spaceBetween:41,
			slidesPerView:3,
		},
	},
	pagination: {
		el: '.reviews__pagination',
		clickable: true,
	 },
	 navigation: {
		nextEl: '.reviews__btn-next',
		prevEl: '.reviews__btn-prev',
	 },
 });

 import footerMap from './modules/footer-map.js';
 footerMap();
