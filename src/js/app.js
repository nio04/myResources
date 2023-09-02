'use strict';

import icons from 'url:../img/sprite.svg';

const mainHomeContainer = document.querySelector('.main-home__container');
const mainHomeSideNavContainer = document.querySelector('.side-nav__container');
const mainHomeSideNavBtn = document.querySelector('.sideNav__Btn svg');
const mainHomeMainSection = document.querySelector('.main-home-resource__container');
const overlays = document.querySelectorAll('.overlay');
const contentPageContainer = document.querySelector('.content-page__container');
const contentMainHeader = document.querySelector('.nav__container');
const contentPageIndexes = document.querySelectorAll('.indexes a');
const contentNavBtn = document.querySelector('.contentNav__btn svg');
const contentNav = document.querySelector('.sticky-nav__container');
const contentPostMenuBtn = document.querySelector('.post__navigation__container');
const contentStickyNavBtn = document.querySelector('.mode__changer_btn');
const contentMainSection = document.querySelector('main');
const contentFloatButtons = document.querySelectorAll('.float-btn__container');
const contentGoTop = document.querySelector('.to-top-btn');
const contentGoBottom = document.querySelector('.to-bottom-btn');
const contentFooter = document.querySelector('footer');

//////////////////
// OPERATION START
/////////////////

// general OVERLAY creater
// const overlayRender = (parent, overlayShow, handler = null, handlerVal = null) => {
// 	const overlayEl = document.createElement('div');
// 	overlayEl.classList.add('overlay');
// 	parent.append(overlayEl);

// 	const overlaySelector = document.querySelectorAll('.overlay');
// 	if (overlayShow === 'overlayShow') {
// 		overlaySelector.forEach((el) => {
// 			el.classList.add('util-display-y');

// 			if (handlerVal === 'open') {
// 				el.addEventListener('click', () => {
// 					handler('open');
// 				});
// 			} else {
// 				el.addEventListener('click', () => {
// 					handler('close');
// 				});
// 			}
// 		});
// 	} else {
// 		overlaySelector.forEach((el) => {
// 			el.classList.remove('util-display-y');
// 		});
// 	}
// };

////////////////////////
// MAIN HOME PAGE - NAVIGATION BUTTON
if (mainHomeContainer) {
	const sideNavCallback = ([entries]) => {
		const btnContainer = mainHomeSideNavBtn.closest('button');

		const showButtonManager = (input) => {
			if (input === 'show') {
				btnContainer.classList.add('util-sticky');
				btnContainer.classList.remove('util-display-n');
			} else {
				btnContainer.classList.remove('util-sticky');
				btnContainer.classList.add('util-display-n');
			}
		};

		if (entries.isIntersecting) {
			showButtonManager('show');
		}
		if (!entries.isIntersecting) {
			showButtonManager('hide');
		}
	};

	const mainHomeSideNavObserver = new IntersectionObserver(sideNavCallback, {
		root: null,
		threshold: 0,
	});
	mainHomeSideNavObserver.observe(mainHomeMainSection);

	// MAIN HOME PAGE -- SIDE-NAV-BAR MANAGER
	mainHomeSideNavBtn.addEventListener('click', () => {
		const showNavButton = (input) => {
			if (input === 'close') {
				mainHomeSideNavBtn.classList.remove('close');
				mainHomeSideNavBtn.classList.add('open');
				mainHomeSideNavBtn.innerHTML = `<use xlink:href="${icons}#navOpen"></use>`;
				mainHomeSideNavContainer.classList.remove('noTransform--js');

				// overlayRender(mainHomeContainer, 'overlayRemove');
				overlays.forEach((el) => {
					el.classList.remove('util-display-y');
				});
			} else {
				mainHomeSideNavBtn.classList.remove('open');
				mainHomeSideNavBtn.classList.add('close');
				mainHomeSideNavBtn.innerHTML = `<use xlink:href="${icons}#navClose"></use>`;
				mainHomeSideNavContainer.classList.add('noTransform--js');

				// overlayRender(mainHomeContainer, 'overlayShow', showNavButton, 'close');
				overlays.forEach((el) => {
					el.classList.add('util-display-y');
					el.addEventListener('click', () => {
						showNavButton('close');
					});
				});
			}
		};

		if (mainHomeSideNavBtn.classList.value === 'open') {
			showNavButton('open');

			document.addEventListener('keydown', (ev) => {
				if (ev.key === 'Escape') showNavButton('close');
			});
		} else {
			showNavButton('close');
		}
	});
}

