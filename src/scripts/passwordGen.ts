import { CharType, getCharType, getIncludedChars } from "./chars";

const randChar = (includedChars: HTMLInputElement[]): string => {
	// get the character type to generate
	const charType: CharType = getCharType(includedChars);

	// if char type is a symbol
	if (charType.name === "sym") {
		// allowed symbols
		const allowedSymbols: string = "!@#$%^&*()_+=-";
		// randomly select a chacter from the allowed symbols
		return allowedSymbols[Math.floor(Math.random() * allowedSymbols.length)];
	}

	// get a random chacter from character code
	return String.fromCharCode(
		Math.floor(Math.random() * charType.range) + charType.start
	);
};

const generate = (
	length: number,
	password: string = "",
	includedChars?: HTMLInputElement[]
): string => {
	if (length === 0) return password;
	// determine which char types to include in password
	if (!includedChars) {
		includedChars = getIncludedChars();
	}
	// recursively add random char to end of password string
	return generate(
		length - 1,
		password + randChar(includedChars),
		includedChars
	);
};

export { generate, randChar };
