/*Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function SecondGreatLow(arr) { 
var ordArray=[];
function low(set){
	var min=set[0];
  	for (var count=0;count<set.length;count++){
    	if (set[count]<=min)
          min=set[count];
    }
  return min
}
var max=arr.length;  
for (var count=0;count<max;count++){
  if(ordArray.indexOf(low(arr))===-1)
  	ordArray.push(low(arr));
  arr.splice(arr.indexOf(low(arr)), 1)
}
  var secLow=ordArray[1];
  var secHi=ordArray[ordArray.length-2];
if (ordArray.length===1)
  return ordArray[0]+" "+ordArray[0];
return secLow.toString()+" "+ secHi.toString();
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());           
