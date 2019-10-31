import { alertError } from "./alerts";

export const validateLength = (length: number): boolean => {
	// Check if minimum length is met
	if (length < 8 || length > 128) {
		alertError();
		return false;
	}

	return true;
};
