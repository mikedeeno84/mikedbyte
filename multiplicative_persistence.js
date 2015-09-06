/*Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function MultiplicativePersistence(num) { 
if (num<10)
  return 0//returns 0 if there the number is already a single digit number
var runs=0;//sets an inital value for the total numer of runs 
var total=1;//temporarily holds the result of multiplying the digits
while (num>=10){//the loop continues to multily digits until num becomes a single digit
	numStr=num.toString();	  //converts the number to a string to modify its digits
	for (var counter=0; counter<numStr.length; counter++)//loops through the string of digits
  		total*=parseInt(numStr[counter]);
  		num=total;//sets num equal to the product of the digits
  		total=1;//resets total to 1
		runs++;//increase by 1 the total number of runs
}
  return runs
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());           
