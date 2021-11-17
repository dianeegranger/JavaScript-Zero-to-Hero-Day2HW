// Day 2 Assignment
// Diane Granger
// dianeegranger@gmail.com

// JavaScript Zero to Hero
// LetsUpgrade
// Instructor:  Abhishek Choudhary
x = 3;
y = 50;
z = 100;
max = 0;

if(x >= y && x >= z) {
    max = x;
}
else if (y >= x && y >= z) {
    max = y;
}
else {
    max = z;
}

// print the max number to the screen
console.log("The max number is " + max);