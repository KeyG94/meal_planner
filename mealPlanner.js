const menu = {
	_courses: {
		appetizers: [],
		mains: [],
		desserts: []
	},

	addDishToCourse(courseName, dishName, dishPrice) {
		const dish = {
			name: dishName,
			price: dishPrice
		};
		return this._courses[courseName].push(dish);
	},

	getRandomDishFromCourse(courseName) {
		const dishes = this._courses[courseName];
		const randomIndex = Math.floor(Math.random() * dishes.length);

		return dishes[randomIndex];
	},

	generateRandomMeal() {
		const appetizer = this.getRandomDishFromCourse('appetizers');
		const main = this.getRandomDishFromCourse('mains');
		const dessert = this.getRandomDishFromCourse('desserts');

		const totalPrice = appetizer.price + main.price + dessert.price;

		return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} and the total price is $${totalPrice}.`;
	},

	get appetizers() {
		return this._courses.appetizers;
	},

	get mains() {
		return this._courses.mains;
	},

	get desserts() {
		return this._courses.desserts;
	},
	set appetizers(appetizersIn) {
		this._courses.appetizers = appetizersIn;
	},
	set mains(mainsIn) {
		this._courses.mains = mainsIn;
	},
	set desserts(dessertsIn) {
		this._courses.desserts = dessertssIn;
	},

	get cousers() {
		return {
			appetizers: this.appetizers,
			mains: this.mains,
			desserts: this.desserts
		};
	}
};

menu.addDishToCourse('appetizers', 'French Toast', 3.85);
menu.addDishToCourse('appetizers', 'Popcorn', 2.89);
menu.addDishToCourse('appetizers', 'Norwegian Bread', 2.99);

menu.addDishToCourse('mains', 'Steak', 6.99);
menu.addDishToCourse('mains', 'Salamon', 5.89);
menu.addDishToCourse('mains', 'Spaghetti', 4.99);

menu.addDishToCourse('desserts', 'Crepes', 2.99);
menu.addDishToCourse('desserts', 'Strawberries', 2.89);
menu.addDishToCourse('desserts', 'Brownie', 2.99);

const meal = menu.generateRandomMeal();

console.log(meal);