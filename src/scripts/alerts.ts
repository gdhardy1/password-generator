export const alertError = (message: string): void => {
	const alert: HTMLElement = document.getElementById("alert")!;

	// Set alert message
	alert.innerHTML = message;

	// Get height of alert element
	const slideDistance: number = -alert.clientHeight + 5;

	// slide out alert message
	alert.style.bottom = slideDistance.toString();

	// slide in alert message
	setTimeout(() => {
		alert.style.bottom = "0";
	}, 5000);
};
