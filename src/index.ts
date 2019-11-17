import "./libraries/materialize/sass/materialize.scss";
import "./libraries/materialize/js/materialize.min.js";
import "./scripts/tooltip.js";
import "./styles/styles.scss";

import * as Password from "./scripts/passwordGen";
import { validate } from "./scripts/validation";

const getPassField = () => {
	return document.getElementById("password") as HTMLInputElement;
};

const outputPassword = () => {
	// Round decimal input
	const length: number = Math.floor(
		Number((document.getElementById("pass-length") as HTMLInputElement).value)
	);
	// if length is valid
	if (validate(length)) {
		// generate a password
		const password: string = Password.generate(length);
		const output: HTMLInputElement = getPassField();
		// add password to text area
		output.value = password;
	}
};

// Copy generated password to clipboard
const copyPass = () => {
	getPassField().select();
	document.execCommand("copy");
};

// add event listeners for password gen and copy
const generate: HTMLElement = document.getElementById("generate");
const copy: HTMLElement = document.getElementById("copy");

generate.addEventListener("click", outputPassword);
copy.addEventListener("click", copyPass);
