/*Write a for loop that will iterate from 0 to 15. For each iteration, it will check 
if the current number is odd or even, and display a message to the screen.*/

for (a = 1; a < 16; a++) {
    if (a % 2 === 0) {
        console.log(a + " is even");
    } else {
        console.log(a + " is odd");
    }
}

//Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0

for (b = 1; b < 1000; b++) {
    if (b % 3 === 0 && b % 5 === 0) {
        sum = sum + b
    }
}
console.log(sum)

//Write a program to compute the sum and product of an array of integers.

var x = [2, 4, 9, 19];
var zbir = 0;
var produkt = 1;

for (i = 0; i < 4; i++) {
    zbir = zbir + x[i];
    produkt = produkt * x[i];
}

console.log(zbir);
console.log(produkt);


//Write a program which prints the elements of the following array as a single string.


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var sum = "";


for (var m = 0; m < 8; m++) {
    sum = sum + x[m] + ",";

}

console.log(sum);

/* Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];
*/

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]]


for (e = 0; e < 3; e++) {
    console.log(a[e]);
}


//Write a program that outputs the sum of squares of the first 20 numbers. 


var sum = 0
var product = 1

for (i = 1; i < 21; i++) {
    sum = sum + i
    product = product * i
}
console.log(sum)
console.log(product)

/*Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.

David
80
Marko
77
Dany
88
John
95
Thomas
68

The grades are computed as follows :

< 60%
F
< 70%
D
< 80%
C
< 90%
B
< 100%
A

*/

