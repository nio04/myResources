import Typed from 'typed.js';

const mianHomeContainer = document.querySelector('#main__home--container');
const contentPageContainer = document.querySelector('.content__page--container');

if (mianHomeContainer) {
	const mainHomePrimaryHeader = new Typed('#typed--primary-header__span', {
		strings: ['my website', 'my personal website', 'my archive', 'my personal shit'],
		startDelay: 50,
		typeSpeed: 70,
		backSpeed: 80,
		backDelay: 1500,
		smartBackspace: true,
		loop: true,
		loopCount: Infinity,
	});
}

if (contentPageContainer) {
}
