/* Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function SwapCase(str) { 
var newStr="";
var count=0;
while (count<str.length){
  if(str.charCodeAt(count)>=65 && str.charCodeAt(count)<=90)
    newStr+=str[count].toLowerCase();
  else
    newStr+=str[count].toUpperCase();
      count++;
  
}
return newStr;        
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           
