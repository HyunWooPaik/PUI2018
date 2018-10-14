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


	let glzsels = document.getElementsByClassName("glzsel");
	let calorie = document.getElementById("calorie");
	let sugar = document.getElementById("sugar");
	let fat = document.getElementById("fat");

	glzsels[0].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			glzsels[i].classList.remove("active");
		}
		glzsels[0].classList.add("active");
	});

	glzsels[1].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			glzsels[i].classList.remove("active");
		}
		glzsels[1].classList.add("active");
		calorie.textContent = "290";
		sugar.textContent = "29g";
		fat.textContent = "5g";
	});

	glzsels[2].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			glzsels[i].classList.remove("active");
		}
		glzsels[2].classList.add("active");
		glzsels[1].classList.add("active");
		calorie.textContent = "330";
		sugar.textContent = "27g";
		fat.textContent = "5g";
	});

	glzsels[3].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			glzsels[i].classList.remove("active");
		}
		glzsels[3].classList.add("active");
		glzsels[1].classList.add("active");
		calorie.textContent = "420";
		sugar.textContent = "36g";
		fat.textContent = "7g";
	});




}