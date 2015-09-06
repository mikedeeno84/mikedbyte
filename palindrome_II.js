/* Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. 

Use the Parameter Testing feature in the box below to test your code with different arguments..
*/

function PalindromeTwo(str) { 
	var store="";
  	for (var letter in str){//loops through string and strips it of non letter characters, stores it in "store"
            if ((str.charCodeAt(letter)>=65 && str.charCodeAt(letter)<=90) || (str.charCodeAt(letter)>=97 && str.charCodeAt(letter)<=122))
        store+=str[letter];
    }
	str=store.toLowerCase();//str now is the original string stripped of non letter characters and capitlization
    	store="";//store reset to an empty string
    	for (letter=(str.length-1);letter>=0;letter--)//stores the reversed string in variable "strore"
      		store+=str[letter];
	if (str===store)// tests if the reversed string is the same as the original
		return "true"
    
  return "false"; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());    
