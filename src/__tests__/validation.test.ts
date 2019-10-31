import { validateLength } from "../scripts/validation";
import * as alerts from "../scripts/alerts";

describe("validateLength", () => {
	document.body.innerHTML = `
  <div id="alert" class="alert">
    Invalid password length. Length must be between 8 and 128
    characters. Length must be a number.
  </div>
  `;
	const alertSpy = jest.spyOn(alerts, "alertError");

	it("should not accept length less than 8 characters", () => {
		expect(validateLength(-1)).toBeFalsy();
	});

	it("should not accept length greater than 128 characters", () => {
		expect(validateLength(300)).toBeFalsy();
	});

	it("should accept length between 8 and 128 characters", () => {
		expect(validateLength(9)).toBeTruthy();
	});

	it("should alert user if length is invalid", () => {
		validateLength(300);
		expect(alertSpy).toHaveBeenCalled();
	});
});
