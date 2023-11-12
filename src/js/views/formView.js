const loginReminder = document.querySelector('.login__reminder');
const loginForm = document.querySelector('.form--login');
const formLoginUsername = document.querySelector('.form__username--input');
const formLoginPassword = document.querySelector('.form__password--input');
const loginBtn = document.querySelector('.form__login--btn');
const signupForm = document.querySelector('.form--signup');
const signupCloseBtn = document.querySelector('.signup__close--btn');
const signupFname = document.querySelector('.signup__fname--input');
const signupLname = document.querySelector('.signup__lname--input');
const signupUsername = document.querySelector('.signup__username--input');
const signupDateofBirth = document.querySelector('.signup__date--input');
const signupGender = document.querySelectorAll("[name='form__gender']");
const signupGenderMale = document.querySelector('.gender__input--male');
const signupGenderFemale = document.querySelector('.gender__input--female');
const signupGenderOther = document.querySelector('.gender__input--other');
const signupOccupation = document.querySelector('.signup__occupation--input');
const signupPassword = document.querySelector('.signup__password--1');
const signupConfirmPassword = document.querySelector('.signup__password--2');
const signupBtn = document.querySelector('.signup--btn');

let allUserInformation = [];
const loginInformation = [];

export function formHandler() {
	document.addEventListener('click', (ev) => {
		ev.preventDefault();

		// LOGIN REMINDDER
		if (ev.target.closest('.login__reminder--span')) {
			loginForm.classList.toggle('util-display-n');
			loginReminder.classList.toggle('util-display-n');
		}

		// LOGIN
		if (ev.target.closest('.form__login--btn')) {
			const loginInfo = {};
			[
				(loginInfo.username = formLoginUsername.value),
				(loginInfo.password = formLoginPassword.value),
			];
			// CAPTURE INFO && PUSH TO GLOBAL OBJECT
			loginInformation.push(loginInfo);

			// CLEAR INPUT
			clearLoginValues();

			console.log(loginInfo);
		}

		// SIGNUP REMINDR
		if (ev.target.closest('.signup--span')) {
			signupForm.classList.toggle('util-display-n');
			loginForm.classList.toggle('util-display-n');
		}

		// SIGNUP FORM
		if (ev.target.closest('.signup--btn')) {
			const signupInfo = {};

			[
				(signupInfo.firstname = signupFname.value),
				(signupInfo.lastname = signupLname.value),
				(signupInfo.username = signupUsername.value),
				(signupInfo.date = signupDateofBirth.value),
				// TODO: FIX RADIO BUTTON
				// TODO: GET GENDER VALUE

				// (signupInfo.male = signupGenderMale.value),
				// (signupInfo.female = signupGenderFemale.value),
				// (signupInfo.other = signupGenderOther.value),
				((signupInfo.gender = signupGenderMale.value),
				(signupInfo.occupation = signupOccupation.value)),
				(signupInfo.password1 = signupPassword.value),
				(signupInfo.password2 = signupConfirmPassword.value),
			];

			allUserInformation.push(signupInfo);

			// CLEAR USER INPUT
			clearSignupValues();
			console.log(allUserInformation);
		}

		// GO BACK TO LOGIN PAGE
		if (ev.target.closest('.signup__login-form--btn')) {
			signupForm.classList.toggle('util-display-n');
			loginForm.classList.toggle('util-display-n');
		}

		// CLOSE FORM
		if (ev.target.closest('.signup__close--btn')) {
			signupForm.classList.toggle('util-display-n');
			loginReminder.classList.toggle('util-display-n');
		}
	});
}

// LOG-IN VALIDITY
loginForm.addEventListener('submit', (ev) => {
	ev.preventDefault();
	let validUsername = false;
	let validPassword = false;
	if (formLoginUsername.value.length > 3 && formLoginUsername.value.length < 13) {
		validUsername = true;
	} else {
		validUsername = false;
	}

	if (formLoginPassword.value.length > 3 && formLoginPassword.value.length < 13) {
		validPassword = true;
	} else {
		validPassword = false;
	}

	console.log(validUsername, validPassword);
});

// SIGN-UP VALIDITY
signupForm.addEventListener('submit', (ev) => {
	ev.preventDefault();
});

function clearLoginValues() {
	formLoginUsername.value = '';
	formLoginPassword.value = '';
}

function clearSignupValues() {
	signupFname.value = '';
	signupLname.value = '';
	signupUsername.value = '';
	signupDateofBirth.value = '';
	signupGenderMale.value = null;
	signupGenderFemale.value = null;
	signupGenderOther.value = null;
	signupOccupation.value = '';
	signupPassword.value = '';
	signupConfirmPassword.value = '';
}
