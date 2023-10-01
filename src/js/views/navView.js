const bodyElement = document.querySelector('body');
const mainHomeContainer = document.querySelector('#main__home--container');
const navBtnContainerHome = document.querySelector('#nav__btn__container--home');
const navBtnContainerContent = document.querySelector(
	'#nav__btn__container--content'
);
const overlay = document.querySelector('.overlay');
const sideNavElementContainer = document.querySelector('.sticky__nav--container');
const contentPageContainer = document.querySelector('.content__page--container');
const navDropDownLists = document.querySelector('.nav__el--wrap');
const navDropDownCloseBtn = document.querySelector('#nav__dd__close--icon');
const navigatorTopBtn = document.querySelector('#nav__top--btn');
const navigatorBottomBtn = document.querySelector('#nav__bottom--btn');

export function initNavBtnManager() {
	document.addEventListener('click', (ev) => {
		// CLICK ON NAVGATION ICON --MAIN HOME
		if (ev.target.closest('#nav__btn__container--home')) {
			if (navBtnContainerHome.classList.contains('nav__icon--open')) {
				showNavigation();
			} else if (!navBtnContainerHome.classList.contains('nav__icon--open')) {
				hideNaviation();
			}
		}
		// CLICK ON NAVGATION ICON --CONTENT PAGE
		if (
			ev.target.closest('#nav__btn__container--content') ||
			ev.target.closest('.sticky__nav--el')
		) {
			// SHOW NAVIGATION WHILE CLICKED ON NAV ICON --CONTENT PAGE
			showNavigation();
			if (ev.target.closest('.sticky__nav--el')) {
				// EXECUTE FUNC WHILE CLICKED ON "NAVIGGATE POST" --CONTENT PAGE
				showDropDownListMenu();
			}
			if (ev.target.closest('#nav__dd__close--icon')) {
				// CLICKED ON 'CLOSE' BUTTON
				dropDownListMenuOff();
			}
		}

		overlay.addEventListener('click', () => hideNaviation());

		document.addEventListener('keydown', (ev) => {
			if (ev.key === 'Escape') {
				hideNaviation();
			}
		});
	});
}

function hideNaviation() {
	bodyElement.classList.remove('util-overflow-hidden');
	sideNavElementContainer.classList.remove('util-show-element-transform');
	overlay.classList.remove('util-display-y');

	if (mainHomeContainer) {
		navBtnContainerHome.classList.add('nav__icon--open');
		navBtnContainerHome.innerHTML = generateNavOnIcon();
	} else if (contentPageContainer) {
		navBtnContainerContent.classList.add('nav__icon--open');
		navBtnContainerContent.innerHTML = generateNavOnIcon();

		// SHOW NAVIGATOR [GO TOP, GO BOTTOM] BUTTON
		navigatorTopBtn.classList.remove('util-display-n');
		navigatorBottomBtn.classList.remove('util-display-n');

		// AUTO CLOSE DROP DOWN MENU WHILE CLOSINGG NAVIGATION
		dropDownListMenuOff();
	}
}

function showNavigation() {
	bodyElement.classList.add('util-overflow-hidden');
	overlay.classList.add('util-display-y');
	sideNavElementContainer.classList.add('util-show-element-transform');

	if (mainHomeContainer) {
		navBtnContainerHome.classList.remove('nav__icon--open');
		navBtnContainerHome.innerHTML = generateNavOffIcon();
	} else if (contentPageContainer) {
		navBtnContainerContent.classList.remove('nav__icon--open');
		navBtnContainerContent.innerHTML = generateNavOffIcon();
		// 	HIDE NAVIAGTOR [GO TOP, GO BOTTOM] BUTTON
		navigatorTopBtn.classList.add('util-display-n');
		navigatorBottomBtn.classList.add('util-display-n');
	}
}

function showDropDownListMenu() {
	navDropDownLists.classList.add('util-show-element-transform');
	navDropDownCloseBtn.classList.add('util-show-element-transform');
}
function dropDownListMenuOff() {
	navDropDownLists.classList.remove('util-show-element-transform');
	navDropDownCloseBtn.classList.remove('util-show-element-transform');
}

function generateNavOffIcon() {
	return `
 <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve">
<g>
	<path d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c38.287,0,74.567-14.609,102.159-41.136
		c2.389-2.296,2.464-6.095,0.167-8.483c-2.295-2.388-6.093-2.464-8.483-0.167c-25.345,24.367-58.672,37.786-93.842,37.786
		C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,16.842-3.052,33.273-9.071,48.835
		c-1.195,3.091,0.341,6.565,3.432,7.761c3.092,1.193,6.565-0.341,7.761-3.432c6.555-16.949,9.879-34.836,9.879-53.165
		C294.843,66.133,228.71,0,147.421,0z"/>
	<path d="M167.619,160.134c-2.37-2.319-6.168-2.277-8.485,0.09c-2.318,2.368-2.277,6.167,0.09,8.485l47.236,46.236
		c1.168,1.143,2.683,1.712,4.197,1.712c1.557,0,3.113-0.603,4.288-1.803c2.318-2.368,2.277-6.167-0.09-8.485L167.619,160.134z"/>
	<path d="M125.178,133.663c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757c2.343-2.343,2.343-6.142,0-8.485
		L88.428,79.942c-2.343-2.343-6.143-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L125.178,133.663z"/>
	<path d="M214.9,79.942c-2.343-2.343-6.143-2.343-8.485,0L79.942,206.415c-2.343,2.343-2.343,6.142,0,8.485
		c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757L214.9,88.428C217.243,86.084,217.243,82.286,214.9,79.942z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;
}
function generateNavOnIcon() {
	return `
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 294.843 294.843" style="enable-background:new 0 0 294.843 294.843;" xml:space="preserve">
<g>
	<path d="M147.421,0C66.133,0,0,66.133,0,147.421c0,40.968,17.259,80.425,47.351,108.255c2.433,2.25,6.229,2.101,8.479-0.331
		c2.25-2.434,2.102-6.229-0.332-8.479C27.854,221.3,12,185.054,12,147.421C12,72.75,72.75,12,147.421,12
		s135.421,60.75,135.421,135.421s-60.75,135.421-135.421,135.421c-3.313,0-6,2.687-6,6s2.687,6,6,6
		c81.289,0,147.421-66.133,147.421-147.421S228.71,0,147.421,0z"/>
	<path d="M84.185,90.185h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,90.185,84.185,90.185z"/>
	<path d="M84.185,153.421h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,153.421,84.185,153.421z"/>
	<path d="M216.658,210.658c0-3.313-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6s2.687,6,6,6h126.473
		C213.971,216.658,216.658,213.971,216.658,210.658z"/>
  `;
}
