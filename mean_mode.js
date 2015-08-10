/*Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function MeanMode(arr) { 
var mode;
var totalApps=1;
var total=0;
for (var counter=0;counter<arr.length; counter++){
  var apps=0;
  total+=arr[counter];
  	for (var inCounter=0; inCounter<arr.length; inCounter++){
      if (arr[inCounter]===arr[counter])
          apps++;
      		
      if (apps>totalApps){
        totalApps=apps;
        mode=arr[counter];
      }
    }

}
var mean=total/arr.length;
if (mean===mode)
  return 1
if (mean!=mode)  
  return 0; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());           
