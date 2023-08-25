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
const contentNavBtn = document.querySelector('.contentNav__btn');
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

	// BOTH NAVIGATION BUTTON [navOpen, navClose] --> mainHomePage
	mainHomeSideNavButton.forEach((svg) => {
		svg.addEventListener('click', (ev) => {
			const svgContainer = ev.target;
			const ul = document.querySelector('.side-nav__container ul');

			if (ev.target.classList.value === 'open') {
				svgContainer.classList.remove('open');
				svgContainer.classList.add('close');
				ul.classList.add('util-display-y');
				svgContainer.innerHTML = `<use xlink:href="${icons}#navClose"></use>`;
			} else {
				svgContainer.classList.add('open');
				svgContainer.classList.remove('close');
				svgContainer.innerHTML = `<use xlink:href="${icons}#navOpen"></use>`;
				ul.classList.remove('util-display-y');
			}

			// TOGGLE NAVIGATION LISTS [show-hide]
			ul.classList.toggle('util-show-element-transform');
		});
	});
}

/////////////////
// CONTENT PAGE --STICKY NAV IMPLEMENT
if (contentPageContainer) {
	const stickyNav = ([entries]) => {
		if (!entries.isIntersecting) {
			// contentNav.classList.remove('util-opacity-0');
			contentNav.classList.add('contentPage-stickyNav__js');
			contentNavBtn.classList.add('util-opacity-1');
			contentNavBtn.classList.remove('util-opacity-0');

			const btnState = document.querySelector('.contentNav__btn svg');
			contentNavBtn.addEventListener('click', () => {
				if (btnState.classList.value === 'open') {
					btnState.classList.remove('open');
					btnState.classList.add('close');
					btnState.innerHTML = `<use xlink:href="${icons}#navClose"></use>`;
					contentNav.classList.add('contentPage-noTransform--js');
				} else {
					btnState.classList.remove('close');
					btnState.classList.add('open');
					btnState.innerHTML = `<use xlink:href="${icons}#navOpen"></use>`;
					contentNav.classList.remove('contentPage-noTransform--js');
				}
			});
		}
		if (entries.isIntersecting) {
			contentNav.classList.remove('contentPage-stickyNav__js');
			contentNavBtn.classList.add('util-opacity-0');
			contentNavBtn.classList.remove('util-opacity-1');
		}
	};
	const contentStickyNavObs = new IntersectionObserver(stickyNav, {
		root: null,
		threshold: 0,
		rootMargin: '100px',
	});
	contentStickyNavObs.observe(contentMainHeader);
}

// CONTENT PAGE - STICKY NAV - POST DROP DOWN MENU
if (contentPageContainer) {
	contentPostMenuBtn.addEventListener('click', () => {
		const button = document.querySelector('.dropdownMenu svg');

		// CHANGE BUTTON + CLASS NAME
		if (button.classList.contains('arrowDown')) {
			button.innerHTML = `<use xlink:href="${icons}#arrowUp"></use>`;
			button.classList.remove('arrowDown');
			button.classList.add('arrowUp');
		} else {
			button.innerHTML = `<use xlink:href="${icons}#arrowDown"></use>`;
			button.classList.remove('arrowUp');
			button.classList.add('arrowDown');
		}

		// FOR NAV ELEMENET SMOOTH TRANSITION
		const navElements = document.querySelector('.nav__element-wrap');
		if (button.classList.contains('arrowUp')) {
			navElements.classList.add('contentPage-noTransform--js');
		} else {
			navElements.classList.remove('contentPage-noTransform--js');
		}
	});
}
/////////////
// CONTENT PAGE -- STICKY NAV - DAY/NIGHT MODE CHANGER
if (contentPageContainer) {
	const modeChanger = () => {
		const svgMode = document.querySelector(`.mode__changer_btn svg`);
		const bodyEl = document.querySelector('body');
		if (svgMode.classList.contains('day')) {
			svgMode.classList.remove('day');
			svgMode.classList.add('night');
			svgMode.innerHTML = `<use xlink:href="${icons}#dayMode"></use>`;
			bodyEl.classList.add('nightTheme');
		} else {
			svgMode.classList.remove('night');
			svgMode.classList.add('day');
			svgMode.innerHTML = `<use xlink:href="${icons}#nightMode"></use>`;
			bodyEl.classList.remove('nightTheme');
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
	const contentNavigatorCallback = ([entries]) => {
		if (entries.isIntersecting) {
			contentFloatButtons.forEach((el) => {
				el.classList.add('contentPage-noTransform--js');
			});
		}
		if (!entries.isIntersecting) {
			contentFloatButtons.forEach((el) => {
				el.classList.remove('contentPage-noTransform--js');
			});
		}
	};
	const contentNavigatorButton = new IntersectionObserver(contentNavigatorCallback, {
		root: null,
		threshold: 0,
	});

	contentNavigatorButton.observe(contentMainSection);
}
