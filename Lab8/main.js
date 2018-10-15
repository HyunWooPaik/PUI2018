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


$(document).ready(()=>{
	console.log("ready")

	var animal = new Animal(picts[3], names[0], ages[2])
	console.log(animal)
})