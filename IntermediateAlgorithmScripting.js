function sumAll(arr) {
  var total=0;
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  for(var i=min;min<=max;min++)
  {
    total = total + min;
  }
  return total;
}

sumAll([1, 4]);


/////

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  for(var i=0;i<arr1.length;i++)
  {
    if(arr2.indexOf(arr1[i]) === -1)
    {
      newArr.push(arr1[i]);
    }
  }

  for(var i=0;i<arr2.length;i++)
  {
    if(arr1.indexOf(arr2[i]) === -1)
    {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//// OR USE THIS 3 LINES OF CODE WRITTEN BELOW.

var z = arr1.filter(item => arr2.indexOf(item) === -1);
var x = arr2.filter(item => arr1.indexOf(item) === -1)
return [...x,...z];

/////////////


function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


///////////

function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  collection.forEach(function(e) {
    if(keys.every(function(key) {return e[key] === source[key];})) {
      arr.push(e);
    }
  });
  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/////////

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');


/////////////

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");


///////////

function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase())
  {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }  
    return str.replace(before, after);
  }

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/////////

function pairElement(str) {
   var pairs = {
    A: "T", T: "A", C: "G", G: "C"
  };
  var arr = str.split("");
  return arr.map(x => [x, pairs[x]]);
}

pairElement("GCG");

///////////


function fearNotLetter(str) {
 for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");


///////////////


function uniteUnique(arr) {
  var newArr = [];
  var arr = Array.from(arguments);
  for(var i=0;i<arr.length;i++)
  {
    for(var j=0;j<arr[i].length;j++)
    {
      if(newArr.indexOf(arr[i][j]) == -1)
      {
        newArr.push(arr[i][j])
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


////////

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana");


///////////////

function sumFibs(num) {
  var arr = [1,1];
  var i=0, total=0, next = 0;

  while(next <= num)
  {
    var next = arr[i] + arr[i+1];
    arr.push(next);
    i++;
  }
  arr.pop(arr.length-1);
  
  for(var z=0;z<arr.length;z++)
  {
    if(arr[z]%2!=0)
    {
      total = total + arr[z];
    }
  }
  return total;
}

sumFibs(10);


/////////////

function checkPrime(num)
{
  var flag=0;
  for(var i=2;i<=num/2;i++)
    {
      if(num%i==0)
      {
        flag=1;
        break;
      }
    }
    if(flag==0)
    {
      return true;
    }
  return false;
}

function sumPrimes(num) 
{
  var total = 0;
  for(var i=2;i<=num;i++)
  {
    if(checkPrime(i))
    {
      total = total + i;
    }
  }
return total;
}

sumPrimes(98);


///////////

function smallestCommons(arr) 
{
  function sortNumber(a, b)
  {
  return a - b;
  }
  arr.sort(sortNumber);

  var range = [arr[0]];
  var lcmArr = [];
  for(var i=arr[0];i<arr[1];i++)
  {
    range.push(i+1);
  }

  for(i=range[0];i<10000000;i++)
  {
    if(i%range[0]==0 && i%range[range.length-1]==0)
    {
      lcmArr.push(i);
    }
  }
  for(var i=0;i<lcmArr.length;i++)
  {
    var ctr=0;
    for(var j=0; j<range.length;j++)
    {
      if(lcmArr[i]%range[j]==0)
      {
        ctr++;

        if(ctr==range.length)
        {
          return(lcmArr[i]);
        }
      }
    }
  }
}
smallestCommons([1,5]);

//////////

function dropElements(arr, func) {
  while(true){
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });


///////////

function steamrollArray(arr)
{
  while (arr.some(element => Array.isArray(element)))
  {
    arr = arr.flat();
  }
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);


////////

function binaryAgent(str) 
{
  let array = str.split(' ');
  array = array.map(item=>{return String.fromCharCode(parseInt(item,2));});
  return array.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


///////////

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//////////

function addTogether(first, second) 
{
  if (typeof first !== "number")
  {
    return undefined;
  }
  const sum = second =>
  typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}

addTogether(2,3);

//////////

var Person = function(firstAndLast)
{
  let fullName;
  
  this.setFullName = (full) => {fullName = full.split(' ');};
  this.setFirstName = (first) => {fullName[0] = first;};
  this.setLastName = (last) => {fullName[1] = last;};
  this.setFullName(firstAndLast);
  
  this.getFullName = () => fullName.join(' ');
  this.getFirstName = () => fullName[0];
  this.getLastName = () => fullName[1];
};

var bob = new Person('Bob Ross');
bob.getFullName();

////////////

function orbitalPeriod(arr)
{
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(function(el)
  {
    return{name:el.name,
            orbitalPeriod:Math.round((2*Math.PI)*Math.sqrt(Math.pow(earthRadius+el.avgAlt,3)/GM))
    }
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

/////////////