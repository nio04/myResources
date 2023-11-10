const navBtn = document.querySelector('.content__nav--btn');
const navigatorTopBtn = document.querySelector('#nav__top--btn');
const navigatorBottomBtn = document.querySelector('#nav__bottom--btn');
const overlay = document.querySelector('.overlay');
const magicButton = document.querySelector('.contentPage__magic-btn');
const magicOptionsContainer = document.querySelector('.content__magic');

//FOR MAGIC
const fontFamilyValue = document.querySelector('.font-family--input');
const fontSizeValue = document.querySelector('.content-font--input');
const fontSizeTextSet = document.querySelector('.content__font-size--value');
const fontColorValue = document.querySelector('.contentMagic__color-input');
const backgroundColorValue = document.querySelector(
	'.contentMagic__background-color-input'
);
const paddingLTRvalue = document.querySelector('.content__padding__ltr');
const paddingValueTextSet = document.querySelector('.content__padding--value');
const lineHeightValue = document.querySelector('.content__line-height');
const lineHeightTextSet = document.querySelector('.content__line-height--value');

export function contentMagicHandler() {
	document.addEventListener('click', (ev) => {
		if (ev.target.closest('.contentPage__magic-btn')) {
			if (magicOptionsContainer.classList.contains('inactive')) {
				showMagicOptionsContainer();
			} else {
				hideMagicOptionsContainer();
			}
		}

		if (ev.target.classList.contains('overlay')) {
			hideMagicOptionsContainer();
		}
	});

	// FONT FAMILY
	fontFamilyValue.addEventListener('change', (ev) => {
		const value = ev.target.value;

		switch (value) {
			case '1':
				fontFamilySetter('Roboto');
				break;
			case '2':
				fontFamilySetter('Open Sans');
				break;
			case '3':
				fontFamilySetter('Roboto Condensed');
				break;
			case '4':
				fontFamilySetter('Bitter');
				break;
			case '5':
				fontFamilySetter('Cinzel');
				break;
			case '6':
				fontFamilySetter('Roboto Mono');
				break;

			default:
				break;
		}
	});

	// FONT SIZE
	fontSizeValue.addEventListener('change', (ev) => {
		const value = ev.target.value;
		fontSizeTextSet.textContent = value;

		switch (value) {
			case '1':
				fontSizeSetter('1.8');
				break;
			case '2':
				fontSizeSetter('2.4');
				break;
			case '3':
				fontSizeSetter('3');
				break;
			case '4':
				fontSizeSetter('3.8');
				break;
			case '5':
				fontSizeSetter('4.3');
				break;
		}
	});

	// FONT COLOR
	fontColorValue.addEventListener('change', (ev) => {
		const value = ev.target.value;

		switch (value) {
			case 'red':
				fontColorSetter('red');
				break;
			case 'green':
				fontColorSetter('green');
				break;
			case 'blue':
				fontColorSetter('blue');
				break;
			case 'yellow':
				fontColorSetter('yellow');
				break;
			case 'white':
				fontColorSetter('white');
				break;
			case 'pink':
				fontColorSetter('pink');
				break;
		}
	});

	// BACKGROUND COLOR
	backgroundColorValue.addEventListener('change', (ev) => {
		const value = ev.target.value;
		console.log(value);

		switch (value) {
			case 'red':
				backgroundColorSetter('red');
				break;
			case 'yellow':
				backgroundColorSetter('yellow');
				break;
			case 'green':
				backgroundColorSetter('green');
				break;
			case 'blue':
				backgroundColorSetter('blue');
				break;
			case 'pink':
				backgroundColorSetter('pink');
				break;
			case 'black':
				backgroundColorSetter('black');
				break;
		}
	});

	// PADDING LEFT-RIGHT
	paddingLTRvalue.addEventListener('change', (ev) => {
		const value = ev.target.value;
		paddingValueTextSet.textContent = value;

		switch (value) {
			case '1':
				paddingLTRsetter('1');
				break;
			case '2':
				paddingLTRsetter('2');
				break;
			case '3':
				paddingLTRsetter('4');
				break;
			case '4':
				paddingLTRsetter('6');
				break;
			case '5':
				paddingLTRsetter('8');
				break;

			default:
				break;
		}
	});

	// LINE-HEIGHT
	lineHeightValue.addEventListener('change', (ev) => {
		const value = ev.target.value;
		lineHeightTextSet.textContent = value;

		switch (value) {
			case '1':
				lineHeightSetter('6');
				break;
			case '2':
				lineHeightSetter('9');
				break;
			case '3':
				lineHeightSetter('11');
				break;
			case '4':
				lineHeightSetter('13');
				break;
			case '5':
				lineHeightSetter('15');
				break;
		}
	});
}

