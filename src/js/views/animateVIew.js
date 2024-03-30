import "animate.css";

const mainhome = document.querySelector("main");
const contentPage = document.querySelectorAll(
	".content__page--container section h2"
);

const randomAnimContent = [
	"animate__bounce",
	"animate__flash",
	"animate__rubberBand",
	"animate__shakeX",
	"animate__tada",
	"animate__wobble",
	"animate__jello",
	"animate__heartBeat",
	"animate__flipInY",
	"animate__lightSpeedInRight",
	"animate__lightSpeedInLeft",
	"animate__lightSpeedOutRight",
	"animate__lightSpeedOutLeft",
	"animate__jackInTheBox",
	"animate__slideInRight",
	"animate__slideInLeft",
];

const getRandomAnimation = () => {
	const randomNumber = Math.trunc(
		Math.random() * randomAnimContent.length + 1
	);

	return randomAnimContent[randomNumber];
};

function animateCallback(entries) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;

		if (mainhome) entry.target.classList.add("mainhome__main--anim");
		else {
			// FLUSH EXISTING CSS CLASSES ALWAYS
			entry.target.className = "";

			// FOR CONTENT PAGE
			entry.target.classList.add(
				"animate__animated",
				getRandomAnimation()
			);
		}
	});
}

const animateObserver = new IntersectionObserver(animateCallback, {
	root: null,
	threshold: 0,
	rootMargin: "-200px",
});

contentPage.forEach((h2) => animateObserver.observe(h2));
animateObserver.observe(mainhome);
