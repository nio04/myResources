'use strict';
import * as model from './model';
import * as navView from './views/navView';
import * as modeView from './views/dayNightView';

import icons from 'url:../img/sprite.svg';

const mainHomeParent = document.querySelector('#main__home--container');
const contentPageParent = document.querySelector('.content__page--container');
const navBtnContainer = document.querySelector('#nav__btn--container');

// const mainHomeContainer = document.querySelector('.main-home__container');
const mainHomeSideNavContainer = document.querySelector('.side-nav__container');
const mainHomeSideNavBtn = document.querySelector('.sideNav__Btn');
const mainHomeMainSection = document.querySelector('.main-home-resource__container');
const overlay = document.querySelector('.overlay');
const contentMainHeader = document.querySelector('.nav--container');
const contentPageIndexes = document.querySelectorAll('.nav--indexes a');
const contentNavBtn = document.querySelector('.content__nav--btn svg');
const contentNav = document.querySelector('.sticky__nav--container');
const contentPostMenuBtn = document.querySelector('.post__navigation--container');
const contentStickyNavBtn = document.querySelector('#mode__changer--btn');
const contentMainSection = document.querySelector('main');
const contentFloatButtons = document.querySelectorAll('.float__btn--container');
const contentGoTop = document.querySelector('#nav__top--btn');
const contentGoBottom = document.querySelector('#nav__bottom--btn');
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

// new operation!!!!!!!!!!
if (mainHomeParent) {
	navView.initNavBtnManager();
}

if (contentPageParent) {
	navView.initNavBtnManager();
	modeView.viewChanger(model.getViewModeState());
}

////////////////////////
// MAIN HOME PAGE - NAVIGATION BUTTON
// if (mainHomeContainer) {
// 	const sideNavCallback = ([entries]) => {
// 		// const btnContainer = mainHomeSideNavBtn.closest('button');

// 		const showButtonManager = (input) => {
// 			if (input === 'show') {
// 				mainHomeSideNavBtn.classList.add('util-sticky');
// 				mainHomeSideNavBtn.classList.remove('util-display-n');
// 			} else {
// 				mainHomeSideNavBtn.classList.remove('util-sticky');
// 				mainHomeSideNavBtn.classList.add('util-display-n');
// 			}
// 		};

// 		if (entries.isIntersecting) {
// 			showButtonManager('show');
// 		}
// 		if (!entries.isIntersecting) {
// 			showButtonManager('hide');
// 		}
// 	};

// 	const mainHomeSideNavObserver = new IntersectionObserver(sideNavCallback, {
// 		root: null,
// 		threshold: 0,
// 	});
// 	mainHomeSideNavObserver.observe(mainHomeMainSection);

// 	// MAIN HOME PAGE -- SIDE-NAV-BAR MANAGER
// 	mainHomeSideNavBtn.addEventListener('click', (ev) => {
// 		let btn = document.querySelector('.sideNav__Btn svg');
// 		if (!(ev.target.nodeName === 'svg' || ev.target.nodeName === 'use')) return;
// 		else if (ev.target.nodeName === 'use') {
// 			btn = ev.target.closest('svg');
// 		}

// 		const openNav = (input) => {
// 			if (input === 'close') {
// 				btn.classList.remove('close');
// 				btn.classList.add('open');
// 				btn.innerHTML = `<use xlink:href="${icons}#navOpen"></use>`;
// 				mainHomeSideNavContainer.classList.remove('noTransform--js');

// 				overlay.classList.remove('util-display-y');
// 			} else {
// 				btn.classList.remove('open');
// 				btn.classList.add('close');
// 				btn.innerHTML = `<use xlink:href="${icons}#navClose"></use>`;
// 				mainHomeSideNavContainer.classList.add('noTransform--js');

// 				overlay.classList.add('util-display-y');
// 				overlay.addEventListener('click', () => {
// 					openNav('close');
// 				});
// 			}
// 		};

// 		if (btn.classList.value === 'open') {
// 			openNav('open');

