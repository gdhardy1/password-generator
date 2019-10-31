export const alertError = (): void => {
	const alert: HTMLElement = document.getElementById("alert");
	const slideDistance: number = -alert.clientHeight + 5;

	// slide out alert message
	alert.style.bottom = slideDistance.toString();

	// slide in alert message
	setTimeout(() => {
		alert.style.bottom = "0";
	}, 5000);
};
