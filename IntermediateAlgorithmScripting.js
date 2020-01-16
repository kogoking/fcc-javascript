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

