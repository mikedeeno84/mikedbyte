/*Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */ 

function Palindrome(str) { 
	var store="";
  	for (var letter in str){//strips all spaces from the string
      		if (str[letter]!=" ")
			 store+=str[letter];
	}
	str=store.toLowerCase();//converts the string to lowercase
	store="";//resets store to an empty string
	for (letter=(str.length-1);letter>=0;letter--)//reverses the string and stores it in variable "store"
		store+=str[letter];
	if (str===store)//returns true if the reversed string is the same as the input string (stripped of spaces and capitalization)
      		return "true"
    
  return "false"; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());           
