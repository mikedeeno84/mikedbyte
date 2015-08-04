/* Present Function solves both arith geo and arith geo II in coderbyte

Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function ArithGeo(arr) {
for (var count=0; count<arr.length-2;count++) {
if (arr[count+1]-arr[count]!=arr[count+2]-arr[count+1])
  break;
}
if (count===arr.length-2)
 return "Arithmetic"

for (count=0; count<arr.length-2;count++) {
if (arr[count+1]/arr[count]!=arr[count+2]/arr[count+1])
  break;
}
if (count===arr.length-2)
 return "Geometric"
 

return -1; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());           
