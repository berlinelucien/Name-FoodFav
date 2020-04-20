//11111111111111
//basic dataTypes
const myNumber: number = 1;
const myWord: string = "tree";
console.log(myNumber);

//const vs let;
const constantNumber: number = 2;
//constantNumber = 3;
// won't work use let instead

//Enums
enum color {
  yellow,
  green,
  blue,
  black,
  pink,
  white
}
let textColor: color = color.green;
console.log(`textColor: ${textColor}`);
// show that textColor can't be assigned anything else

//Array
const scores = [1, 2, 3];
console.log(scores);
console.log(`scores[1]: ${scores[1]}`);


//222222222222222222
//Named function
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2,3))

//Anonymous function
let added = function(x: number, y: number) {return x + y};

//Create more basic arithmetic functions to practice


//3333333333333333
//Objects
const rectangle = { length: 4, width: 5 };
console.log(rectangle);
console.log(`rectangle.length ${rectangle.length}`);
rectangle.width = 7;
console.log(`rectangle.width: ${rectangle.width}`);

//Reference vs copy
const polygon = rectangle;
polygon.width = 1;
console.log(`polygon.width: ${polygon.width}`);
console.log(`rectangle.width: ${rectangle.width}`);

const copyRect = { ...rectangle };
//can also choose to use Object.assign
copyRect.width = 10;
console.log(`copyRect.width: ${copyRect.width}`);
console.log(`rectangle.width: ${rectangle.width}`);

//interface
//Show Purpose requiring type in function and attempting to send in wrong object

interface alien {
  name: string;
  color: color;
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
  color: color.green,
  height: 7,
  powerLevel: 3000
};

const saiyan = {
  color: color.yellow,
  powerLevel: 9001
};

const majin: alien = {
  name: "majin",
  color: color.pink,
  height: 6.5,
  powerLevel: 1000000
};

//show that this doesn't work
//const strongerAlien = getStrongerAlien(namekian, saiyan);
const strongestAlien = getStrongerAlien(namekian, majin);
console.log(`Strongest Alien: ${strongestAlien.name}`);

//4444444444444444444
//Class

//move all arithmetic functions here without passing in values
// add private variables
// explain constructor
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
