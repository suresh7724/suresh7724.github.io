
var rows = document.querySelectorAll('.row');

rows.forEach((row) => {
	let colOpen = row.querySelector(".show-col"),
	colClose = row.querySelector(".close-col");
	
	colOpen.addEventListener("click", function () {
		row.classList.add("box-active");
	});

	colClose.addEventListener("click", function () {
		row.classList.remove("box-active");
	});
});