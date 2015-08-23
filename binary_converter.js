/*Have the function BinaryConverter(str) return the decimal form of the binary value. For example: if 101 is passed return 5, or if 1000 is passed return 8. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function BinaryConverter(str) { 
num=parseInt(str)
ans=0;
for(var count=0;count<str.length; count++)
  ans=ans*2+parseInt(str[count]);
  return ans
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BinaryConverter(readline());           
