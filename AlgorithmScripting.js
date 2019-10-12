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

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num : num) + '...';
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

////

function findElement(arr, func)
{
  for(var i=0;i<arr.length;i++)
  {
    if(func(arr[i]) == true)
    return arr[i];
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/////


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(bool === true || bool === false)
  return true;
  else 
  return false
}

booWho(null);

/////


function titleCase(str) {
  str = str.toLowerCase();
  var array = str.split(" ");
  for(var i=0;i<array.length;i++)
  {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  str = array.join(" ");
  return str;
  }

titleCase("I'm a little tea pot");

/////

function frankenSplice(arr1, arr2, n) 
{
  let newArr = arr2.slice();
  for(var i=0;i<arr1.length;i++)
  {
    newArr.splice(n,0,arr1[i]);
    n++;
  }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

////

function bouncer(arr) {
  var newArr = [];
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i])
    {
      newArr.push(arr[i]);
    }
  }
  return newArr;

  // OR USE: return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

//////


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var newArr = arr.sort(function(a, b){return a-b});

  for(var i=0;i<newArr.length;i++)
  {
    if(newArr[i] >= num)
    return i;
  }
  return newArr.length
}

getIndexToIns([40, 60], 50);

//////

function mutation(arr) {
  var target = arr[0].toLowerCase();
  var test = arr[1].toLowerCase();
  for (var i=0;i<test.length;i++)
  {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);

/////

function chunkArrayInGroups(arr, size) 
{
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) 
  {
    arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);