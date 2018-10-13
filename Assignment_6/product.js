function loadPage() {
	let qntnums = document.getElementsByClassName("qntnum");
	let finalPrice = document.getElementById("finalPrice");

	qntnums[0].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			qntnums[i].classList.remove("active");
		}
		qntnums[0].classList.add("active");
		finalPrice.textContent = "$4.00";
	});

	qntnums[1].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			qntnums[i].classList.remove("active");
		}
		qntnums[1].classList.add("active");
		finalPrice.textContent = "$12.00";
	});

	qntnums[2].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			qntnums[i].classList.remove("active");
		}
		qntnums[2].classList.add("active");
		finalPrice.textContent = "$24.00";
	});

	qntnums[3].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			qntnums[i].classList.remove("active");
		}
		qntnums[3].classList.add("active");
		finalPrice.textContent = "$48.00";
	});
}