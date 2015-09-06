/*Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function PrimeTime(num) { 
if (num===1)
  return "false";
if (num===2)
  return "true";
if (num===3)
  return "true";
if (num%3===0 || num%2===0)
  return "false";
for (var i=5; i*i<=num; i+=2){//loops through all odd numbers but to the square root of the number to check for divisiblity
  if(num%i===0)
    return "false";
	}
return "true";//no divisibilty found, return "true"
  
         
}
