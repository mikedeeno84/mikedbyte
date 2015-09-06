/*Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/


function SimpleMode(arr) { 
var mode=arr[0];//sets an initial value for the mode
var modeCount=0;
var letterCount=0;
var current;
for (var count=0; count<arr.length;count++){//loops through each number to count the number of appearances for each
  	current=arr[count];//currents value is reset to arr[count]
	letterCount=0;
  	for (var inCount=0; inCount<arr.length;inCount++){//starts at beginning of the string and counts appearances of the number represented by "current"
      		if (arr[inCount]===current)
        		letterCount++;//match found, incremement total number of appearances
 	  	if (letterCount>modeCount){
        		modeCount=letterCount;//if lettCount is greater than modeCount set new value of modeCount to letterCount
        		mode=arr[inCount];//new mode is found mode is set to letter and arr[inCount]
      		}
    }
}
  if (modeCount===1)//if the number of appearances of the mode is 1, then there is no mode, return -1
    return -1
  return mode; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleMode(readline());           
