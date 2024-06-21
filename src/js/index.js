
// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper__services', {
	// Optional parameters
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
			// shadow: true,
			translate: ["-100%", -115, 0],
		},
		next: {
			// shadow: true,
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
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination__services',
	  clickable: true,
	},
 
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

 });