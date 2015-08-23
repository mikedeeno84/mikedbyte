/* Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function AlphabetSoup(str) { 
	var newStr="";
  for (var counter=0; counter<26;counter++){ //loops through each letter of the alphabet using starting points 65 and 97 as character codes that are incremented by the loop
    var start=65;
    var lStart=97;
    start+=counter;
    lStart+=counter;
  	for (var lCounter=0; lCounter<str.length; lCounter++){ // checks the original string for whichever alphabet letter the loop has reached and if found adds it to the variable that cotains the alphabetized string
          if (str[lCounter]===String.fromCharCode(start) || str[lCounter]===String.fromCharCode(lStart))
            newStr+=str[lCounter];
        }
  }
  return newStr
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());           
