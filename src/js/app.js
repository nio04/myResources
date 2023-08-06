'use strict';

const mainHomeContainer = document.querySelector('.main-home__container');
const mainHomeAllSection = document.querySelectorAll(
	'.main-home-resource__contents'
);

const contentPageContainer = document.querySelector('.content-page__container');
const contentMainHeader = document.querySelector('.nav__container');
const contentNav = document.querySelector('.sticky-nav__container');
const contentStickyNavBtn = document.querySelector('.mode__changer_btn');
const contentMainSection = document.querySelector('main');
const contentFloatButtons = document.querySelectorAll('.float-btn__container');
const contentGoTop = document.querySelector('.to-top-btn');
const contentGoBottom = document.querySelector('.to-bottom-btn');
const contentArticles = document.querySelectorAll('.content-area__container');
const postContainer = document.querySelectorAll('details');
const contentFooter = document.querySelector('footer');

///////////////////
////// OPERATON STARTS /////
////////////////////

/////////////////////
// MAIN HOME PAGE --NAV LIST SHOW ON 20% VIEW
const mainHomeObsChecker =
	contentPageContainer ??
	getComputedStyle(document.querySelector('.main-home__container')).width;
///////////////
if (mainHomeContainer && parseFloat(mainHomeObsChecker) <= 872) {
	mainHomeAllSection.forEach((el) => {
		el.classList.add('util-opacity-0');
	});

	const mainHomeSectionsCallback = ([entries]) => {
		if (entries.isIntersecting) {
			entries.target.classList.remove('util-opacity-0');
		}
		if (!entries.isIntersecting) {
			entries.target.classList.add('util-opacity-0');
		}
	};

	const mainHomeSectionsObs = new IntersectionObserver(mainHomeSectionsCallback, {
		root: null,
		threshold: 0.2,
	});

	if (parseFloat(mainHomeObsChecker) <= 872) {
		mainHomeAllSection.forEach((el) => {
			mainHomeSectionsObs.observe(el);
		});
	}
}

/////////////////
// CONTENT PAGE --STICKY NAV IMPLEMENT --FOR <MAIN> TAG ONLY
if (contentPageContainer) {
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
}

/////////////
// CONTENT PAGE -- STICKY NAV - DAY/NIGHT MODE CHANGER
if (contentPageContainer) {
	let savedModeState;
	const allSiblings = [];
	for (const child of contentStickyNavBtn.children) {
		allSiblings.push(child);
	}

	const modeChanger = () => {
		if (allSiblings[0].classList[0] === 'day') {
			document.querySelector('body').classList.add('nightTheme');
			allSiblings[0].innerHTML = `<use xlink:href="/sprite.e70822e0.svg#dayMode"></use>`;
			savedModeState = 'night';
			allSiblings[0].classList.value = 'night';
		} else if (allSiblings[0].classList[0] === 'night') {
			allSiblings[0].innerHTML = `<use xlink:href="/sprite.e70822e0.svg#nightMode"></use>`;
			savedModeState = 'day';
			allSiblings[0].classList.value = 'day';
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
	contentGoTop.addEventListener('click', (ev) => {
		ev.preventDefault();
		contentMainHeader.scrollIntoView({ behavior: 'smooth' });
	});

	contentGoBottom.addEventListener('click', (ev) => {
		ev.preventDefault();
		contentFooter.scrollIntoView({ behavior: 'smooth' });
	});
}

////////////////
// CONTENT PAGE --HIDE NAV BUTTON [GO TOP, GO BOTTOM] FROM <HEADER>
if (contentPageContainer) {
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
//////////////////
// CONTENT PAGE --show ARTICLES ON 20% VIEW
if (contentPageContainer) {
	// HIDE ALL THE CONTENTS AT THE BEGIN
	contentArticles.forEach((el) => {
		el.classList.add('util-opacity-0');
	});

	// CONTENT OBSERVER CALL-BACK
	const contentArticlesCallback = ([entries]) => {
		if (entries.isIntersecting) entries.target.classList.remove('util-opacity-0');
		if (!entries.isIntersecting) entries.target.classList.add('util-opacity-0');
	};

	// CREATE INTERSECTION OBSERVER OBJECT
	const contentArticlesObs = new IntersectionObserver(contentArticlesCallback, {
		root: null,
		threshold: 0.4,
	});

	// PASS ALL THE CONTENTS FOR OBSERVE
	contentArticles.forEach((el) => {
		// AUTO ADD [OPEN] ATTRIBUTE TO THE DETAILS TAG
		postContainer.forEach((el) => {
			el.open = true;
		});
		contentArticlesObs.observe(el);
	});
}
