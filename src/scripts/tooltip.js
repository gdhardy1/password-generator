// Initialize Materialize tooltips
document.addEventListener("DOMContentLoaded", function() {
	const elems = document.querySelectorAll(".tooltipped");
	const options = {};
	M.Tooltip.init(elems, options);
});
