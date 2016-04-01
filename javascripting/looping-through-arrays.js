var pets = ['cat', 'dog', 'rat'];
var newPets = [];

pets.forEach(function (pet) {
	newPets.push(pet + "s");
});

console.log(newPets);
