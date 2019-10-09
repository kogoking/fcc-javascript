function reverseString(str) {
  var a = str.split('')
  var b = a.reverse()
  var c = b.join('')
  return c;
}

reverseString("hello");
 
////

function factorialize(num) {
  var i=0;
  var fact=1;
  for(i=1;i<=num;i++)
  {
    fact = fact * i;
  }
  return fact;
}

factorialize(5);

////

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;
  for(var i=0;i<words.length;i++)
  {
    if(words[i].length > maxLength)
    {
      maxLength = words[i].length
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/////

function largestOfFour(arr) {
  // You can do this!
  var maxArray = [];
  for(var i=0;i<arr.length;i++)
  {
    var max=arr[i][0];
    for(var j=1;j<arr[i].length;j++)
    {
      if(arr[i][j] > max)
      {
        max = arr[i][j];
      }
    }
    maxArray[i] = max;
  }

  return maxArray;
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//////


function confirmEnding(str, target) {
  var c = str.slice(str.length - target.length);
  
  if(c===target) return true
  else return false
}

confirmEnding("Bastian", "n");


/////


function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = '';
  while(num > 0)
  {
    newStr = newStr + str;
    num--;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

//////



