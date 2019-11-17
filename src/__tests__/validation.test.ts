import * as fs from "fs";
import * as path from "path";

import { validate } from "../scripts/validation";
import * as alerts from "../scripts/alerts";
import { getIncludedChars } from "../scripts/chars";

jest.dontMock("fs");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

document.documentElement.innerHTML = html.toString();
let alert: HTMLElement = document.getElementById("alert");

describe("validate", () => {
	const alertSpy = jest.spyOn(alerts, "alertError");

	it("should accept length between 8 and 128 characters", () => {
		expect(validate(9)).toBeTruthy();
	});

	it("should not accept length less than 8 characters", () => {
		expect(validate(-1)).toBeFalsy();
	});

	it("should not accept length greater than 128 characters", () => {
		expect(validate(300)).toBeFalsy();
	});

	it("should alert user if length is invalid", () => {
		expect(alertSpy).toHaveBeenCalledTimes(2);
		expect(alert.innerHTML).toBe(
			"Invalid password length. Length must be between 8 and 128 characters. Length must be a number."
		);
	});

	it("should alert user if no character types are selected in UI", () => {
		// uncheck default checked boxes
		let lc = document.getElementById("lowercase") as HTMLInputElement;
		let uc = document.getElementById("uppercase") as HTMLInputElement;
		lc.checked = false;
		uc.checked = false;

		validate(8);
		expect(getIncludedChars().length).toBe(0);
		expect(alertSpy).toHaveBeenCalledTimes(3);
		expect(alert.innerHTML).toBe("You must select character types to include.");
	});
});
