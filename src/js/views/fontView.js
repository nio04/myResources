const contentPage = document.querySelector(".content__page--container");

export let selectedFont;

function loadFont(fontFamily) {
	WebFont.load({
		google: {
			families: [fontFamily],
		},
	});
}

export function fontFamilyControl(ev) {
	selectedFont = ev.target.value;
	loadFont(selectedFont);
}

if (contentPage)
	document
		.querySelector(".font-family--input")
		.addEventListener("change", (ev) => {
			fontFamilyControl(ev);
		});

/*
i want to effectively load all the online font weight of specific font while not disturbing website loading

i have collection of online font. now when a css selector use specific online font, then only download that specific font. i dont want to load rest of the font which are not used by css selector

i want to use all the tailwind css color while not using tailwind framework. is it possible?

just like google font website. i want to font prepview in my website for all the custom font. how to achive this?
*/
