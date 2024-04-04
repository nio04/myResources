import { selectedFont } from "./fontView";

const navBtn = document.querySelector(".content__nav--btn");
const navigatorTopBtn = document.querySelector("#nav__top--btn");
const navigatorBottomBtn = document.querySelector("#nav__bottom--btn");
const overlay = document.querySelector(".overlay");
const magicButton = document.querySelector(".contentPage__magic-btn svg");
const magicOptionsContainer = document.querySelector(".content__magic");

//FOR MAGIC
const fontSizeTextSet = document.querySelector(
	".content__font-size--value"
);
const paddingValueTextSet = document.querySelector(
	".content__padding--value"
);
const lineHeightTextSet = document.querySelector(
	".content__line-height--value"
);
const textAlignmentTextSet = document.querySelector(
	".content__text-alignment--value"
);
const fontWeightTextSet = document.querySelector(
	".content__font-weight--value"
);
// HANDLER
export function contentMagicHandler() {
	document.addEventListener("click", (ev) => {
		if (ev.target.closest(".contentPage__magic-btn")) {
			if (magicOptionsContainer.classList.contains("inactive")) {
				showMagicOptionsContainer();
			} else {
				hideMagicOptionsContainer();
			}
		}

		if (ev.target.classList.contains("overlay")) {
			hideMagicOptionsContainer();
		}
	});
}

////////////////
// SETTER FUNCTION STARTS
function setCustomStyle(styles, styleValue) {
	const h1Texts = document.querySelectorAll("h1");
	const h2Texts = document.querySelectorAll("h2");
	const h3Texts = document.querySelectorAll("h3");
	const h4Texts = document.querySelectorAll("h4");
	const linkTexts = document.querySelectorAll("a");
	const navigatorTexts = document.querySelectorAll(".navigator__btn");
	const postCodeTexts = document.querySelectorAll(".post__code");
	const listTexts = document.querySelectorAll(".list");
	const postTexts = document.querySelectorAll(".content__post");
	const postIndex = document.querySelector(".posts ul");
	const postIndexesList = document.querySelectorAll(".posts ul li a");
	const navigatorBG = document.querySelectorAll(".float__btn--container");
	const magicBtnBG = document.querySelector(".contentPage__magic-btn");
	const navigationBtn = document.querySelector(".content__nav--btn");

	const style = {
		textColor: {
			textColorMethod() {
				h1Texts.forEach((h1) => (h1.style.color = styleValue));
				h2Texts.forEach((h2) => (h2.style.color = styleValue));
				h3Texts.forEach((h3) => (h3.style.color = styleValue));
				h4Texts.forEach((h4) => (h4.style.color = styleValue));
				linkTexts.forEach((link) => (link.style.color = styleValue));
				navigatorTexts.forEach((nav) => (nav.style.color = styleValue));
				postCodeTexts.forEach((code) => (code.style.color = styleValue));
				listTexts.forEach((list) => (list.style.color = styleValue));
				postTexts.forEach((post) => (post.style.color = styleValue));
			},
		},
		backgroundColor: {
			bgColorMethod() {
				h2Texts.forEach((h2) => (h2.style.backgroundColor = styleValue));
				h4Texts.forEach((h4) => (h4.style.backgroundColor = styleValue));
				postIndexesList.forEach(
					(list) => (list.style.backgroundColor = styleValue)
				);
				postCodeTexts.forEach(
					(code) => (code.style.backgroundColor = styleValue)
				);
				navigatorBG.forEach((nav) => {
					nav.style.backgroundColor = styleValue;
					nav.style.border = `5px solid ${styleValue}`;
				});
				magicBtnBG.style.backgroundColor = "transparent";
				magicBtnBG.style.border = "none";
				postIndex.style.backgroundColor = styleValue;
				document.body.style.backgroundColor = styleValue;
			},
		},
		fontFamily: {
			fontFamilyMethod() {
				h1Texts.forEach((h1) => (h1.style.fontFamily = styleValue));
				h2Texts.forEach((h2) => (h2.style.fontFamily = styleValue));
				h3Texts.forEach((h3) => (h3.style.fontFamily = styleValue));
				h4Texts.forEach((h4) => (h4.style.fontFamily = styleValue));
				linkTexts.forEach((link) => (link.style.fontFamily = styleValue));
				navigatorTexts.forEach(
					(nav) => (nav.style.fontFamily = styleValue)
				);
				postCodeTexts.forEach(
					(code) => (code.style.fontFamily = styleValue)
				);
				listTexts.forEach((list) => (list.style.fontFamily = styleValue));
				postTexts.forEach((post) => (post.style.fontFamily = styleValue));
			},
		},
		padding: {
			paddingMethod() {
				paddingValueTextSet.textContent = styleValue;

				navigationBtn.style.padding = "none";
				document.body.style.paddingLeft = `${styleValue}rem`;
				document.body.style.paddingRight = `${styleValue}rem`;
			},
		},
		fontSize: {
			fontSizeMethod() {
				fontSizeTextSet.textContent = styleValue;

				postTexts.forEach(
					(post) =>
						(post.style.fontSize = `${Number(styleValue) * 1.3}rem`)
				);
			},
		},
		fontWeight: {
			fontWeightMethod() {
				fontWeightTextSet.textContent = styleValue;

				h1Texts.forEach((h1) => (h1.style.fontWeight = styleValue));
				h2Texts.forEach((h2) => (h2.style.fontWeight = styleValue));
				h3Texts.forEach((h3) => (h3.style.fontWeight = styleValue));
				h4Texts.forEach((h4) => (h4.style.fontWeight = styleValue));
				linkTexts.forEach((link) => (link.style.fontWeight = styleValue));
				navigatorTexts.forEach(
					(nav) => (nav.style.fontWeight = styleValue)
				);
				postCodeTexts.forEach(
					(code) => (code.style.fontWeight = styleValue)
				);
				listTexts.forEach((list) => (list.style.fontWeight = styleValue));
				postTexts.forEach((post) => (post.style.fontWeight = styleValue));
			},
		},
		lineHeight: {
			lineHeightMethod() {
				lineHeightTextSet.textContent = styleValue;

				postTexts.forEach(
					(post) =>
						(post.style.lineHeight = `${Number(styleValue) * 3}rem`)
				);
			},
		},
		textAlignment: {
			textAlignMethod() {
				textAlignmentTextSet.textContent = styleValue;

				postTexts.forEach((post) => (post.style.textAlign = styleValue));
			},
		},
	};
	if (styles === "color") style.textColor.textColorMethod();
	if (styles === "bgColor") style.backgroundColor.bgColorMethod();
	if (styles === "fontFamily") style.fontFamily.fontFamilyMethod();
	if (styles === "fontWeight") style.fontWeight.fontWeightMethod();
	if (styles === "padding") style.padding.paddingMethod();
	if (styles === "fontSize") style.fontSize.fontSizeMethod();
	if (styles === "lineHeight") style.lineHeight.lineHeightMethod();
	if (styles === "textAlign") style.textAlignment.textAlignMethod();
}

