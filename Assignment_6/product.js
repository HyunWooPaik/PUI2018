var hasdata = false;







function productOption() {
	let qntnums = document.getElementsByClassName("qntnum");
	let quantity = null;
	let glazing = null;
	let finalPrice = document.getElementById("finalPrice");


	qntnums[0].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			qntnums[i].classList.remove("active");
		}
		qntnums[0].classList.add("active");
		finalPrice.textContent = "$4.00";
		quantity = "1";
	});

	qntnums[1].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			qntnums[i].classList.remove("active");
		}
		qntnums[1].classList.add("active");
		finalPrice.textContent = "$12.00";
		quantity = "3";
	});

	qntnums[2].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			qntnums[i].classList.remove("active");
		}
		qntnums[2].classList.add("active");
		finalPrice.textContent = "$24.00";
		quantity = "6";
	});

	qntnums[3].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			qntnums[i].classList.remove("active");
		}
		qntnums[3].classList.add("active");
		finalPrice.textContent = "$48.00";
		quantity = "12";
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
		calorie.textContent = "180";
		sugar.textContent = "20g";
		fat.textContent = "1g";
		glazing = "No Glazing";
	});

	glzsels[1].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			glzsels[i].classList.remove("active");
		}
		glzsels[1].classList.add("active");
		calorie.textContent = "290";
		sugar.textContent = "29g";
		fat.textContent = "5g";
		glazing = "Sugar Milk";
	});

	glzsels[2].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			glzsels[i].classList.remove("active");
		}
		glzsels[2].classList.add("active");
		calorie.textContent = "330";
		sugar.textContent = "27g";
		fat.textContent = "5g";
		glazing = "Vanilla Milk";
	});

	glzsels[3].addEventListener("click", function() {
		for (let i = 0; i < 4; i++) {
			glzsels[i].classList.remove("active");
		}
		glzsels[3].classList.add("active");
		calorie.textContent = "420";
		sugar.textContent = "36g";
		fat.textContent = "7g";
		glazing = "Double Chocolate";
	});




	let addcart = document.getElementById("cartor");
	

	addcart.addEventListener("click", function(){
		localStorage.setItem("image", "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,q_auto,w_400/1669_mj02-cinnamonbun-article");
		localStorage.setItem("name", "Original");
		localStorage.setItem("quantity", quantity);
		localStorage.setItem("glazing", glazing);
		localStorage.setItem("price", finalPrice.innerText);
		hasdata = true;
		localStorage.setItem("hasdata",hasdata);
		console.log("saved");
	})


}

function loaddata(){
	Json.parse(localStorage.getItem("hasdata"));
	if (localStorage.hasdata){
		console.log("load");
		JSON.parse(localStorage.getItem("quantity"));
		console.log(localStorage.quantity);
		var table = document.getElementById("selecteditem");
		var row = table.insertRow(-1);
		var cell1 = row.inserCell(0);
		var cell2 = row.inserCell(1);
		var cell3 = row.inserCell(2);
		var cell4 = row.inserCell(3);
		var cell5 = row.inserCell(4);

		// cell1.innerHTML = 
		// cell2.innerHTML = 
		cell3.innerHTML = localStorage.getItem("price");
		cell4.innerHTML = "1";
		cell5.innerHTML = localStorage.getItem("price");
	}
}




productOption();
loaddata();

