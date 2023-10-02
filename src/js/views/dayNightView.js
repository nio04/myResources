const bodyElement = document.querySelector('body');
const viewBtnContainer = document.querySelector('.view__changer__btn--container');

export function viewChanger(getViewModeState) {
	// LOAD VIEW MODE BY LOCAL-STORAGE
	if (getViewModeState === 'night') {
		turnOnNightMode();
	} else {
		turnOffNightMode();
	}

	document.addEventListener('click', (ev) => {
		if (ev.target.closest('#view__changer--container')) {
			//CHECK IF NIGGHT ICON IS AVAILABLE
			if (viewBtnContainer.classList.contains('night--icon')) {
				turnOnNightMode();
			} else {
				// IF NIGHT ICON IS NOT AVAILABLE

				turnOffNightMode();
			}
		}
	});
}

function turnOnNightMode() {
	viewBtnContainer.classList.remove('night--icon');
	viewBtnContainer.innerHTML = generateDayModeIcon();
	bodyElement.classList.add('nightTheme');
	localStorage.setItem('theme', 'night');
}

function turnOffNightMode() {
	viewBtnContainer.classList.add('night--icon');
	viewBtnContainer.innerHTML = generateNightModeIcon();
	bodyElement.classList.remove('nightTheme');
	localStorage.setItem('theme', 'day');
}

function generateDayModeIcon() {
	return `
  <svg id="view__changer--btn" class="day__mode__icon--on" height="512" viewBox="0 0 16 16" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_34" data-name="34"><path d="m12 8a4 4 0 1 0 -4 4 4 4 0 0 0 4-4zm-4 3a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z"/><path d="m9 3.11h.14a.49.49 0 0 0 .48-.36l.38-1.11a.5.5 0 0 0 -1-.28l-.3 1.13a.5.5 0 0 0 .3.62z"/><path d="m7 12.89a.5.5 0 0 0 -.62.34l-.38 1.13a.5.5 0 0 0 .34.62h.14a.49.49 0 0 0 .52-.34l.32-1.13a.5.5 0 0 0 -.32-.62z"/><path d="m14.64 9-1.13-.3a.5.5 0 0 0 -.28 1l1.13.32h.14a.5.5 0 0 0 .14-1z"/><path d="m2.63 7.32a.5.5 0 0 0 .14-1l-1.13-.32a.5.5 0 0 0 -.28 1l1.13.32z"/><path d="m14.1 4.22a.51.51 0 0 0 -.68-.2l-1 .57a.51.51 0 0 0 -.2.68.49.49 0 0 0 .44.26.53.53 0 0 0 .24-.06l1-.57a.51.51 0 0 0 .2-.68z"/><path d="m3.13 10.53-1 .57a.51.51 0 0 0 -.2.68.49.49 0 0 0 .44.26.53.53 0 0 0 .21-.04l1-.57a.5.5 0 1 0 -.48-.88z"/><path d="m4.59 3.61a.49.49 0 0 0 .41.26.5.5 0 0 0 .24-.06.51.51 0 0 0 .2-.68l-.57-1a.5.5 0 0 0 -.87.45z"/><path d="m11.41 12.39a.5.5 0 0 0 -.88.48l.57 1a.49.49 0 0 0 .44.26.5.5 0 0 0 .24-.06.51.51 0 0 0 .2-.68z"/></g></svg>`;
}

function generateNightModeIcon() {
	return `
  <svg id="view__changer--btn" class="day__mode__icon--off" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m12 22.75a10.75 10.75 0 0 1 -1.085-21.45.754.754 0 0 1 .7.332.746.746 0 0 1 .033.774 7.387 7.387 0 0 0 -.898 3.594 7.021 7.021 0 0 0 6.75 7.25 6.385 6.385 0 0 0 4.021-1.436.75.75 0 0 1 1.218.615 10.713 10.713 0 0 1 -10.739 10.321zm-2.261-19.724a9.252 9.252 0 1 0 11.317 10.868 7.771 7.771 0 0 1 -3.556.856 8.521 8.521 0 0 1 -8.25-8.75 9.045 9.045 0 0 1 .489-2.974z"/></g></svg>`;
}
