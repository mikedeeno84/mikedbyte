/*Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function TimeConvert(num) { 
	var hours=parseInt((num)/60);
  	var minutes=num-(hours*60)
  return hours+ ":" + minutes; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());           
