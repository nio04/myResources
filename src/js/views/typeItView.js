import TypeIt from "typeit";

const contents = [
	"index-title",
	"css--01",
	"css--02",
	"dom--01",
	"dom--02",
	"dom--03",
	"dom--04",
	"dom--05",
	"dom--06",
	"git--01",
	"git--02",
	"git--03",
	"git--04",
	"git--05",
	"html--01",
	"js--01",
	"js--02",
	"miscs--01",
];

const mainHomeContent = [
	"this is my private website",
	"this is my archive",
	"this can not be any more noobish act of programming",
	"welcome to my dumb site",
	"bye bye ",
];

const controls = {
	speed: 60,
	deleteSpeed: 50,
	cursor: false,
	breakLines: false,
	nextStringDelay: 1000,
	loop: true,
};

const controlPageType = (target) => {
	if (!document.querySelector(`#${target}`)?.id) return;

	if (document.querySelector(`.mainhome`)) {
		// for main page
		new TypeIt(`#${target}`, {
			strings: mainHomeContent,
			...controls,
		}).go();
	} else {
		// for content page
		new TypeIt(`#${target}`, {
			...controls,
		}).go();
	}
};

contents.forEach((content) => {
	controlPageType(content);
});
