'use strict';

// 1. Class declarations
class Person{
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const coder = new Person('youngha',20);
console.log(coder.name);
console.log(coder.age);
coder.speak();

// 2. Getter and Setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // if(value < 0 ){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'jobs', -1);
console.log(user1.age);


//Inheritance
//a way for one class to extend another class

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea(){
        return this.width * this.height;
    }
    draw(){
        console.log(`color is ${this.color} !`);
    }
}

class Rectangle extends Shape{};
class Triangle extends Shape{

    getArea(){
        return this.width * this.height/2;
    }
    draw(){
        console.log(`▲`);
        console.log(super.draw());
    }
};

const rectangle = new Rectangle(20,20,'blue');
const triangle = new Triangle(20,20,'red');

console.log(triangle.getArea());
console.log(rectangle.getArea());

rectangle.draw();
triangle.draw();









