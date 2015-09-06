/*Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function PowersofTwo(num) { 
	if(num/2===1)
		return "true"
	else 
		num=num/2
    	if (num<2)
		return "false"
	num=PowersofTwo(num)//functions recurs, dividing itself by 2 until it gets a results equal to 1 (return "true") or less than 2 (return "false")
	return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());           
