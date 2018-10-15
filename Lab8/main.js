var picts = ["dog1.jpg", "dog2.jpg", "dog3.jpg", "dog4.jpg", "dog5.jpg"]
var names = ["T", "B", "Z", "R", "7"]
var ages = ["2", "100", "77", "3", "6"]

class Animal {
	constructor(img, name, age){
		this.pic = img
		this.name = name
		this.age = age
	}
}

function random(length) {
	return Math.floor(Math.random() * length);
}



$(document).ready(()=>{
	console.log("ready");

	var animal = new Animal(picts[random(5)], names[random(5)], ages[random(5)]);
	console.log(animal);
	$("#animal-img").attr("src", animal.pic);
	$("#animal-name").html(animal.name);
	$("#animal-age").html(animal.age + " years old");

})