/////////////////
// CONTENT PAGE --STICKY NAV IMPLEMENT
if (contentPageContainer) {
	const stickyNav = ([entries]) => {
		const contentNavParent = contentNavBtn.closest('.contentNav__btn');
		const navButtonMananger = (input) => {
			if (input === 'open') {
				contentNav.classList.add('stickyNav--js');
				contentNavParent.classList.add('util-opacity-1');
				contentNavParent.classList.remove('util-opacity-0');
			} else {
				contentNav.classList.remove('stickyNav--js');
				contentNavParent.classList.add('util-opacity-0');
				contentNavParent.classList.remove('util-opacity-1');
			}
		};

		if (!entries.isIntersecting) {
			navButtonMananger('open');

			const btnState = document.querySelector('.contentNav__btn svg');

			const navShowManager = (input) => {
				if (input === 'open') {
					contentNav.classList.remove('noTransform--js');
					btnState.classList.remove('close');
					btnState.classList.add('open');
					btnState.innerHTML = `<use xlink:href="${icons}#navOpen"></use>`;

					// overlayRender(contentPageContainer, 'overlayRemove');
					overlays.forEach((el) => {
						el.classList.remove('util-display-y');
					});

					contentFloatButtons.forEach((el) => {
						el.classList.remove('util-display-n');
					});
				} else {
					btnState.classList.remove('open');
					btnState.classList.add('close');
					btnState.innerHTML = `<use xlink:href="${icons}#navClose"></use>`;
					contentNav.classList.add('noTransform--js');

					// overlayRender(contentPageContainer, 'overlayShow', navShowManager, 'open');
					overlays.forEach((el) => {
						el.classList.add('util-display-y');
						el.addEventListener('click', () => {
							navShowManager('open');
						});
					});

					contentFloatButtons.forEach((el) => {
						el.classList.add('util-display-n');
					});
				}
			};

			contentNavParent.addEventListener('click', () => {
				if (btnState.classList.value === 'open') {
					navShowManager('close');

					document.addEventListener('keydown', (ev) => {
						if (ev.key === 'Escape') navShowManager('open');
					});
				} else {
					navShowManager('open');
				}
			});

			// overlayRender(contentPageContainer, 'overlayShow', 'navShowManager', 'open');
			overlays.forEach((el) => {
				el.addEventListener('click', () => {
					navShowManager('open');
				});
			});
		}
		if (entries.isIntersecting) {
			navButtonMananger('off');
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
		const button = document.querySelector('.dropdownMenu__btn svg');

		const showArrowButton = (input) => {
			const elWrap = document.querySelector('.nav__element-wrap');

			if (input === 'up') {
				button.innerHTML = `<use xlink:href="${icons}#arrowUp"></use>`;
				button.classList.remove('arrowDown');
				button.classList.add('arrowUp');
				elWrap.classList.add('noTransform--js');
			} else {
				button.innerHTML = `<use xlink:href="${icons}#arrowDown"></use>`;
				button.classList.remove('arrowUp');
				button.classList.add('arrowDown');
				elWrap.classList.remove('noTransform--js');
			}
		};
		// CHANGE BUTTON + CLASS NAME
		if (button.classList.contains('arrowDown')) {
			showArrowButton('up');
		} else {
			showArrowButton('down');
		}
	});
}
/////////////
// CONTENT PAGE -- STICKY NAV - DAY/NIGHT MODE CHANGER
if (contentPageContainer) {
	const modeChanger = () => {
		const modeState = document.querySelector(`.mode__changer_btn svg`);
		const bodyEl = document.querySelector('body');

		const modeChangerManager = (input) => {
			if (input === 'day') {
				modeState.classList.remove('night');
				modeState.classList.add('day');
				modeState.innerHTML = `<use xlink:href="${icons}#nightMode"></use>`;
				bodyEl.classList.remove('nightTheme');
			} else {
				modeState.classList.remove('day');
				modeState.classList.add('night');
				modeState.innerHTML = `<use xlink:href="${icons}#dayMode"></use>`;
				bodyEl.classList.add('nightTheme');
			}
		};

		if (modeState.classList.contains('day')) {
			modeChangerManager('night');
		} else {
			modeChangerManager('day');
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

///////////////////
// CONTENT PAGE -- RE-FINE POST INDEXES BORDER
if (contentPageContainer) {
	// IF OUR INDEX IS ODD
	const beforeLast = contentPageIndexes[contentPageIndexes.length - 2];
	if (contentPageIndexes.length % 2 !== 0) {
		beforeLast.style.borderBottom = '1px solid var(--color-black-replace)';
	} else {
		beforeLast.style.borderBottom = 'none';
	}
}

////////////////
// CONTENT PAGE --HIDE NAV BUTTON [GO TOP, GO BOTTOM] FROM <HEADER>
if (contentPageContainer) {
	const contentNavigatorCallback = ([entries]) => {
		const showButtonManager = (input) => {
			if (input === 'show') {
				contentFloatButtons.forEach((el) => {
					el.classList.add('noTransform--js');
				});
			} else {
				contentFloatButtons.forEach((el) => {
					el.classList.remove('noTransform--js');
				});
			}
		};
		if (entries.isIntersecting) {
			showButtonManager('show');
		}
		if (!entries.isIntersecting) {
			showButtonManager('hide');
		}
	};
	const contentNavigatorButton = new IntersectionObserver(contentNavigatorCallback, {
		root: null,
		threshold: 0,
	});

	contentNavigatorButton.observe(contentMainSection);
}
