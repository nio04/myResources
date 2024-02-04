const mainHome=document.querySelector("#main__home--container")
const video = document.querySelector('.mainhome__header__background video source');

export function videoResponsive() {
	if (!mainHome) return

	if (window.innerWidth >= 910) {
		video.src = '../asset/video/mainHomeHeader_1_1080.mp4';
	} else if (window.innerWidth >= 670) {
		video.src = '../asset/video/mainHomeHeader_1_720.mp4';
	} else if (window.innerWidth < 670) {
		video.src = '../asset/video/mainHomeHeader_1_540.mp4';
	}
}

window.addEventListener('resize', videoResponsive);
