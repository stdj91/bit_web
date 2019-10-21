for (i = 0; i <= 100; i++) {
  if (i % 4 === 0) {
    console.log("*");
  } else {
    console.log(i);
  }
}

for (i = 0; i <= 100; i++) {
  if (i % 4 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

e = 3;
a = [5, -4.2, 3, 7];
c = [5, -4.2, 18, 7];

for (i = 0; i < a.length; i++) {
  if (a[i] === e) {
    console.log("yes");
  } else {
    continue;
  }
}

/*
number % 4 !==0;
*/

/* number >=1; number-- number = 100; */

var start = 34;
var end = 100;
var x = 4;

for (var number = end; number >= start; number--) {
  if (number % x === 0);
  result = number;
  break;
}

console.log(result);
/*
var start = 1;
var end = 100;

for (var i = 100; i >= 1; i--) {
  if (i % 4 === 0);
  console.log(i);
  break;
}



*/

var a = [-3, 11, 5, 3.4, -8];
var sum = 0;
var b = [];

for (i = 0; i < a.length; i++) {
  if (a[i] > 0) {
    sum = a[i] * 2;
    b[b.length] = sum;
  }
  if (a[i] < 0) {
    sum = a[i];
    b[b.length] = sum;
  }
}

console.log(b);

a = [4, 2, 2, -1, 6];

for (i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    var index = i;
    console.log(a[i], index);
  }
}

a = [4, 2, 2, -1, -1, 6,1,-3],;

var min = a[0];
var result = a[0];

for (i = 1; i < a.length; i++) {
  if (a[i] < min) {
    result = min;
    min = a[i];
  } else if (a[i] < result && a[i] !== min) {
    result = a[i];
  }
}

console.log(result);
