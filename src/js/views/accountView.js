// import * as accountPassword from '../accountPassword';

const accountPasswordShow = document.querySelector('.accountPassword__show');
const passwordShowBtn = document.querySelector('.acc__btn--show');
const showButton = document.querySelector('#acc__btn--show');
const retryPasswordBtn = document.querySelector('#retry-password');
let buttonEl;

const accountPassword = {
	gmail: 'niopai318200204',
	wpsAcc: 'Nio3108200204',
	github: 'niopai318200204',
	vivaldi: 'nio3108200204',
	microsoft: 'niopai3108200204',
	abbaGmail: 'nizamuddinkrishi3108200204',
	abbaMiAcc: 'nio3108200204',
	nishatMiAcc: 'nio@3108200204',
	xda: 'niopai3108200204',
	gameGuardian: 'niopai3108200204',
	fb: 'niopai7415963',
	ammaFb: '7415963',
	bkash: '20020',
	mega: '3108200204',
	momGmail: 'shanazvai3108200204',
	momMiAcc: 'Shanaz3108200204',
	abbaFb: 'niopai3108200204',
};

// CONSTANT PASSWORD
const password = 3108200204;

// PASSWORD PROMPT
const passwordPrompt = (subject = '') => {
	return prompt(`enter The password to view ${subject}`);
};

// PASSWORD MATCH
const passwordMatched = (parentEl, mainPassword) => {
	parentEl.innerText = mainPassword;
	parentEl.classList.add('password-match', 'password-general');
	parentEl.classList.remove('invalid-password');

	// REMOVE CLASSES TO PREVENT CALLING
	// PASSWORD PROMPT WHEN CLICKED IN
	// SUCCESS PASSWORD
	const acc = [
		'gmail',
		'wpsAcc',
		'github',
		'vivaldi',
		'microsoft',
		'abbaGmail',
		'abbaMiAcc',
		'nishatMiAcc',
		'xda',
		'gameGuardian',
		'fb',
		'ammaFb',
		'bkash',
		'mega',
		'momGmail',
		'momMiAcc',
		'abbaFb',
	];
	acc.forEach((el) => {
		parentEl.classList.remove(el);
	});
};

// PASSWORD MATCHED NOT
const passwordmatchedNot = (parentEl) => {
	parentEl.innerText = `password did not matched`;
	parentEl.classList.add('invalid-password', 'password-general');
	retryPasswordBtnGenerate(parentEl);
};

// RE-TRY BUTTON GENERATING
const retryPasswordBtnGenerate = (parent) => {
	buttonEl = document.createElement('button');
	buttonEl.classList.add('retry__password--btn');
	buttonEl.id = 'retry-password';
	buttonEl.innerText = 'retry';
	parent.append(buttonEl);
};

// DELETE RETRY BUTTON
const deleteRetryBtn = () => {
	if (buttonEl) buttonEl.remove();
};

// CHECK PASSWORD ON RE-TRY OPERATION
function checkPasswordMatchRETRY(parentElClass, parentEl) {
	// OUR TARGET CLASS ALWAYS THE SECOND
	// ELEMENT. SO, WE MANUALLY SELECT IT
	const prompt = passwordPrompt([parentEl][1]);
	if (!prompt) return;

	if (Number(prompt) === password) {
		// WHEN PROMPT PASSWORD MATCHED
		const acc = [
			'gmail',
			'wpsAcc',
			'github',
			'vivaldi',
			'microsoft',
			'abbaGmail',
			'abbaMiAcc',
			'nishatMiAcc',
			'xda',
			'gameGuardian',
			'fb',
			'ammaFb',
			'bkash',
			'mega',
			'momGmail',
			'momMiAcc',
			'abbaFb',
		];
		const parent = [...parentElClass];
		acc.forEach((element) => {
			if (element === parent[1]) {
				passwordMatched(parentEl, accountPassword[element]);
			}
		});
	} else {
		// WHEN PROMPT PASSWORD MATCHED NOT
		passwordmatchedNot(parentEl);
	}
}

/////
// PASSWORD MATCHER
////
const validatePassword = (passwordPrompt, parentEl, mainPassword) => {
	if (!passwordPrompt) return;

	if (Number(passwordPrompt) === password) {
		// MATCHED PASSWORD
		passwordMatched(parentEl, mainPassword);

		// REMOVE RE-TRY BUTTON
		deleteRetryBtn();
	} else {
		// PASSWORD MATCHED NOT
		passwordmatchedNot(parentEl);
	}
};

