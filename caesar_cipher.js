/*Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 

Use the Parameter */

function CaesarCipher(str,num) { 
ans='';
var alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
alpha=alpha.split("");
var code;
for (var count=0;count<str.length;count++){
  if (alpha.indexOf(str[count])>-1){
  	code=str.charCodeAt(count)+num;
  	if (code>=123 || (code>90 && code<97))
    	  code=code-26;
  	ans+=String.fromCharCode(code);
  }
  else
    ans+=str[count];
}
 
  return ans; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CaesarCipher(readline());           