function fontFamilySetter(family) {
	const h1Texts = document.querySelectorAll('h1');
	const h2Texts = document.querySelectorAll('h2');
	const h3Texts = document.querySelectorAll('h3');
	const h4Texts = document.querySelectorAll('h4');
	const linkTexts = document.querySelectorAll('a');
	const navigatorTexts = document.querySelectorAll('.navigator__btn');
	const postCodeText = document.querySelectorAll('.post__code');
	const listTexts = document.querySelectorAll('.list');
	const postText = document.querySelectorAll('.content__post');

	h1Texts.forEach((el) => (el.style.fontFamily = family));
	h2Texts.forEach((el) => (el.style.fontFamily = family));
	h3Texts.forEach((el) => (el.style.fontFamily = family));
	h4Texts.forEach((el) => (el.style.fontFamily = family));
	linkTexts.forEach((el) => (el.style.fontFamily = family));
	navigatorTexts.forEach((el) => (el.style.fontFamily = family));
	postCodeText.forEach((el) => (el.style.fontFamily = family));
	listTexts.forEach((el) => (el.style.fontFamily = family));
	postText.forEach((el) => (el.style.fontFamily = family));
}

// FONT SIZE
function fontSizeSetter(size) {
	const contentPost = document.querySelectorAll('.content__post');
	console.log(size);

	contentPost.forEach((el) => (el.style.fontSize = `${size}rem`));
}

// FONT COLOR
function fontColorSetter(color) {
	const h2Texts = document.querySelectorAll('h2');
	const h3Texts = document.querySelectorAll('h3');
	const h4Texts = document.querySelectorAll('h4');
	const linkTexts = document.querySelectorAll('a');
	const navigatorTexts = document.querySelectorAll('.navigator__btn');
	const postTexts = document.querySelectorAll('.content__post');
	const postCodeText = document.querySelectorAll('.post__code');
	const listTexts = document.querySelectorAll('.list');
	h2Texts.forEach((el) => (el.style.color = color));
	h3Texts.forEach((el) => (el.style.color = color));
	h4Texts.forEach((el) => (el.style.color = color));
	linkTexts.forEach((el) => (el.style.color = color));
	navigatorTexts.forEach((el) => (el.style.color = color));
	postTexts.forEach((el) => (el.style.color = color));
	postCodeText.forEach((el) => (el.style.color = color));
	listTexts.forEach((el) => (el.style.color = color));
}

// BACKGROUND COLOR
function backgroundColorSetter(color) {
	const h2BG = document.querySelectorAll('h2');
	const h4BG = document.querySelectorAll('h4');
	const postCodeBG = document.querySelectorAll('.post__code');
	const navigatorBG = document.querySelectorAll('.float__btn--container');
	const magicBtnBG = document.querySelector('.contentPage__magic-btn');
	document.body.style.backgroundColor = color;
	h2BG.forEach((el) => (el.style.backgroundColor = color));
	h4BG.forEach((el) => (el.style.backgroundColor = color));
	postCodeBG.forEach((el) => (el.style.backgroundColor = color));
	navigatorBG.forEach((el) => (el.style.backgroundColor = color));
	navigatorBG.forEach((el) => (el.style.border = `5px solid ${color}`));
	magicBtnBG.style.backgroundColor = 'transparent';
	magicBtnBG.style.border = 'none';
}

// PADDING SETTER
function paddingLTRsetter(value) {
	const navigationBtn = document.querySelector('.content__nav--btn');
	document.body.style.paddingLeft = `${value}rem`;
	document.body.style.paddingRight = `${value}rem`;
	navigationBtn.style.padding = 'none';
}

// LINE-HEIGHT
function lineHeightSetter(value) {
	const postText = document.querySelectorAll('.content__post');

	postText.forEach((el) => (el.style.lineHeight = `${value}rem`));
}

// MAGIC APPEARENCE FUNCTIONALITY
function showMagicOptionsContainer() {
	magicOptionsContainer.classList.add('noTransform--js');
	magicOptionsContainer.classList.remove('inactive');
	magicButton.style.fill = 'red';
	overlay.classList.add('util-display-y');
	document.body.style.overflow = 'hidden';
	showBtns();
}

function hideMagicOptionsContainer() {
	magicOptionsContainer.classList.remove('noTransform--js');
	magicOptionsContainer.classList.add('inactive');
	magicButton.style.fill = 'black';
	overlay.classList.remove('util-display-y');
	document.body.style.overflow = 'auto';
	hideBtns();
}

function hideBtns() {
	navigatorTopBtn.classList.remove('util-display-n');
	navigatorBottomBtn.classList.remove('util-display-n');
	navBtn.classList.remove('util-hide-element-transform');
}

function showBtns() {
	navigatorTopBtn.classList.add('util-display-n');
	navigatorBottomBtn.classList.add('util-display-n');
	navBtn.classList.add('util-hide-element-transform');
}
