//  GET VIEW MODE INFORMATION FROM LOCAL STORAGE
export function getViewModeState() {
	return localStorage.getItem('theme');
}
