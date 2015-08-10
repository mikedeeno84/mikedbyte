/*Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/


function SimpleMode(arr) { 
var mode=arr[0];
var modeCount=0;
var letterCount=0;
var current;
for (var count=0; count<arr.length;count++){
  	current=arr[count];
	letterCount=0;
  	for (var inCount=0; inCount<arr.length;inCount++){
      if (arr[inCount]===current)
        letterCount++;
 	  if (letterCount>modeCount){
        modeCount=letterCount;
        mode=arr[inCount];
      }
    }
}
  if (modeCount===1)
    return -1
  return mode; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleMode(readline());           
