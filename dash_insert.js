/*Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

/*function loops through the list and adds the individual characters to the new string. 
if it encounters an odd number it checks the following number.  if both are odd it inserts 
a dash and continues the loop */

function DashInsert(str) { 
var newStr="";
  for (var count=0; count<str.length;count++){
    newStr+=str[count]
    if (count===str.length-1)
      break;
    if (str[count]%2!=0 && str[count+1]%2!=0)
      newStr+="-"
      }
  return newStr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());           
