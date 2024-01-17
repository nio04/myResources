const contentPage = document.querySelector('.content__page--container');
const target = document.querySelector('#content__main--section');
const navBtnContainer = document.querySelector('.content__nav--btn');
const navigatorBtns = document.querySelectorAll('.float__btn--container');
const magicBtn = document.querySelector('.contentPage__magic-btn svg');

const btnsIntersection = new IntersectionObserver(navViewIntersection, {
	root: null,
	threshold: 0,
	rootMargin: '-300px',
});

if (contentPage) btnsIntersection.observe(target);

function navViewIntersection([entries]) {
	if (entries.isIntersecting) {
		// SHOW NAVIGATOR BUTTON
		navBtnContainer.classList.add('util-display-y');
		// SHOW NAVIGATROR [TOP, BOTTOM] BUTTON
		showNavigatorBtns();
		// for magic btn
		magicBtn.classList.add('util-show-element-transform');
	} else {
		// HIDE NAVIGATOR BUTTON
		navBtnContainer.classList.remove('util-display-y');
		// HIDE NAVIGATROR [TOP, BOTTOM] BUTTON
		hideNavigatorBtns();
		// for magic btn
		magicBtn.classList.remove('util-show-element-transform');
	}
}

function showNavigatorBtns() {
	navigatorBtns.forEach((el) => {
		el.classList.add('util-show-element-transform');
	});
}

function hideNavigatorBtns() {
	navigatorBtns.forEach((el) => {
		el.classList.remove('util-show-element-transform');
	});
}
