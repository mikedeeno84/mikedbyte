/*Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function WordCount(str) { 
	var words=1;
	for (var counter=0; counter<str.length; counter++)
     	if (str[counter]===" ")
          words++
  return words; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
WordCount(readline());           
