/*Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function SimpleSymbols(str) { 
	var alpha="abcdefghijklmnopqrstuvwxyz";
    	var acceptable="0123456789+=";
    	for(var letter=0; letter<str.length;letter++){
      		if (alpha.indexOf(str[letter])>-1){//condition is met if the str[letter] is equal to a letter
        		if (letter==0)//the first character cannot be a letter so returns false
          			return "false"
        	if (str[letter-1]!="+" || str[letter+1]!="+")//checks the index of the string preceding or following the letter.  if they do not equal a "+" return false
          		return "false"
          	}
    }
  return "true"; //no failing conditions were met, the function returns true
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
