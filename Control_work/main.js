//варіант 2
function triangle(base = 7, height = 3){
   return (base * height)/2;
}

console.log(triangle());
console.log(triangle(3,6));

function Boat(color, maxSpeed, max_tonnage, brand, country){
   this.color = color;
   this.maxSpeed = maxSpeed; 
   this.max_tonnagr = max_tonnage;
   this.brand = brand;
   this.country = country; 
}

Boat.prototype.AssignCaptain = function(name, years_of_exper, hasFamily){
   this.captain = {
      name: name;
      years_of_exper: years_of_exper;
      hasFamily: hasFamily;
};
};


const boat = new Boat("White", 42.5, 300, "Bbbb", "Ukraine");
boat.AssignCaptain("Ivan", 12.5, true);
console.log("Boat:", boat);

class SimpleCircle{
   constructor(majorRadius)
   this._majorRadius = majorRadius;

   get majorRadius{
      return this._majorRadius;
   }

set majorRadius(value){
   this._majorRadius = value;
}
}

class SimpleEllipse extends SimpleCircle{
   constructor(majorRadius, minorRadius);
      super(majorRadius); 
      this.minorRadius;

   static area(ellipse){
      return Math.PI * ellipse.majorRadius * ellipse.minorRadius;
   }
}

const circle = new SimpleCircle(5);
console.log("SimpleCircle": 
