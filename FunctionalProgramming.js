
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = getTea(40);

// Add your code above this line

console.log(tea4TeamFCC);

/////  ---- ////////////////////

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = getTea(prepareGreenTea,27); // :(
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);; // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


//// ------------------ /////////


// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  
  return fixedValue+1;
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

///---////

// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (a) {
  
  return a+1;
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4

///---/////

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (arr, bookName) {
  
  let newArr = [...arr];  // Copy the bookList array to a new array.
  newArr.push(bookName);  // Add bookName parameter to the end of the new array.
  return newArr;
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (arr, bookName) {
  let newArr = [...arr];
    if (newArr.indexOf(bookName) >= 0) {
    
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

//////---//////


  rating = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) );



///////---- //////

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
    this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

///// ---- ///////

var filteredList = watchList.map(function(e) {
  return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);

///----////

