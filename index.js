// # JavaScript-forLoops_cw_short
//
// ### Exercise 1:
// Use a for loop to print numbers -3 through 8.
//
// ### Exercise 2:
// Use a for loop to print from 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number.
//
//     ### Exercise 3:
// Prompt the user to enter a number. Prompt the user to enter another number.
//     Create a for loop that counts from the first number to the second number.

// Exercise 1

// for (var i=-3; i<9;i++) {
//     console.log(i)
// }

//Exercise 2
for (var x= 0; x<51;x++) {

   if (x===10) {
        console.log("TEN")
    }
   else
   {
       console.log(x)
   }
}
//Exercise 3

var j= prompt("ENTER A NUMBER");
var j2=prompt("Enter another number");

for (var y= j; y<j2; y++){

    console.log(y)
}
