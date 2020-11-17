function wakeDog(dogName, dogBreed) {
	const saying = `Wake ${dogName} the ${dogBreed}`;
	console.log(saying);
	return saying;
}

function leashDog(dogName, dogBreed) {
	const saying = `Leash ${dogName} the ${dogBreed}`;
	console.log(saying);
	return saying;
}

function walkToPark(dogName, dogBreed) {
	const saying = `Walk to the park with ${dogName} the ${dogBreed}`;
	console.log(saying);
	return saying;
}

function throwFrisbee(dogName, dogBreed) {
	const saying = `Throw the frisbee for ${dogName} the ${dogBreed}`;
	console.log(saying);
	return saying;
}

function walkHome(dogName, dogBreed) {
	const saying = `Walk home with ${dogName} the ${dogBreed}`;
	console.log(saying);
	return saying;
}

function unleashDog(dogName, dogBreed) {
	const saying = `Unleash ${dogName} the ${dogBreed}`;
	console.log(saying);
	return saying;
}

let routine = [
	wakeDog,
	leashDog,
	walkToPark,
	throwFrisbee,
	walkHome,
	unleashDog
]

function exerciseDog(name, breed) {
	const array = []
	for (let i = 0; i < routine.length; i++) {
		array.push(routine[i](name, breed));
	}
	return array;
}