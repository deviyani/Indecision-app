class Person {
    constructor(name = 'Jane Doe', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi!${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }

}

class Traveler extends Person {
    constructor(name,age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }

    getGreeting() {
        let description = super.getGreeting();
        // console.log("in here")
        if (this.homelocation) {
            description += `Im visiting ${this.homelocation}`
        }
        return description
    }
}
const me = new Traveler('abc xyz', 23, 'virginia');
console.log(me.getGreeting());

const me2 = new Traveler()
console.log(me2.getGreeting());