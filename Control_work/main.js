//ВАРІАНТ 2
//завдання 4(площі трикутника)
function TriangleArea(base = 7, height = 3) {
   const area = (base * height) / 2;
   console.log(area);
   return area;
}

TriangleArea();
TriangleArea(3, 6);

//завдання 5
function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
   this.color = color;
   this.maxSpeed = maxSpeed;
   this.maxTonnage = maxTonnage;
   this.brand = brand;
   this.countryOfRegistration = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function (name, yearsOfExperience, hasFamily) {
   this.captain = {
      name: name,
      yearsOfExperience: yearsOfExperience,
      hasFamily: hasFamily
   };
};

const boat = new Boat("White", 42.5, 300, "Bbbb", "Ukraine");
boat.AssignCaptain("Ivan Petrenko", 12, true);
console.log("Boat:", boat);

//завдання 6(коло)
class SimpleCircle {
   constructor(majorRadius) {
      this._majorRadius = majorRadius;
   }

   get majorRadius() {
      return this._majorRadius;
   }

   set majorRadius(value) {
      this._majorRadius = value;
   }
}

class SimpleEllipse extends SimpleCircle {
   constructor(majorRadius, minorRadius) {
      super(majorRadius);
      this.minorRadius = minorRadius;
   }

   static area(ellipse) {
      return Math.PI * ellipse.majorRadius * ellipse.minorRadius;
   }
}

const circle = new SimpleCircle(5);
console.log("SimpleCircle:", circle);
circle.majorRadius = 8;
console.log("SimpleCircle після сеттера:", circle);

const ellipse = new SimpleEllipse(6, 4);
console.log("SimpleEllipse:", ellipse);
console.log("Площа еліпса:", SimpleEllipse.area(ellipse));

//завдання 7
function SubGenerator(n) {
   return function (x) {
      return x - n;
   };
}

const sub5 = SubGenerator(5);
const sub2_5 = SubGenerator(2.5);

console.log("sub5(20) =", sub5(20));
console.log("sub2_5(10) =", sub2_5(10));
