/* Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function LetterCapitalize(str) { 
	var newStr = "";
  for (var letter in str){
    if (letter==0)
      newStr+= str[letter].toUpperCase()
    else if (str[letter-1]==" ")
      newStr+= str[letter].toUpperCase()
    else
      newStr+=str[letter]
      }
  return newStr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());   