// 			document.addEventListener('keydown', (ev) => {
// 				if (ev.key === 'Escape') openNav('close');
// 			});
// 		} else {
// 			openNav('close');
// 		}
// 	});
// }

/////////////////
// CONTENT PAGE --STICKY NAV IMPLEMENT
// if (contentPageContainer) {
// 	const stickyNav = ([entries]) => {
// 		const contentNavParent = contentNavBtn.closest('.content__nav--btn');
// 		const navButtonMananger = (input) => {
// 			if (input === 'open') {
// 				contentNav.classList.add('stickyNav--js');
// 				contentNavParent.classList.add('util-opacity-1');
// 				contentNavParent.classList.remove('util-opacity-0');
// 			} else {
// 				contentNav.classList.remove('stickyNav--js');
// 				contentNavParent.classList.add('util-opacity-0');
// 				contentNavParent.classList.remove('util-opacity-1');
// 			}
// 		};

// 		if (!entries.isIntersecting) {
// 			navButtonMananger('open');

// 			const btnState = document.querySelector('.content__nav--btn svg');

// 			const navShowManager = (input) => {
// 				if (input === 'open') {
// 					contentNav.classList.remove('noTransform--js');
// 					btnState.classList.remove('close');
// 					btnState.classList.add('open');
// 					btnState.innerHTML = `<use xlink:href="${icons}#navOpen"></use>`;

// 					// overlayRender(contentPageContainer, 'overlayRemove');
// 					// overlays.forEach((el) => {
// 					// 	el.classList.remove('util-display-y');
// 					// });
// 					overlay.classList.remove('util-display-y');

// 					contentFloatButtons.forEach((el) => {
// 						el.classList.remove('util-display-n');
// 					});
// 				} else {
// 					btnState.classList.remove('open');
// 					btnState.classList.add('close');
// 					btnState.innerHTML = `<use xlink:href="${icons}#navClose"></use>`;
// 					contentNav.classList.add('noTransform--js');

// 					// overlayRender(contentPageContainer, 'overlayShow', navShowManager, 'open');
// 					// overlays.forEach((el) => {
// 					// 	el.classList.add('util-display-y');
// 					// 	el.addEventListener('click', () => {
// 					// 		navShowManager('open');
// 					// 	});
// 					// });
// 					contentNavBtn.classList.add('util-display-y');
// 					overlay.addEventListener('click', () => {
// 						navShowManager('open');
// 					});

// 					contentFloatButtons.forEach((el) => {
// 						el.classList.add('util-display-n');
// 					});
// 				}
// 			};

// 			contentNavParent.addEventListener('click', () => {
// 				if (btnState.classList.value === 'open') {
// 					navShowManager('close');

// 					document.addEventListener('keydown', (ev) => {
// 						if (ev.key === 'Escape') navShowManager('open');
// 					});
// 				} else {
// 					navShowManager('open');
// 				}
// 			});

// 			// overlayRender(contentPageContainer, 'overlayShow', 'navShowManager', 'open');
// 			// overlays.forEach((el) => {
// 			// 	el.addEventListener('click', () => {
// 			// 		navShowManager('open');
// 			// 	});
// 			// });
// 			overlay.addEventListener('clck', () => {
// 				navShowManager('open');
// 			});
// 		}
// 		if (entries.isIntersecting) {
// 			navButtonMananger('off');
// 		}
// 	};
// 	const contentStickyNavObs = new IntersectionObserver(stickyNav, {
// 		root: null,
// 		threshold: 0,
// 		rootMargin: '100px',
// 	});
// 	contentStickyNavObs.observe(contentMainHeader);
// }

// CONTENT PAGE - STICKY NAV - POST DROP DOWN MENU
// if (contentPageContainer) {
// 	contentPostMenuBtn.addEventListener('click', () => {
// 		const button = document.querySelector('.dropdownMenu__btn svg');

// 		const showArrowButton = (input) => {
// 			const elWrap = document.querySelector('.nav__element-wrap');

