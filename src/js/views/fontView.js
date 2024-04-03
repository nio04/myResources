const contentPage = document.querySelector(".content__page--container");

export let selectedFont;

// MAGIC-CONTENT --FONT-FAMILY
export function fontFamilyControl(ev) {
	selectedFont = ev.target.value;

	function loadCustomFont(fontFamily) {
		WebFont.load({
			google: {
				families: [fontFamily],
			},
		});
	}

	loadCustomFont(selectedFont);
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

/*
link same: ALEO, LORA, INTER
*/

function fontCollection() {
	// SERIF
	const aleoReg = new FontFace(
		"Aleo",
		"url(https://fonts.gstatic.com/s/aleo/v14/c4mv1nF8G8_swA3J0Q.woff2)",
		{ weight: "400" }
	);
	const aleoBold = new FontFace(
		"Aleo",
		"url(https://fonts.gstatic.com/s/aleo/v14/c4mv1nF8G8_swA3J0Q.woff2)",
		{
			weight: "600",
		}
	);
	const cardoReg = new FontFace(
		"Cardo",
		"url(https://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqhv43IE.woff2)",
		{ weight: "400" }
	);
	const cardoBold = new FontFace(
		"Cardo",
		"url(https://fonts.gstatic.com/s/cardo/v19/wlpygwjKBV1pqhND-ZQW-WM.woff2)",
		{ weight: "700" }
	);
	const loraReg = new FontFace(
		"Lora",
		"url(https://fonts.gstatic.com/s/lora/v35/0QIvMX1D_JOuMwr7Iw.woff2)",
		{ weight: "400" }
	);
	const loraBold = new FontFace(
		"Lora",
		"url(https://fonts.gstatic.com/s/lora/v35/0QIvMX1D_JOuMwr7Iw.woff2)",
		{ weight: "600" }
	);
	const tinosReg = new FontFace(
		"Tinos",
		"url(https://fonts.gstatic.com/s/tinos/v24/buE4poGnedXvwjX7fmQ.woff2) format('woff2')",
		{ weight: "400" }
	);
	const tinosBold = new FontFace(
		"Tinos",
		"url(https://fonts.gstatic.com/s/tinos/v24/buE1poGnedXvwj1AW3Fu0C8.woff2) format('woff2')",
		{ weight: "700" }
	);

	const merriweatherReg = new FontFace(
		"Merriweather",
		"url(https://fonts.gstatic.com/s/merriweather/v30/u-440qyriQwlOrhSvowK_l5-fCZM.woff2) format('woff2')",
		{ weight: "400" }
	);
	const merriweatherBold = new FontFace(
		"Merriweather",
		" url(https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6.woff2) format('woff2')",
		{
			weight: "700",
		}
	);
	// SANS-SERIF
	const interReg = new FontFace(
		"Inter",
		"url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2)",
		{ weight: "400" }
	);
	const interBold = new FontFace(
		"Inter",
		"url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2)",
		{ weight: "600" }
	);

	const openSansReg = new FontFace(
		"Open Sans",
		"url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2')",
		{ weight: "400" }
	);
	const openSansBold = new FontFace(
		"Open Sans",
		"url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2')",
		{ weight: "600" }
	);

	const workSansReg = new FontFace(
		"Work Sans",
		"url(https://fonts.gstatic.com/s/worksans/v19/QGYsz_wNahGAdqQ43Rh_fKDp.woff2) format('woff2')",
		{ weight: "400" }
	);
	const workSansBold = new FontFace(
		"Work Sans",
		"url(https://fonts.gstatic.com/s/worksans/v19/QGYsz_wNahGAdqQ43Rh_fKDp.woff2) format('woff2')",
		{ weight: "600" }
	);

	const latoReg = new FontFace(
		"Lato",
		"url(https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXg.woff2) format('woff2')",
		{ weight: "400" }
	);
	const latoBold = new FontFace(
		"Lato",
		"url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2')",
		{ weight: "700" }
	);

	const arimoReg = new FontFace(
		"Arimo",
		"url(https://fonts.gstatic.com/s/arimo/v29/P5sMzZCDf9_T_10ZxCE.woff2) format('woff2')",
		{ weight: "400" }
	);
	const arimoBold = new FontFace(
		"Arimo",
		"url(https://fonts.gstatic.com/s/arimo/v29/P5sMzZCDf9_T_10ZxCE.woff2) format('woff2')",
		{ weight: "600" }
	);

	const robotoReg = new FontFace(
		"Roboto",
		" url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2')",
		{ weight: "400" }
	);
	const robotoBold = new FontFace(
		"Roboto",
		" url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2')",
		{ weight: "700" }
	);

	const montserratReg = new FontFace(
		"Montserrat",
		" url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2')",
		{ weight: "400" }
	);
	const montserratBold = new FontFace(
		"Montserrat",
		" url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2')",
		{ weight: "600" }
	);

	// MONOSPACE
	const consolasReg = new FontFace(
		"Inconsolata",
		"url(https://fonts.gstatic.com/s/inconsolata/v32/QlddNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLyya15.woff2) format('woff2')",
		{ weight: "400" }
	);
	const consolasBold = new FontFace(
		"Inconsolata",
		"url(https://fonts.gstatic.com/s/inconsolata/v32/QlddNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLyya15.woff2) format('woff2')",
		{ weight: "600" }
	);

	return [
		aleoReg,
		aleoBold,
		cardoReg,
		cardoBold,
		loraReg,
		loraBold,
		tinosReg,
		tinosBold,
		interReg,
		interBold,
		merriweatherReg,
		merriweatherBold,
		openSansReg,
		openSansBold,
		workSansReg,
		workSansBold,
		latoReg,
		latoBold,
		arimoReg,
		arimoBold,
		robotoReg,
		robotoBold,
		montserratReg,
		montserratBold,
		consolasReg,
		consolasBold,
	];
}

async function loadDefaultFont() {
	try {
		const defaultfonts = fontCollection();

		await Promise.all(defaultfonts.map((font) => font.load()));

		defaultfonts.forEach((font) => document.fonts.add(font));
	} catch (error) {
		console.error(error);
	}
}

// DEFAULT FONT-FAMILY
window.addEventListener("load", () => {
	loadDefaultFont();
});
