'use strict';

import * as model from './model';
import viewTyped from './views/viewTyped';
import * as navView from './views/navView';
import * as modeView from './views/dayNightView';
import * as visiblity from './views/visibilityBtnsView';
import * as contentMagic from './views/contentMagic';

const mainHomeParent = document.querySelector('#main__home--container');
const contentPageParent = document.querySelector('.content__page--container');

if (mainHomeParent) {
	navView.initNavBtnManager();
}

if (contentPageParent) {
	navView.initNavBtnManager();
	modeView.viewChanger(model.getViewModeState());
	contentMagic.contentMagicHandler();
}

// HOT MODULE REPLACEMENT (HMR)
if (module.hot) {
	module.hot.accept();
}

// const mainHomeHTML = new Typed('#typed--html__span', {
// 	stringsElement: '#typed-js__html',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeCSS = new Typed('#typed--css__span', {
// 	stringsElement: '#typed-js__css',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeSASS = new Typed('#typed--sass__span', {
// 	stringsElement: '#typed-js__sass',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeJS = new Typed('#typed--js__span', {
// 	stringsElement: '#typed-js__js',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeDOM = new Typed('#typed--dom__span', {
// 	stringsElement: '#typed-js__dom',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeGIT = new Typed('#typed--git__span', {
// 	stringsElement: '#typed-js__git',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
// const mainHomeMISCS = new Typed('#typed--miscs__span', {
// 	stringsElement: '#typed-js__miscs',
// 	startDelay: 50,
// 	typeSpeed: 70,
// 	backSpeed: 80,
// 	backDelay: 1500,
// 	smartBackspace: true,
// 	loop: true,
// 	loopCount: Infinity,
// 	fadeOut: true,
// 	fadeOutClass: 'typed-fade-out',
// 	fadeOutDelay: 500,
// });
