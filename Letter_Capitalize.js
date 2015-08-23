/* Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function LetterCapitalize(str) { 
	var newStr = "";
  for (var letter in str){
    if (letter==0)
      newStr+= str[letter].toUpperCase() //add and capitalize the first letter to the new string
    else if (str[letter-1]==" ")
      newStr+= str[letter].toUpperCase() //add and capitalize every letter that appears after a space
    else
      newStr+=str[letter] //or just add the letter
      }
  return newStr; 
         
}
   
