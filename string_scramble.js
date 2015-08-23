/*Have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function StringScramble(str1,str2) { 
var arr1=str1.split("")
for (var count=0; count<str2.length; count++){
	if(arr1.indexOf(str2[count])===-1)
      return false;
  	arr1.splice(arr1.indexOf(str2[count]),1);
}
return true
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());           
