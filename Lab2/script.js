//завдання 1.2.3
const car1 = new Object();
car1.color = 'red';
car1.maxSpeed = 300;
car1.driver = {
    name: "Yuliana Markovetska",
    category: "C",
    personal_limitations: "No drivings at night"
}

car1.tuning = true;
car1.number_of_accidents = 0; 

//завдання 1.2.4
const car2 = {
    color: 'blue',
    maxSpeed: 234,
    driver:{
    name: "Yuliana Markovetska",
    category: "B",
    personal_limitations: null
},
tuning: false,
number_of_accidents: 2
};



//завдання 1.2.5
car1.drive = function(){
        console.log("I am not driving at night");
}

//завдання 1.2.6
car2.drive = function(){
    console.log("I can drive anytime");
}

//завдання 1.2.7
function Truck(color,weight, avgSpeed,brand,model){
    this.color = color;
    this.weight = weight;
    this.brand = brand;
    this.model =model;
}

//завдання 1.2.8
Truck.prototype.AssignDriver = function(name, nightDriving, experience){
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience   
    };
}

//завдання 1.2.9
Truck.prototype.trip = function() {
    if (this.driver == undefined) {
        console.log("No driver assigned");
    } else {
        if (this.driver.nightDriving == true) {
            console.log(`Driver ${this.driver.name} drives at night and has ${this.driver.experience} years of experience`);
        } else {
            console.log(`Driver ${this.driver.name} does not drive at night and has ${this.driver.experience} years of experience`);
        }
    }
};

//завдання 1.2.10
let truck1 = new Truck("green", 500, 80, "Toyota", "toyota");
let truck2 = new Truck("red", 1000, 90, "Volvo", "FH");

truck1.AssignDriver("Yuliana Markovetska", true, 3);
truck2.AssignDriver("Yuliana Markovetska", false, 5);

truck1.trip();
truck2.trip();

//завдання 1.2.12
class Square{
    //завдання 1.2.13
    constructor(a){
        this.a = a;
    }
    //завдання 1.2.14
    static help(){
         console.log("Square is a geometric figure with four equal sides and four right angles.");
        console.log("The side length is a.");
        console.log("All angles of a square are 90 degrees.");
    }
    //завдання 1.2.15
    length(){
        console.log(4 * this.a);
    }
    square(){
        console.log(this.a ** 2);
    }
    info() {
    console.log("Side 1:", this.a);
    console.log("Side 2:", this.a);
    console.log("Side 3:", this.a);
    console.log("Side 4:", this.a);

    console.log("Angle 1: 90°");
    console.log("Angle 2: 90°");
    console.log("Angle 3: 90°");
    console.log("Angle 4: 90°");

    console.log("Sum of sides:", 4 * this.a);
    console.log("Area:", this.a * this.a);
}
}

//завдання 1.2.15
class Rectangle extends Square{
    //завдання 1.2.16
    constructor(a, b){
        super(a);
        this.b = b;
    }
    //завдання 1.2.17
     static help() {
        console.log("Rectangle is a quadrilateral with four right angles.");
    }

    length() {
        console.log(2 * (this.a + this.b));
    }

    square() {
        console.log(this.a * this.b);
    }

    info() {
        console.log("Side 1:", this.a);
        console.log("Side 2:", this.b);
        console.log("Side 3:", this.a);
        console.log("Side 4:", this.b);

        console.log("Angle 1: 90°");
        console.log("Angle 2: 90°");
        console.log("Angle 3: 90°");
        console.log("Angle 4: 90°");

        console.log("Sum of sides:", 2 * (this.a + this.b));
        console.log("Area:", this.a * this.b);
    }

    //завдання 1.2.21
    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;
    }
}

//завдання 1.2.18
class Rhombus extends Square{
    constructor(a, alpha, beta){
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }
    //завдання 1.2.19
    static help() {
        console.log("Rhombus is a quadrilateral with four equal sides.");
    }

    length() {
        console.log(4 * this.a);
    }

    square() {
        console.log(this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Side 1:", this.a);
        console.log("Side 2:", this.a);
        console.log("Side 3:", this.a);
        console.log("Side 4:", this.a);

        console.log("Angle 1:", this.alpha);
        console.log("Angle 2:", this.beta);
        console.log("Angle 3:", this.alpha);
        console.log("Angle 4:", this.beta);

        console.log("Sum of sides:", 4 * this.a);
        console.log("Area:", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }
}

//завдання 1.2.20
class Parallelogram extends Rhombus{
    constructor(a, b, alpha, beta){
        super(a, alpha, beta);
        this.b = b;
    }
    //завдання 1.2.21
    static help() {
        console.log("Parallelogram is a quadrilateral with opposite sides parallel and equal.");
    }

    length() {
        console.log(2 * (this.a + this.b));
    }

    square() {
        console.log(
            this.a * this.b * Math.sin(this.beta * Math.PI / 180)
        );
    }

    info() {
        console.log("Side 1:", this.a);
        console.log("Side 2:", this.b);
        console.log("Side 3:", this.a);
        console.log("Side 4:", this.b);

        console.log("Angle 1:", this.alpha);
        console.log("Angle 2:", this.beta);
        console.log("Angle 3:", this.alpha);
        console.log("Angle 4:", this.beta);

        console.log("Sum of sides:", 2 * (this.a + this.b));

        console.log(
            "Area:",
            this.a * this.b * Math.sin(this.beta * Math.PI / 180)
        );
    }
}

//завдання 1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

//завдання 1.2.24
let square = new Square(5);
let rectangle = new Rectangle(5, 10);
let rhombus = new Rhombus(5, 120, 60);
let parallelogram = new Parallelogram(5, 8, 120, 60);

//завдання 1.2.25
function Triangular(a=3, b=4, c=5){
     return {
        a: a,
        b: b,
        c: c
    };
}

//завдання 1.2.26
let triangle1 = Triangular();
let triangle2 = Triangular(6, 8, 10);
let triangle3 = Triangular(5, 5, 6);

console.log(triangle1);
console.log(triangle2);
console.log(triangle3);

//завдання 1.2.27
function PiMultiplier(number){
    return function() {
        return Math.PI * number;
    };
}

//завдання 1.2.28
let multiplyBy2 = PiMultiplier(2);
let multiplyByThreeHalves = PiMultiplier(3 / 2);
let divideBy2 = PiMultiplier(1 / 2);

console.log(multiplyBy2());
console.log(multiplyByThreeHalves());
console.log(divideBy2());

//завдання 1.2.29
function Painter(color) {
    return function(object) {
        if (object.type) {
            console.log(color, object.type);
        } else {
            console.log("No 'type' property occurred!");
        }
    }
}

//завдання 1.2.30
let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

let object1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

let object2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400
};

let object3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

//завдання 1.2.31
PaintBlue(object1);
PaintBlue(object2);
PaintBlue(object3);

PaintRed(object1);
PaintRed(object2);
PaintRed(object3);

PaintYellow(object1);
PaintYellow(object2);
PaintYellow(object3);
