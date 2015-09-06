/* Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function RunLength(str) { 
var newStr="";
var current=str[0];//initial value for the current letter
var ltrCount=0;
for (var count=0;count<=str.length;count++){
  if (current===str[count])//tests if the current item in loop is equal to previous letter checked
    ltrCount++;//increases the recorded # of appearances for that letter
  else{
    ltrCount+="";//converts the total appearances to a string
    newStr+=ltrCount+current;//adds the total appearances then current letter to the output string
    current=str[count];//sets new value for current
    ltrCount=1;//sets new numbers of apperances at 1
  }
}
  return newStr;//returned the compressed string
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());           
