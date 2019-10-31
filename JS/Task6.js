/*Write a function to count vowels in a provided string. 
Vowels are a, e, i, o, and u as well as A, E, I, O, and U.*/
"use strict";

function isVowels(char) {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  for (var index = 0; index < vowels.length; index++) {
    if (char === vowels[index]) {
      return true;
    }
  }

  return false;
}

function vowelsres(array) {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var res = 0;

  for (var index = 0; index < array.length; index++) {
    for (var j = 0; j < vowels.length; j++) {
      if (array[index] === vowels[j]) {
        res = res + 1;
      }
    }
  }
  return res;
}

console.log(vowelsres("google"));
/*Write a function that combines two arrays by alternatingly taking elements. 
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]*/

function combinearray(stringarray, numberarray) {
  var res = [];
  for (var i = 0; i < stringarray.length; i++) {
    res[res.length] = stringarray[i];
    res[res.length] = numberarray[i];
  }
  return res;
}
console.log(combinearray(["a", "b", "c"], [1, 2, 3, 5]));

/*
Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/
