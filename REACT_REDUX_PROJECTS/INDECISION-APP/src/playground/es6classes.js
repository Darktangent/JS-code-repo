class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.age = age
        this.name = name
    }

    getGreeting() {
        return `Hi I am ${this.name}! and my age is ${this.age}`
    }

    getDescription() {
        return `${this.name}!is ${this.age} year(s) old`
    }


}
class Student extends Person {

    constructor(name, age, major) {
        super(name, age)
        this.major = major

    }
    hasmajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        if (this.hasmajor()) {
            description = description + ` Their major is ${this.major}`
        }

        return description
    }

}
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting = greeting + `I am visiting from  ${this.homeLocation}`
        }
        return greeting
    }
}
const me = new Traveler('Andrew', 90, 'TX')
// console.log(me.hasmajor())
console.log(me.getGreeting())
console.log(me.getDescription())