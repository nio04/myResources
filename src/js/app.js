'use strict';
const mainHomeContainer = document.querySelector('.main-home__container');
const mainHomeAllSection = document.querySelectorAll(
	'.main-home-resource__contents'
);
const contentPageContainer = document.querySelector('.content-page__container');
const contentMainHeader = document.querySelector('.nav__container');
const contentNav = document.querySelector('.sticky-nav__container');
const contentMainSection = document.querySelector('main');
const contentFloatButtons = document.querySelectorAll('.float-btn__container');
const contentGoTop = document.querySelector('.to-top-btn');
const contentGoBottom = document.querySelector('.to-bottom-btn');
const contentArticles = document.querySelectorAll('.content-area__container');
const contentFooter = document.querySelector('footer');

///////////////
// MAIN HOME PAGE --NAV LIST SHOW ON 20% VIEW
if (mainHomeContainer) {
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

	const mainHomeObsChecker = getComputedStyle(
		document.querySelector('.main-home__container')
	).width;

	if (mainHomeObsChecker <= '872px') {
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
	contentArticles.forEach((el) => {
		el.classList.add('util-opacity-0');
	});

	const contentArticlesCallback = ([entries]) => {
		if (entries.isIntersecting) entries.target.classList.remove('util-opacity-0');
		if (!entries.isIntersecting) entries.target.classList.add('util-opacity-0');
	};

	const contentArticlesObs = new IntersectionObserver(contentArticlesCallback, {
		root: null,
		threshold: 0.6,
	});

	contentArticles.forEach((el) => {
		contentArticlesObs.observe(el);
	});
}
