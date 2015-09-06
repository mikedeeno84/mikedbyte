/*Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function SecondGreatLow(arr) { 
var ordArray=[];
function low(set){//determine smallest item in an array
	var min=set[0];
  	for (var count=0;count<set.length;count++){
    	if (set[count]<=min)
          min=set[count];
    }
  return min
}
var max=arr.length;  
for (var count=0;count<max;count++){//loops through array and puts it in order
  if(ordArray.indexOf(low(arr))===-1)//if ordArray doesnt have the minimum number add it to ordArray
  	ordArray.push(low(arr));
  arr.splice(arr.indexOf(low(arr)), 1)//splice that number out of the array
}
  var secLow=ordArray[1];//sets variable value to the second item in the ordered array (2nd lowest)
  var secHi=ordArray[ordArray.length-2];//sets variable value to the second to last item in the array(2nd greatest)
if (ordArray.length===1)//if the ordered array is only 1 number long, return that number twice 
  return ordArray[0]+" "+ordArray[0];
return secLow.toString()+" "+ secHi.toString();//return as a string the 2nd lowest and 2nd greatest numbers
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());           
