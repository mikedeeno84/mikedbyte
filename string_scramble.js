/*Have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
function StringScramble(str1,str2) { 
var arr1=str1.split("")
for (var count=0; count<str2.length; count++){
	if(arr1.indexOf(str2[count])===-1)//checks each character in str2 to check that it appears in arr1
      		return false;//if the character doesnt appear, return false
  	arr1.splice(arr1.indexOf(str2[count]),1);//splice out from arr1 the current character from str2 to account for repeated letters
}
return true //no failing conditions found, return true
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());           
