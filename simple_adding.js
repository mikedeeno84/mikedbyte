/*Have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function SimpleAdding(num) { 
	var total=0;
  	start=1;
  	while (start<=num){
      total+=start;
      start++;
    }
  return total; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());   
