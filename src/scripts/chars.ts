import CharType from "./interfaces";
const charTypes: { [index: string]: CharType } = {
	lc: { name: "lc", start: 97, range: 26 }, // lowercase letter
	uc: { name: "uc", start: 65, range: 26 }, // uppercase letter
	num: { name: "num", start: 48, range: 10 }, // number
	sym: { name: "sym" }, // symbol
};

const getCharType = (includedChars: HTMLInputElement[]): CharType => {
	// randomly select from array of checkbox elements
	const charToGet = includedChars[
		Math.floor(Math.random() * includedChars.length)
	].getAttribute("name");

	return charTypes[charToGet] as CharType;
};

const getIncludedChars = (): HTMLInputElement[] => {
	// get checkbox inputs
	const lc = document.getElementById("lowercase");
	const uc = document.getElementById("uppercase");
	const num = document.getElementById("numbers");
	const sym = document.getElementById("symbols");

	// get array of checked boxes
	let includedChars: HTMLInputElement[] = [lc, uc, num, sym].filter(
		(checkbox: HTMLInputElement) => checkbox.checked
	) as HTMLInputElement[];

	return includedChars;
};

export { CharType, getCharType, getIncludedChars, charTypes };
