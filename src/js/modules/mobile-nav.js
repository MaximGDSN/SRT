function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const closeMenu = document.querySelector('.mobile-nav__list')

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
	closeMenu.onclick = function () {
		nav.classList.remove('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
		menuIcon.classList.toggle('nav-icon--active');
	};
}

export default mobileNav;