const person = {
    firstName: "Jonathan",
    lastName: 'Ho',
    age: 24
}

// console.log(person.firstName)
// console.log(person['lastName'])

const meal = {
    appetizer: 'dumplings',
    entree: 'ramen',
    dessert: 'cake',
    drink: 'ginger ale'
}

//Making a new variable called dessert, whose value comes from the dessert property on the meal object.
// const {dessert} = meal

// console.log(dessert)

// Making multiple new variables on one line
// const {appetizer, entree} = meal

// console.log(dessert, appetizer, entree)

//Aliasing/destructuring
// const {drink: myDrink} = meal

//destructing multiple variables
const {appetizer: myApp, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(myApp, myEntree, myDessert, myDrink)

//How to acess value in for loop
for (const prop in person) {
    console.log(person[prop])
}

//This adds properties to person
person.job = 'Teacher';
// console.log(person)

person['pet'] = 'Chunk'
// console.log(person)

//Deletes the property of having a pet
delete person.pet
// console.log(person)

class Dog {
    constructor (dogName, dogBreed, dogAge) {
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;
        this.toys = []
    }
    greeting() {
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}`)
    }

    addToy(toy) {
        this.toys.push(toy)
    }
}


const lassie = new Dog('lassie', 'Collie', 10)
const chunk = new Dog ('Chunk', 'mutt', 5)
// lassie.greeting()
// chunk.greeting()
// lassie.addToy('rubber ball')
// console.log(lassie)
// console.log(lassie) 

class Puppy extends Dog {
    constructor (dogName, dogBreed, dogAge, puppyTrainingLevel) {
        super (dogName, dogBreed, dogAge)

        this.trainingLevel = puppyTrainingLevel
    }

    levelUp(num) {
        this.trainingLevel += num
    }
    greeting() {
        super.greeting()
        console.log("And I am a puppy!")
    }
}

const leo = new Puppy("Leo", 'Golden Doodle', 1, 0)

// leo.levelUp(2)
// console.log(leo)
// leo.greeting()
