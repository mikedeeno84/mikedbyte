/*Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 

Use the Parameter */

function CaesarCipher(str,num) { 
ans='';
var alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
alpha=alpha.split("");
var code;//holds character codes
for (var count=0;count<str.length;count++){//loops through initial string
  if (alpha.indexOf(str[count])>-1){// ensures that the character is in fact a letter
  	code=str.charCodeAt(count)+num;//increments the letter and stores the charater code
  	if (code>=123 || (code>90 && code<97))
    	  code=code-26;//if new code is not a letter decrements the code by 26 so it will properly loop the alphabet
  	ans+=String.fromCharCode(code);
  }
  else //adds in the character to the result if it is not a letter with no edits
    ans+=str[count];
}
 
  return ans; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CaesarCipher(readline());           
