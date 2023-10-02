'use strict';
import * as model from './model';
import * as navView from './views/navView';
import * as modeView from './views/dayNightView';
import * as visiblity from './views/visibleBtnView';

const mainHomeParent = document.querySelector('#main__home--container');
const contentPageParent = document.querySelector('.content__page--container');

if (mainHomeParent) {
	navView.initNavBtnManager();
}

if (contentPageParent) {
	navView.initNavBtnManager();
	modeView.viewChanger(model.getViewModeState());
}