////////////////
// MAIN EVENT
//////////////
export const accountPasswordHandle = () => {
	document.addEventListener('click', (ev) => {
		// RE-TRY BUTTON PASSWORD PRESSED
		if (ev.target.id === 'retry-password') {
			// INVOKE RE-TRY FUNCTION,
			// WHEN RE-TRY BUTTON PRESSED
			checkPasswordMatchRETRY(
				ev.target.parentElement.classList,
				ev.target.parentElement
			);
		}

		// G-MAIL
		if (ev.target.classList.contains('gmail')) {
			validatePassword(
				passwordPrompt('gmail'),
				ev.target.parentElement,
				accountPassword.gmail
			);
		}
		// WPS
		if (ev.target.classList.contains('wps')) {
			validatePassword(
				passwordPrompt('wps'),
				ev.target.parentElement,
				accountPassword.wpsAcc
			);
		}

		// GIT-HUB
		if (ev.target.classList.contains('github')) {
			validatePassword(
				passwordPrompt('github'),
				ev.target.parentElement,
				accountPassword.github
			);
		}

		// ****VIVALDI**** //
		if (ev.target.classList.contains('vivaldi')) {
			validatePassword(
				passwordPrompt('vivaldi'),
				ev.target.parentElement,
				accountPassword.vivaldi
			);
		}
		// MICROSOFT
		if (ev.target.classList.contains('microsoft')) {
			validatePassword(
				passwordPrompt('microsoft'),
				ev.target.parentElement,
				accountPassword.microsoft
			);
		}
		// ABBA G-MAIL
		if (ev.target.classList.contains('abbaGmail')) {
			validatePassword(
				passwordPrompt('abbaGmail'),
				ev.target.parentElement,
				accountPassword.abbaGmail
			);
		}
		// ABBA MI  ACOUNT
		if (ev.target.classList.contains('abbaMiAcc')) {
			validatePassword(
				passwordPrompt('abbaMiAcc'),
				ev.target.parentElement,
				accountPassword.abbaMiAcc
			);
		}
		// NISHAT MI  ACOUNT
		if (ev.target.classList.contains('nishatMiAcc')) {
			validatePassword(
				passwordPrompt('nishatMiAcc'),
				ev.target.parentElement,
				accountPassword.nishatMiAcc
			);
		}
		// xda
		if (ev.target.classList.contains('xda')) {
			validatePassword(
				passwordPrompt('xda'),
				ev.target.parentElement,
				accountPassword.xda
			);
		}
		// GAME-GUARDDIAN
		if (ev.target.classList.contains('gameGuardian')) {
			validatePassword(
				passwordPrompt('gameGuardian'),
				ev.target.parentElement,
				accountPassword.gameGuardian
			);
		}
		// FACEBOOK
		if (ev.target.classList.contains('fb')) {
			validatePassword(
				passwordPrompt('fb'),
				ev.target.parentElement,
				accountPassword.fb
			);
		}
		// AMMA-FACEBOOK
		if (ev.target.classList.contains('ammaFb')) {
			validatePassword(
				passwordPrompt('ammaFb'),
				ev.target.parentElement,
				accountPassword.ammaFb
			);
		}
		// bkash
		if (ev.target.classList.contains('bkash')) {
			validatePassword(
				passwordPrompt('bkash'),
				ev.target.parentElement,
				accountPassword.bkash
			);
		}
		// mega
		if (ev.target.classList.contains('mega')) {
			validatePassword(
				passwordPrompt('mega'),
				ev.target.parentElement,
				accountPassword.mega
			);
		}
		// mom g-mail
		if (ev.target.classList.contains('momGmail')) {
			validatePassword(
				passwordPrompt('momGmail'),
				ev.target.parentElement,
				accountPassword.momGmail
			);
		}
		// mom mi acount
		if (ev.target.classList.contains('momMiAcc')) {
			validatePassword(
				passwordPrompt('momMiAcc'),
				ev.target.parentElement,
				accountPassword.momMiAcc
			);
		}
		// abba fb
		if (ev.target.classList.contains('abbaFb')) {
			validatePassword(
				passwordPrompt('abbaFb'),
				ev.target.parentElement,
				accountPassword.abbaFb
			);
		}
	});
};
