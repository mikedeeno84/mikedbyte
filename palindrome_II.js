/* Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. 

Use the Parameter Testing feature in the box below to test your code with different arguments..
*/

function PalindromeTwo(str) { 
	var store="";
  	for (var letter in str){
            if ((str.charCodeAt(letter)>=65 && str.charCodeAt(letter)<=90) || (str.charCodeAt(letter)>=97 && str.charCodeAt(letter)<=122))
        store+=str[letter];
    }
	str=store.toLowerCase();
    store="";
    for (letter=(str.length-1);letter>=0;letter--)
      store+=str[letter];
	if (str===store)
      return "true"
    
  return "false"; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());    
