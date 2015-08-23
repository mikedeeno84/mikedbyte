/*Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, 
and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return 
the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 
the output should be "12,345". 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function DivisionStringified(num1,num2) { 
var results=num1/num2; // rounds the result up or down
if (results-parseInt(results)>=.5)
  	results=parseInt(results)+1;
var resString=parseInt(results)+"";// determines whether commas are necessary
  if (resString.length<=3)
  return resString;
var commaString="";
var mod=resString.length%3

if (resString.length>3){ //loops through the result and adds in commas.  placement is based on the modulo of the string length (total digits) and 3
	for (var count=0; count<resString.length; count++){
      commaString+=resString[count];
      if (mod===0)
        mod+=3;
        if (count===mod-1 && count<resString.length-1){
          commaString+=",";
      		mod+=3;}
    }
  return commaString; 
}

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());           
