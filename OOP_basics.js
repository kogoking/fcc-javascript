let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

//////

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line

let hound = new Dog();


//////


function Dog(name, color) {
  this.name=name;
  this.color=color;
  this.numLegs=4;
}

let terrier = new Dog("Terrero", "white");

/////

/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line

let myHouse = new House(4);
myHouse instanceof House;


///////

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line

for (let property in canary)
{
  if(canary.hasOwnProperty(property))
  {
    ownProps.push(property);
  }
}


////////

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs=4;

// Add your code above this line
let beagle = new Dog("Snoopy");


////////

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

///////


function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}


///////

function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat()
  {
    console.log("yum yum")
  },
  describe()
  {
    console.log("I am brown")
  }
};

/////

function Dog(name) {
  this.name = name; 
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};


//////

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line

Dog.prototype.isPrototypeOf(beagle);


////////

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


////////


function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat, 
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

///////

