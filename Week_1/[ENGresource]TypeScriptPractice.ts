// 11111111111111
// basic dataTypes
console.log("basic types and constants");
// constants
const myNumber: number = 1;
const myWord: string = "tree";
console.log(myNumber);
console.log(myWord);

// const vs let
const constantNumber: number = 2;
console.log(constantNumber);
// To-do: constantNumber = 3;
// const doesn't work use let instead if you want to reassign a value

// Enums
console.log("enums");
enum newcolor {
    yellow,
    green,
    blue,
    black,
    pink,
    white
}
let textColor: newcolor = newcolor.green;
console.log(`textColor: ${textColor}`);
// To-do: show that textColor can't be assigned anything else

// Arrays
console.log("arrays");
const scores = [1, 2, 3];
console.log(scores);
console.log(`scores[1]: ${scores[1]}`);
// To-do: do a lot to print all the elements of scores


// 222222222222222222
console.log("functions");
// Named function
function addf(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 3));

// Anonymous function
let addedf = function (x: number, y: number) { return x + y };

// To-do: Create more basic anonymous arithmetic functions to practice

// To-do: write addfa, a version of add and added that uses fat arrow 
// Compute 6+12 with addfa


// 3333333333333333
// Objects
console.log("objects");
const rectangle = { length: 4, width: 5 };
console.log(rectangle);
console.log(`rectangle.length ${rectangle.length}`);
rectangle.width = 7;
console.log(`rectangle.width: ${rectangle.width}`);

// Reference vs copy
console.log("Reference");
const polygon = rectangle;
polygon.width = 1;
console.log(`polygon.width: ${polygon.width}`);
console.log(`rectangle.width: ${rectangle.width}`);
// Did the value of rectangle.width change?

console.log("Copy");
const copyRect = { ...rectangle };
// can also choose to use Object.assign
copyRect.width = 10;
console.log(`copyRect.width: ${copyRect.width}`);
console.log(`rectangle.width: ${rectangle.width}`);

// Interfaces
console.log("interfaces");
// Show Purpose requiring type in function and attempting to send in wrong object

interface alien {
    name: string;
    color: newcolor;
    height: number;
    powerLevel: number;
}

function getStrongerAlien(alien1: alien, alien2: alien) {
    if (alien1.powerLevel > alien2.powerLevel) {
        return alien1;
    } else {
        return alien2;
    }
}

const namekian = {
    name: "namekian",
    color: newcolor.green,
    height: 7,
    powerLevel: 3000
};

const saiyan = {
    color: newcolor.yellow,
    powerLevel: 9001
};

const majin: alien = {
    name: "majin",
    color: newcolor.pink,
    height: 6.5,
    powerLevel: 1000000
};

// To-do: show and explain that this doesn't work
// const strongerAlien = getStrongerAlien(namekian, saiyan);
const strongestAlien = getStrongerAlien(namekian, majin);
console.log(`Strongest Alien: ${strongestAlien.name}`);

// another example of interface
// passing the interface as a parameter of a function
interface SquareConfig {
    color?: string; // ? means optional fields
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

// To-do: What is the result of the 2 createSquare below and why?
let mySquare = createSquare({ width: 10 });
console.log("mySquare " + mySquare.color + " " + mySquare.area);
let mySquare1 = createSquare({ color: "black" });
console.log("mySquare " + mySquare1.color + " " + mySquare1.area);


// 4444444444444444444
// Class

console.log("classes");

// To-do: add the subtract function (without parameters like add)
// To-do: explain constructor
// To-do: see how inheritance is implemented

class Calculator {
    a: number;
    b: number;
    constructor(_firstNumber: number, secondNumber: number) {
        this.a = _firstNumber;
        this.b = secondNumber;
    }
    add() {
        return this.a + this.b;
    }
}

const myCal = new Calculator(2, 5);
myCal.a = 3;
console.log(`myCal.add: ${myCal.add()}`);

// class inheritance
class comparisonCalculator extends Calculator {
    findGreaterValue() {
        if (this.a > this.b) {
            return this.a;
        } else {
            return this.b;
        }
    }
}

const compCalc = new comparisonCalculator(6, 7);
console.log(`compCalc.add: ${compCalc.add()}`);
console.log(`compCalc.findGreaterValue: ${compCalc.findGreaterValue()}`);


// 55555555555555555
// Generics

// generic class

// class as custom array of elements of type T 
class myCustomArray<T> {
    items: T[];

    constructor() {
        this.items = []
    }

    getItems(): T[] {
        return this.items;
    }

    addItem(item: T): void {
        this.items.push(item);
    }
}

// create an array of numbers, add elements to the array, and print the array
let narray = new myCustomArray<number>();

narray.addItem(10);
narray.addItem(18);
narray.addItem(-5);

// To-do: Add a function reverse that reverse the elements in items
// To-do: Test your code
