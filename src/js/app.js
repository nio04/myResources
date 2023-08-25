'use strict';

import icons from 'url:../img/sprite.svg';

const mainHomeContainer = document.querySelector('.main-home__container');
const mainHomeSideNavContainer = document.querySelector('.side-nav__container');
const mainHomeSideNavBtn = document.querySelector('.sideNav__Btn svg');
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
		const btnContainer = mainHomeSideNavBtn.closest('button');
		if (entries.isIntersecting) {
			btnContainer.classList.add('util-sticky');
			btnContainer.classList.remove('util-display-n');
		}
		if (!entries.isIntersecting) {
			btnContainer.classList.remove('util-sticky');
			btnContainer.classList.add('util-display-n');
		}
	};

	const mainHomeSideNavObserver = new IntersectionObserver(sideNavCallback, {
		root: null,
		threshold: 0.1,
	});
	mainHomeSideNavObserver.observe(mainHomeAllListContainer);

	// MAIN HOME PAGE -- SIDE-NAV-BAR MANAGER
	mainHomeSideNavBtn.addEventListener('click', () => {
		const svgBtnOpen = () => {
			mainHomeSideNavBtn.classList.remove('close');
			mainHomeSideNavBtn.classList.add('open');
			mainHomeSideNavBtn.innerHTML = `<use xlink:href="${icons}#navOpen"></use>`;
			mainHomeSideNavContainer.classList.remove('contentPage-noTransform--js');
		};

		const svgBtnClose = () => {
			mainHomeSideNavBtn.classList.remove('open');
			mainHomeSideNavBtn.classList.add('close');
			mainHomeSideNavBtn.innerHTML = `<use xlink:href="${icons}#navClose"></use>`;
			mainHomeSideNavContainer.classList.add('contentPage-noTransform--js');
		};

		if (mainHomeSideNavBtn.classList.value === 'open') {
			svgBtnClose();

			document.addEventListener('keydown', (ev) => {
				if (ev.key === 'Escape') svgBtnOpen();
			});
		} else {
			svgBtnOpen();
		}
	});
}

/////////////////
// CONTENT PAGE --STICKY NAV IMPLEMENT
if (contentPageContainer) {
	const stickyNav = ([entries]) => {
		const navStickOn = () => {
			contentNav.classList.add('contentPage-stickyNav__js');
			contentNavBtn.classList.add('util-opacity-1');
			contentNavBtn.classList.remove('util-opacity-0');
		};
		const navStickOff = () => {
			contentNav.classList.remove('contentPage-stickyNav__js');
			contentNavBtn.classList.add('util-opacity-0');
			contentNavBtn.classList.remove('util-opacity-1');
		};

		if (!entries.isIntersecting) {
			navStickOn();

			const btnState = document.querySelector('.contentNav__btn svg');
			const navOpen = () => {
				contentNav.classList.remove('contentPage-noTransform--js');
				btnState.classList.remove('close');
				btnState.classList.add('open');
				btnState.innerHTML = `<use xlink:href="${icons}#navOpen"></use>`;
			};

			const navClose = () => {
				btnState.classList.remove('open');
				btnState.classList.add('close');
				btnState.innerHTML = `<use xlink:href="${icons}#navClose"></use>`;
				contentNav.classList.add('contentPage-noTransform--js');
			};

			contentNavBtn.addEventListener('click', () => {
				if (btnState.classList.value === 'open') {
					navClose();

					document.addEventListener('keydown', (ev) => {
						if (ev.key === 'Escape') navOpen();
					});
				} else {
					navOpen();
				}
			});
		}
		if (entries.isIntersecting) {
			navStickOff();
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
		const arrUp = () => {
			button.innerHTML = `<use xlink:href="${icons}#arrowUp"></use>`;
			button.classList.remove('arrowDown');
			button.classList.add('arrowUp');
		};
		const arrDown = () => {
			button.innerHTML = `<use xlink:href="${icons}#arrowDown"></use>`;
			button.classList.remove('arrowUp');
			button.classList.add('arrowDown');
		};
		// CHANGE BUTTON + CLASS NAME
		if (button.classList.contains('arrowDown')) {
			arrUp();
		} else {
			arrDown();
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
		const dayMode = () => {
			svgMode.classList.remove('night');
			svgMode.classList.add('day');
			svgMode.innerHTML = `<use xlink:href="${icons}#nightMode"></use>`;
			bodyEl.classList.remove('nightTheme');
		};

		const nightMode = () => {
			svgMode.classList.remove('day');
			svgMode.classList.add('night');
			svgMode.innerHTML = `<use xlink:href="${icons}#dayMode"></use>`;
			bodyEl.classList.add('nightTheme');
		};
		if (svgMode.classList.contains('day')) {
			nightMode();
		} else {
			dayMode();
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
