const video = document.querySelector('.mainhome__header__background video source');

export function videoResponsive() {
	if (window.innerWidth >= 910) {
		video.src = '../asset/video/mainHomeHeader_1080.mp4';
	} else if (window.innerWidth >= 670) {
		video.src = '../asset/video/mainHomeHeader_720.mp4';
	} else if (window.innerWidth < 670) {
		video.src = '../asset/video/mainHomeHeader_540.mp4';
	}
}

window.addEventListener('resize', videoResponsive);
