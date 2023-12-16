import * as accountPassword from '../accountPassword';

const accountPasswordShow = document.querySelector('.accountPassword__show');
const passwordShowBtn = document.querySelector('.acc__btn--show');
const showButton = document.querySelector('#acc__btn--show');
let buttonEl;

// CONSTANT PASSWORD
const password = 3108200204;

// const accountPassword = {
// 	ammaFB: () => '7415963',
// 	abbaFB: () => 'niopai3108200204',
// 	gmail: () => 'niopai318200204',
// 	wps: () => 'Nio3108200204',
// };

const accountPassword = {
	gmail: () => 'niopai318200204',
	wpsAcc: () => 'Nio3108200204',
	github: () => 'niopai318200204',
	vivaldi: () => 'nio3108200204',
	microsoft: () => 'niopai3108200204',
	abbaGmail: () => 'nizamuddinkrishi3108200204',
	abbaMiAcc: () => 'nio3108200204',
	nishatMiAcc: () => 'nio@3108200204',
	xda: () => 'niopai3108200204',
	gameGuardian: () => 'niopai3108200204',
	fb: () => 'niopai7415963',
	ammaFb: () => '7415963',
	bkash: () => '20020',
	mega: () => '3108200204',
	momGmail: () => 'shanazvai3108200204',
	momMiAcc: () => 'Shanaz3108200204',
	abbaFb: () => 'niopai3108200204',
};

// amma fb password
// const ammaFb = () => "7415963";

// PASSWORD PROMPT
const passwordPrompt = (subject = '') => {
	return prompt(`enter The password to view ${subject}`);
};

// RETRY PASSWORD --WHEN NOT MATCHED
const retryPasswordBtnGenerate = (parent, callback) => {
	buttonEl = document.createElement('button');
	buttonEl.classList.add('retry__password--btn', `${callback}`);
	buttonEl.id = 'retry-password';
	buttonEl.innerText = 'retry';
	parent.append(buttonEl);
};

// PASSWORD MATCHER
const validatePassword = (passwordPrompt, parentEl, passwordParent) => {
	//   console.log("step 1",password, passwordPrompt)
	if (Number(passwordPrompt) === password) {
		// MATCHED PASSWORD
		parentEl.innerText = passwordParent;
		parentEl.classList.add('password-match', 'password-general');

		// REMOVE RE-TRY BUTTON
		if (buttonEl) {
			buttonEl.remove();
		}

		// todo: i think this is used to validation logic
	} else if (passwordPrompt?.length === 0) {
		// parentEl.innerHTML = no password were found;
		// parentEl.classList.add('no-password-found', 'password-general');
		// retryPasswordBtnGenerate(parentEl);

		parentEl.innerText = `no password were found`;
		retryPasswordBtnGenerate(parentEl, 'ammaFb');
	} else {
		// parentEl.innerHTML = password did not matched;
		// parentEl.classList.add('invalid-password', 'password-general');
		parentEl.innerText = `password did not matched`;
		retryPasswordBtnGenerate(parentEl, 'ammaFb');
	}
};

// optimized version
const retryPassword = (ev, accountPassword) => {
	if (ev.target.id === 'retry-password') {
		const retryButton = document.getElementById('retry-password');
		const classNames = Array.from(retryButton.classList);

		const passwordFunction = classNames
			.map((className) => accountPassword[className])
			.find(Boolean); // Find the first truthy value (non-null, non-undefined)

		validatePassword(passwordPrompt(), ev.target.parentElement, passwordFunction());
	}
};

document.addEventListener('click', (ev) => retryPassword(ev, accountPassword));

//   old version
// export const accountPasswordHandle = () => {
document.addEventListener('click', (ev) => {
	// RE-TRY PASSWORD  button
	if (ev.target.id === 'retry-password1') {
		/** testing change id  */

		const retryButton = document.getElementById('retry-password');
		let className = Array.from(retryButton.classList);
		if (className.includes('gamil')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['gmail']()
			);
		} else if (className.includes('wpsAcc')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['wpsAcc']()
			);
		} else if (className.includes('github')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['github']()
			);
		} else if (className.includes('vivaldi')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['vivaldi']()
			);
		} else if (className.includes('microsoft')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['microsoft']()
			);
		} else if (className.includes('abbaGmail')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['abbaGmail']()
			);
		} else if (className.includes('abbaMiAcc')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['abbaMiAcc']()
			);
		} else if (className.includes('nishatMiAcc')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['nishatMiAcc']()
			);
		} else if (className.includes('xda')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['xda']()
			);
		} else if (className.includes('gameGuardian')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['gameGuardian']()
			);
		} else if (className.includes('fb')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['fb']()
			);
		} else if (className.includes('ammaFb')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['ammaFb']()
			);
		} else if (className.includes('bkash')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['bkash']()
			);
		} else if (className.includes('mega')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['mega']()
			);
		} else if (className.includes('momGmail')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['momGmail']()
			);
		} else if (className.includes('momMiAcc')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['momMiAcc']()
			);
		} else if (className.includes('abbaFb')) {
			validatePassword(
				passwordPrompt(),
				ev.target.parentElement,
				accountPassword['abbaFb']()
			);
		} else {
			validatePassword(passwordPrompt(), ev.target.parentElement);
		}
	}
	/* // AMMA-FACEBOOK
    if (ev.target.classList.contains('ammaFb')) {
      validatePassword(
        passwordPrompt('ammaFb'),
        ev.target.parentElement,
        accountPassword.ammaFB()
      );
    }
    if (ev.target.classList.contains('abbaFb')) {
      validatePassword(
        passwordPrompt('abbaFb'),
        ev.target.parentElement,
        accountPassword.abbaFB()
      );
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

    // VIVALDI
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
        accountPassword.abbaFB()
      );
    }
    */
});
// };
