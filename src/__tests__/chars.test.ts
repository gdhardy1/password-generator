import * as fs from "fs";
import * as path from "path";

import { getCharType, getIncludedChars, charTypes } from "../scripts/chars";

jest.dontMock("fs");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

document.documentElement.innerHTML = html.toString();
// checkboxes
let lc = document.getElementById("lowercase") as HTMLInputElement;
let uc = document.getElementById("uppercase") as HTMLInputElement;
let num = document.getElementById("numbers") as HTMLInputElement;
let sym = document.getElementById("symbols") as HTMLInputElement;

describe("getIncludedChars", () => {
	it("should return an array of checked checkboxes", () => {
		const result: HTMLInputElement[] = getIncludedChars();
		expect(lc.checked && uc.checked).toBeTruthy();
		expect(sym.checked).toBeFalsy();
		expect(num.checked).toBeFalsy();
		expect(result).toContain(lc);
		expect(result).toContain(uc);
		expect(result).not.toContain(num);
		expect(result).not.toContain(sym);
	});
});

describe("getCharType", () => {
	it("should select a random CharType from provided checkboxes", () => {
		expect([charTypes["sym"], charTypes["num"]]).not.toContainEqual(
			getCharType([lc, uc])
		);

		expect([charTypes["sym"], charTypes["num"]]).toContainEqual(
			getCharType([sym, num])
		);
	});
});
