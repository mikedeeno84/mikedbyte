/*Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function MeanMode(arr) { 
var mode;
var totalApps=1;//sets a benchmark to define mode.  a number must have at least two appearances to be a mode
var total=0;
for (var counter=0;counter<arr.length; counter++){//loops through array
  var apps=0;//resets total # of appearances of a number to zero at each iteration of the loop
  total+=arr[counter]; //tracks the array total to be used to calculate mean
  for (var inCounter=0; inCounter<arr.length; inCounter++){ //secondary loop using variable inCounter.. checking for mode
    if (arr[inCounter]===arr[counter])//checks each item in the array to see if its value matches that of the array at its current index
        apps++; //increments the total # of appearances of a particular number
    		
    if (apps>totalApps){
      totalApps=apps;//if the total appearances exceeds the number of appearances of the current mean set that as the new benchmark for the mode
      mode=arr[counter]; //sets the mode to the current value of arr[counter], we have a new mode
    }
  }

}
var mean=total/arr.length;//calculates mean
if (mean===mode)
  return 1
if (mean!=mode)  
  return 0; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());           