// SETTER FUNCTION ENDS
/////////////

// EVENT-DELEGATION
document.addEventListener("change", (ev) => {
	if (ev.target.className === "content-font--input")
		setCustomStyle("fontSize", ev.target.value);
	if (ev.target.className === "font-family--input")
		setCustomStyle("fontFamily", ev.target.value);
	if (ev.target.id === "custom-font-weight")
		setCustomStyle("fontWeight", ev.target.value);
	if (ev.target.id === "custom-text-color")
		setCustomStyle("color", ev.target.value);
	if (ev.target.id === "custom-bg-color")
		setCustomStyle("bgColor", ev.target.value);
	if (ev.target.className === "content__padding__ltr")
		setCustomStyle("padding", ev.target.value);
	if (ev.target.className === "content__line-height")
		setCustomStyle("lineHeight", ev.target.value);
	if (ev.target.className === "contentMagic__text-alignment--input")
		setCustomStyle("textAlign", ev.target.value);
});

// MAGIC APPEARENCE FUNCTIONALITY
function showMagicOptionsContainer() {
	magicOptionsContainer.classList.add("noTransform--js");
	magicOptionsContainer.classList.remove("inactive");
	magicButton.style.fill = "red";
	overlay.classList.add("util-display-y");
	document.body.style.overflow = "hidden";
	showBtns();
}

function hideMagicOptionsContainer() {
	magicOptionsContainer.classList.remove("noTransform--js");
	magicOptionsContainer.classList.add("inactive");
	overlay.classList.remove("util-display-y");
	document.body.style.overflow = "auto";
	magicButton.style.fill = "black";
	hideBtns();
}

function hideBtns() {
	navigatorTopBtn.classList.remove("util-display-n");
	navigatorBottomBtn.classList.remove("util-display-n");
	navBtn.classList.remove("util-hide-element-transform");
}

function showBtns() {
	navigatorTopBtn.classList.add("util-display-n");
	navigatorBottomBtn.classList.add("util-display-n");
	navBtn.classList.add("util-hide-element-transform");
}
