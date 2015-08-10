/*Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function NumberAddition(str) { 
function aNum(str){
  var digits=["0","1","2","3","4","5","6","7","8","9","0"];
  if (digits.indexOf(str)>=0)
    return true
  else
    return false
    }
  var total=0;
  var currentNum="";
  for (var count=0;count<str.length;count++){
    currentNum="";
	if (aNum(str[count])===true){
        while (aNum(str[count])===true){
      		currentNum+=str[count];
      		count++;
    }
  	total+=parseInt(currentNum);
}
  }
  return total
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());           
