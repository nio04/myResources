import * as accountPassword from '../accountPassword';

const accountPasswordShow = document.querySelector('.accountPassword__show');
const passwordShowBtn = document.querySelector('.acc__btn--show');
const showButton = document.querySelector('#acc__btn--show');
let buttonEl;

// CONSTANT PASSWORD
const password = 3108200204;

// PASSWORD PROMPT
const passwordPrompt = (subject = '') => {
	return prompt(`enter The password to view ${subject}`);
};

// RETRY PASSWORD --WHEN NOT MATCHED
const retryPasswordBtnGenerate = (parent) => {
	buttonEl = document.createElement('button');
	buttonEl.classList.add('retry__password--btn');
	buttonEl.id = 'retry-password';
	buttonEl.innerText = 'retry';
	parent.append(buttonEl);
};

/////
// PASSWORD MATCHER
////
const validatePassword = (passwordPrompt, parentEl, mainPassword, target) => {
	// console.log(target);

	// if (!passwordPrompt) return;

	if (Number(passwordPrompt) === password) {
		// MATCHED PASSWORD
		parentEl.innerText = mainPassword;
		parentEl.classList.add('password-match', 'password-general');

		// REMOVE RE-TRY BUTTON
		if (buttonEl) {
			buttonEl.remove();
		}
	}
	// else if (passwordPrompt.length === 0) {
	// 	// parentEl.innerHTML = `no password were found`;
	// 	// parentEl.classList.add('no-password-found', 'password-general');
	// 	// retryPasswordBtnGenerate(parentEl);

	// 	parentEl.innerText = `no password were found`;
	// 	retryPasswordBtnGenerate(parentEl);
	// }
	else {
		// parentEl.innerHTML = `password did not matched`;
		parentEl.innerText = `password did not matched`;
		parentEl.classList.add('invalid-password', 'password-general');
		retryPasswordBtnGenerate(parentEl);
	}
};

////////////////
// MAIN EVENT
//////////////
export const accountPasswordHandle = () => {
	document.addEventListener('click', (ev) => {
		// RE-TRY PASSWORD
		if (ev.target.id === 'retry-password') {
			validatePassword(passwordPrompt(), ev.target.parentElement, '', ev);
		}

		// G-MAIL
		if (ev.target.classList.contains('gmail')) {
			validatePassword(
				passwordPrompt('gmail'),
				ev.target.parentElement,
				accountPassword.gmail()
			);
		}
		// WPS
		if (ev.target.classList.contains('wps')) {
			validatePassword(
				passwordPrompt('wps'),
				ev.target.parentElement,
				accountPassword.wpsAcc()
			);
		}

		// GIT-HUB
		if (ev.target.classList.contains('github')) {
			validatePassword(
				passwordPrompt('github'),
				ev.target.parentElement,
				accountPassword.github()
			);
		}

		// ****VIVALDI**** //
		if (ev.target.classList.contains('vivaldi')) {
			validatePassword(
				passwordPrompt('vivaldi'),
				ev.target.parentElement,
				accountPassword.vivaldi(),
				ev
			);
		}
		// MICROSOFT
		if (ev.target.classList.contains('microsoft')) {
			validatePassword(
				passwordPrompt('microsoft'),
				ev.target.parentElement,
				accountPassword.microsoft()
			);
		}
		// ABBA G-MAIL
		if (ev.target.classList.contains('abbaGmail')) {
			validatePassword(
				passwordPrompt('abbaGmail'),
				ev.target.parentElement,
				accountPassword.abbaGmail()
			);
		}
		// ABBA MI  ACOUNT
		if (ev.target.classList.contains('abbaMiAcc')) {
			validatePassword(
				passwordPrompt('abbaMiAcc'),
				ev.target.parentElement,
				accountPassword.abbaMiAcc()
			);
		}
		// NISHAT MI  ACOUNT
		if (ev.target.classList.contains('nishatMiAcc')) {
			validatePassword(
				passwordPrompt('nishatMiAcc'),
				ev.target.parentElement,
				accountPassword.nishatMiAcc()
			);
		}
		// xda
		if (ev.target.classList.contains('xda')) {
			validatePassword(
				passwordPrompt('xda'),
				ev.target.parentElement,
				accountPassword.xda()
			);
		}
		// GAME-GUARDDIAN
		if (ev.target.classList.contains('gameGuardian')) {
			validatePassword(
				passwordPrompt('gameGuardian'),
				ev.target.parentElement,
				accountPassword.gameGuardian()
			);
		}
		// FACEBOOK
		if (ev.target.classList.contains('fb')) {
			validatePassword(
				passwordPrompt('fb'),
				ev.target.parentElement,
				accountPassword.fb()
			);
		}
		// AMMA-FACEBOOK
		if (ev.target.classList.contains('ammaFb')) {
			validatePassword(
				passwordPrompt('ammaFb'),
				ev.target.parentElement,
				accountPassword.ammaFb()
			);
		}
		// bkash
		if (ev.target.classList.contains('bkash')) {
			validatePassword(
				passwordPrompt('bkash'),
				ev.target.parentElement,
				accountPassword.bkash()
			);
		}
		// mega
		if (ev.target.classList.contains('mega')) {
			validatePassword(
				passwordPrompt('mega'),
				ev.target.parentElement,
				accountPassword.mega()
			);
		}
		// mom g-mail
		if (ev.target.classList.contains('momGmail')) {
			validatePassword(
				passwordPrompt('momGmail'),
				ev.target.parentElement,
				accountPassword.momGmail()
			);
		}
		// mom mi acount
		if (ev.target.classList.contains('momMiAcc')) {
			validatePassword(
				passwordPrompt('momMiAcc'),
				ev.target.parentElement,
				accountPassword.momMiAcc()
			);
		}
		// abba fb
		if (ev.target.classList.contains('abbaFb')) {
			validatePassword(
				passwordPrompt('abbaFb'),
				ev.target.parentElement,
				accountPassword.abbaFb()
			);
		}
	});
};
