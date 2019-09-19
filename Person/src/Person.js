class Person {
    constructor(name, surname, age, gender, interests) {
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.gender = gender,
    this.interests = interests
    }
greeting() {
   return `Hello I am ${this.name} ${this.surname} I am ${this.age} years old and my interests are ${this.interests[0]} and ${this.interests[1]}`
    }
}

