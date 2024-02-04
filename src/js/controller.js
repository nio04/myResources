'use strict';


import * as model from './model';
// import viewTyped from './views/viewTyped';
import * as navView from './views/navView';
import * as resVideo from './views/responsiveVideo';
import * as modeView from './views/dayNightView';
import * as visiblity from './views/visibilityBtnsView';
import * as contentMagic from './views/contentMagic';
import * as accountView from './views/accountView';
import typeItView from "./views/typeItView";
import animateView from "./views/animateVIew";

const mainHomeParent = document.querySelector('#main__home--container');
const contentPageParent = document.querySelector('.content__page--container');

if (mainHomeParent) {
	navView.initNavBtnManager();
	resVideo.videoResponsive();
}

if (contentPageParent) {
	navView.initNavBtnManager();
	modeView.viewChanger(model.getViewModeState());
	contentMagic.contentMagicHandler();
	accountView.accountPasswordHandle();
}

// HOT MODULE REPLACEMENT (HMR)
if (module.hot) {
	module.hot.accept();
}
