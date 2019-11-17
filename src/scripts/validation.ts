import { alertError } from "./alerts";
import { getIncludedChars } from "./chars";

export const validate = (length: number): boolean => {
	// Check if minimum length is met
	if (length < 8 || length > 128) {
		alertError(
			"Invalid password length. Length must be between 8 and 128 characters. Length must be a number."
		);
		return false;
	}

	if (getIncludedChars().length === 0) {
		alertError("You must select character types to include.");
		return false;
	}

	return true;
};
