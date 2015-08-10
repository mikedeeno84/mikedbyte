/*Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function AdditivePersistence(num, runs) { 
if (num<10)
  return 0;
if (runs==null)
  runs=0;
var numStr=num.toString();
var total=0;
for (var counter=0; counter<numStr.length; counter++)
  total+=parseInt(numStr[counter]);
if (total>9)
  return AdditivePersistence(total,runs+1);
else
  return runs+1;
}
         
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());           
