/*Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function AdditivePersistence(num, runs) { 
if (num<10)
  return 0;//if number is already single digit returns 0
if (runs==null) //initiates value for variable nums if there is none input.
  runs=0;
var numStr=num.toString();
var total=0;//variable to hold total
for (var counter=0; counter<numStr.length; counter++)
  total+=parseInt(numStr[counter]);//totals up all digits
if (total>9)
  return AdditivePersistence(total,runs+1); //recursively runs function until total becomes a single digit 
else
  return runs+1;//conditions have been met, increment and return total # of runs
}
         
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());           
