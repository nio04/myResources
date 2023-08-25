'use strict';

import icons from 'url:../img/sprite.svg';

const mainHomeContainer = document.querySelector('.main-home__container');
const mainHomeSideNavContainer = document.querySelector('.side-nav__container');
const mainHomeSideNavButton = document.querySelectorAll('.side-nav__container svg');
const mainHomeAllListContainer = document.querySelector(
	'.main-home-resource__container'
);
const contentPageContainer = document.querySelector('.content-page__container');
const contentMainHeader = document.querySelector('.nav__container');
const contentNav = document.querySelector('.sticky-nav__container');
const contentPostMenuBtn = document.querySelector('.post__navigation__container');
const contentStickyNavBtn = document.querySelector('.mode__changer_btn');
const contentMainSection = document.querySelector('main');
const contentFloatButtons = document.querySelectorAll('.float-btn__container');
const contentGoTop = document.querySelector('.to-top-btn');
const contentGoBottom = document.querySelector('.to-bottom-btn');
const contentFooter = document.querySelector('footer');

///////////////////
////// OPERATON STARTS /////
////////////////////

////////////////////////
// MAIN HOME PAGE - NAVIGATION BUTTON
if (mainHomeContainer) {
	const sideNavCallback = ([entries]) => {
		if (entries.isIntersecting) {
			mainHomeSideNavContainer.classList.add('util-opacity-1', 'util-sticky');
		}
		if (!entries.isIntersecting) {
			mainHomeSideNavContainer.classList.remove('util-opacity-1', 'util-sticky');
		}
	};

	const mainHomeSideNavObserver = new IntersectionObserver(sideNavCallback, {
		root: null,
		threshold: 0.1,
	});
	mainHomeSideNavObserver.observe(mainHomeAllListContainer);

	// BOTH NAVIGATION BUTTON [navOpen, navClose]
	mainHomeSideNavButton.forEach((svg) => {
		svg.addEventListener('click', (ev) => {
			const ul = document.querySelector('.side-nav__container ul');
			if (ev.target.classList.value === 'open') {
				// ADD CLASS IF [navOpen] BUTTON IS OPEN
				ul.classList.add('util-display-y');
				document
					.querySelector('.side-nav__container .open')
					.classList.add('util-hide-element-transform');
				document
					.querySelector('.side-nav__container .close')
					.classList.add('util-show-element-transform');
			} else {
				// REMOVE CLASS IF [navOpen] BUTTON IS NOT OPEN
				ul.classList.remove('util-display-y');
				document
					.querySelector('.side-nav__container .open')
					.classList.remove('util-hide-element-transform');

				document
					.querySelector('.side-nav__container .close')
					.classList.remove('util-show-element-transform');
			}

			// TOGGLE NAVIGATION LISTS
			document
				.querySelector('.side-nav__container ul')
				.classList.toggle('util-show-element-transform');
		});
	});
}

/////////////////
// CONTENT PAGE --STICKY NAV IMPLEMENT
if (contentPageContainer) {
	const stickyNav = ([entries]) => {
		if (!entries.isIntersecting) {
			contentNav.classList.remove('util-opacity-0');
			contentNav.classList.add('util-opacity-1');
			contentNav.style.height = '5.8rem';
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
}

// CONTENT PAGE - STICKY NAV - POST DROP DOWN MENU
if (contentPageContainer) {
	contentPostMenuBtn.addEventListener('click', () => {
		const button = document.querySelector('.dropdownMenu svg');

		if (button.classList.contains('arrowDown')) {
			button.innerHTML = `<use xlink:href="${icons}#arrowUp"></use>`;
			button.classList.remove('arrowDown');
			button.classList.add('arrowUp');
			document
				.querySelector('.nav__element-wrap')
				.classList.toggle('util-display-y');
		} else {
			button.innerHTML = `<use xlink:href="${icons}#arrowDown"></use>`;
			button.classList.remove('arrowUp');
			button.classList.add('arrowDown');
			document
				.querySelector('.nav__element-wrap')
				.classList.toggle('util-display-y');
		}
	});
}
/////////////
// CONTENT PAGE -- STICKY NAV - DAY/NIGHT MODE CHANGER
if (contentPageContainer) {
	const modeChanger = () => {
		const svgMode = document.querySelector(`.mode__changer_btn svg`);

		if (svgMode.classList.contains('day')) {
			svgMode.classList.remove('day');
			svgMode.classList.add('night');
			svgMode.innerHTML = `<use xlink:href="${icons}#dayMode"></use>`;
			document.querySelector('body').classList.add('nightTheme');
		} else {
			svgMode.classList.remove('night');
			svgMode.classList.add('day');
			svgMode.innerHTML = `<use xlink:href="${icons}#nightMode"></use>`;
			document.querySelector('body').classList.remove('nightTheme');
		}
	};
	contentStickyNavBtn.addEventListener('click', (ev) => {
		ev.preventDefault();
		modeChanger();
	});
}

/////////////
//CONTENT PAGE --SMOOTH SCROLL [TOP, BOTTOM] BUTTON
if (contentPageContainer) {
	// TOP BUTTON
	contentGoTop.addEventListener('click', (ev) => {
		ev.preventDefault();
		contentMainHeader.scrollIntoView({ behavior: 'smooth' });
	});

	// BOTTOM BUTTON
	contentGoBottom.addEventListener('click', (ev) => {
		ev.preventDefault();
		contentFooter.scrollIntoView({ behavior: 'smooth' });
	});
}

////////////////
// CONTENT PAGE --HIDE NAV BUTTON [GO TOP, GO BOTTOM] FROM <HEADER>
if (contentPageContainer) {
	// HIDE FLOAT BUTTON CONTAINER
	contentFloatButtons.forEach((el) => {
		el.classList.add('util-opacity-0');
	});

	const contentNavigatorCallback = ([entries]) => {
		if (entries.isIntersecting) {
			contentFloatButtons.forEach((el) => {
				el.classList.remove('util-opacity-0');
			});
		}
		if (!entries.isIntersecting) {
			contentFloatButtons.forEach((el) => {
				el.classList.add('util-opacity-0');
			});
		}
	};
	const contentNavigatorButton = new IntersectionObserver(contentNavigatorCallback, {
		root: null,
		threshold: 0,
	});

	contentNavigatorButton.observe(contentMainSection);
}
