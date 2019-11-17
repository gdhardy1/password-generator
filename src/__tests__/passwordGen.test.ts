import * as fs from "fs";
import * as path from "path";
import * as Password from "../scripts/passwordGen";

jest.dontMock("fs");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

document.documentElement.innerHTML = html.toString();
// checkboxes
let lc = document.getElementById("lowercase") as HTMLInputElement;
let uc = document.getElementById("uppercase") as HTMLInputElement;
let num = document.getElementById("numbers") as HTMLInputElement;
let sym = document.getElementById("symbols") as HTMLInputElement;

describe("Password.randChar()", () => {
	it("should return a random lowercase letter", () => {
		expect(Array.from("abcdefghijklmnopqrstuvwxyz")).toContain(
			Password.randChar([lc])
		);
	});

	it("should return a random uppercase letter", () => {
		expect(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toContain(
			Password.randChar([uc])
		);
	});

	it("should return a random number 0-9 as a string", () => {
		expect(Array.from("0123456789")).toContain(Password.randChar([num]));
	});

	it("should return a random symbol from the allowed symbols", () => {
		expect(Array.from("!@#$%^&*()_+=-")).toContain(Password.randChar([sym]));
	});
});

describe("Password.generate()", () => {
	it("should return a string of provided length between 8-128, inclusively", () => {
		expect(Password.generate(128).length).toBe(128);
		expect(Password.generate(22).length).toBe(22);
	});
});
