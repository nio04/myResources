'use strict';
const contentMainHeader = document.querySelector('.nav__container');
const contentNav = document.querySelector('.sticky-nav__container');
const contentMainSection = document.querySelector('main');
const contentFloatButton = document.querySelectorAll('.float-btn__container');
const contentGoTop = document.querySelector('.to-top-btn');
const contentGoBottom = document.querySelector('.to-bottom-btn');
const contentFooter = document.querySelector('footer');

/////////////////
// STICKY NAV IMPLEMENT --FOR <MAIN> TAG ONLY
const stickyNav = ([entries]) => {
	if (!entries.isIntersecting) {
		contentNav.classList.remove('util-opacity-0');
		contentNav.classList.add('util-opacity-1');
		contentNav.style.height = '9.8rem';
		contentNav.classList.add('util-sticky');
	}
	if (entries.isIntersecting) {
		contentNav.classList.add('util-opacity-0');
		contentNav.style.height = 0;
		contentNav.classList.remove('util-opacity-1');
	}
};
const contentStickyNavObs = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: '200px',
});
contentStickyNavObs.observe(contentMainHeader);

/////////////
// SMOOTH SCROLL [TOP, BOTTOM] BUTTON
contentGoTop.addEventListener('click', (ev) => {
	ev.preventDefault();
	contentMainHeader.scrollIntoView({ behavior: 'smooth' });
});
contentGoBottom.addEventListener('click', (ev) => {
	ev.preventDefault();
	contentFooter.scrollIntoView({ behavior: 'smooth' });
});

////////////////
// HIDE NAV [GO TOP, GO BOTTOM] BUTTON FROM <HEADER>
const contentNavigatorCallback = ([entries]) => {
	if (!entries.isIntersecting) {
		contentFloatButton.forEach((button) => {
			button.classList.add('util-opacity-0');
			button.classList.remove('util-opacity-1');
		});
		console.log('no intersect');
		console.log(entries);
	}
	if (entries.isIntersecting) {
		contentFloatButton.forEach((button) => {
			button.classList.add('util-opacity-1');
			button.classList.remove('util-opacity-0');
		});
		console.log('intersect');
		console.log(entries);
	}
};
const contentNavigatorButton = new IntersectionObserver(contentNavigatorCallback, {
	root: null,
	threshold: 0,
});
contentNavigatorButton.observe(contentMainSection);