// 			if (input === 'up') {
// 				button.innerHTML = `<use xlink:href="${icons}#arrowUp"></use>`;
// 				button.classList.remove('arrowDown');
// 				button.classList.add('arrowUp');
// 				elWrap.classList.add('noTransform--js');
// 			} else {
// 				button.innerHTML = `<use xlink:href="${icons}#arrowDown"></use>`;
// 				button.classList.remove('arrowUp');
// 				button.classList.add('arrowDown');
// 				elWrap.classList.remove('noTransform--js');
// 			}
// 		};
// 		// CHANGE BUTTON + CLASS NAME
// 		if (button.classList.contains('arrowDown')) {
// 			showArrowButton('up');
// 		} else {
// 			showArrowButton('down');
// 		}
// 	});
// }
/////////////
// CONTENT PAGE -- STICKY NAV - DAY/NIGHT MODE CHANGER
// if (contentPageContainer) {
// 	const modeChanger = () => {
// 		const modeState = document.querySelector(`.mode__changer_btn svg`);
// 		const bodyEl = document.querySelector('body');

// 		const modeChangerManager = (input) => {
// 			if (input === 'day') {
// 				modeState.classList.remove('night');
// 				modeState.classList.add('day');
// 				modeState.innerHTML = `<use xlink:href="${icons}#nightMode"></use>`;
// 				bodyEl.classList.remove('nightTheme');
// 			} else {
// 				modeState.classList.remove('day');
// 				modeState.classList.add('night');
// 				modeState.innerHTML = `<use xlink:href="${icons}#dayMode"></use>`;
// 				bodyEl.classList.add('nightTheme');
// 			}
// 		};

// 		if (modeState.classList.contains('day')) {
// 			modeChangerManager('night');
// 		} else {
// 			modeChangerManager('day');
// 		}
// 	};
// 	contentStickyNavBtn.addEventListener('click', (ev) => {
// 		ev.preventDefault();
// 		modeChanger();
// 	});
// }

/////////////
//CONTENT PAGE --SMOOTH SCROLL [TOP, BOTTOM] BUTTON
// if (contentPageContainer) {
// 	// TOP BUTTON
// 	contentGoTop.addEventListener('click', (ev) => {
// 		ev.preventDefault();
// 		contentMainHeader.scrollIntoView({ behavior: 'smooth' });
// 	});

// 	// BOTTOM BUTTON
// 	contentGoBottom.addEventListener('click', (ev) => {
// 		ev.preventDefault();
// 		contentFooter.scrollIntoView({ behavior: 'smooth' });
// 	});
// }

///////////////////
// CONTENT PAGE -- center last odd element
// if (contentPageContainer) {
// 	// IF OUR INDEX IS ODD
// 	const lastEl = contentPageIndexes[contentPageIndexes.length - 1];
// 	if (contentPageIndexes.length % 2 !== 0) {
// 		lastEl.classList.add('flexbox-grow');
// 	}
// }

////////////////
// CONTENT PAGE --HIDE NAV BUTTON [GO TOP, GO BOTTOM] FROM <HEADER>
// if (contentPageContainer) {
// 	const contentNavigatorCallback = ([entries]) => {
// 		const showButtonManager = (input) => {
// 			if (input === 'show') {
// 				contentFloatButtons.forEach((el) => {
// 					el.classList.add('noTransform--js');
// 					el.classList.remove('show__me--js');
// 				});
// 			} else {
// 				contentFloatButtons.forEach((el) => {
// 					el.classList.remove('noTransform--js');
// 					el.classList.add('show__me--js');
// 				});
// 			}
// 		};
// 		if (entries.isIntersecting) {
// 			showButtonManager('show');
// 		}
// 		if (!entries.isIntersecting) {
// 			showButtonManager('hide');
// 		}
// 	};
// 	const contentNavigatorButton = new IntersectionObserver(contentNavigatorCallback, {
// 		root: null,
// 		threshold: 0,
// 	});

// 	contentNavigatorButton.observe(contentMainSection);
// }
