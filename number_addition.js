/*Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function NumberAddition(str) { 
	function aNum(str){//determines whether the input is a number
	  var digits=["0","1","2","3","4","5","6","7","8","9","0"];
	  if (digits.indexOf(str)>=0)
	    return true
	  else
	    return false
	    }
  var total=0;
  var currentNum="";
  for (var count=0;count<str.length;count++){ //loop through string to find all numbers
    currentNum="";//current num is set to an empty string
	if (aNum(str[count])===true){//a number is found
        	while (aNum(str[count])===true){//loop will stop when the value of aNum is false
      		currentNum+=str[count];//since we have a number that number is added to the string current number
      		count++;//the loop counter is incremented to check the next item in the string without exiting the while loop
    		}//the next item in the string is not a number and the loop terminates
  	total+=parseInt(currentNum);//parses the last integer pulled from the string and adds it to the total
}
  }
  return total
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());           
