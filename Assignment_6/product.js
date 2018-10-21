
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
	let productname = document.getElementById("pname");
	let pname = productname.innerText;
	let imgsrc = document.getElementById("imgsrc").src;

	
	var items = JSON.parse(localStorage.getItem("data"));
	if (items == null){
		var items = [];
		console.log(items);
	}

	addcart.addEventListener("click", function(){
		console.log(items.length);
		if (items.length > 0) {
			// var items = JSON.parse(localStorage.getItem("data"));

			newItem = { itemName: pname + " / " + quantity + " / " + glazing,
						image: imgsrc,
						price: finalPrice.innerText };
			items.push(newItem);

		}
		else {
			newItem = { itemName: pname + " / " + quantity + " / " + glazing,
						image: imgsrc,
						price: finalPrice.innerText };
			items.push(newItem);

		}

		localStorage.setItem("data", JSON.stringify(items));



		console.log("saved");

	});


}

function loaddata(){
	var cartItems = JSON.parse(localStorage.getItem("data"));


	for (var i = 0; i < cartItems.length; i++) {
		var table = document.getElementById("selecteditem");
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);		

		var myImage = new Image(150,150);
		myImage.src = cartItems[i].image;

		var btn = document.createElement("BUTTON");
	    var t = document.createTextNode("Remove");
	    btn.appendChild(t);
	    var content = cartItems[i].itemName;

	    cell1.appendChild(myImage); 
		cell2.innerHTML = content;
		cell3.appendChild(btn);
		cell4.innerHTML = cartItems[i].price;
		cell5.innerHTML = "1";
		cell6.innerHTML = cartItems[i].price;;

		btn.addEventListener("click", function(){
			var i = this.parentNode.parentNode.rowIndex;
			document.getElementById("selecteditem").deleteRow(i);

			cartItems.splice(i-1,1);
			console.log(cartItems);
			localStorage.setItem("data", JSON.stringify(cartItems));

		});


	}


	
}


