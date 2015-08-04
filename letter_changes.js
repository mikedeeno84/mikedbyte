/*Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function LetterChanges(str) { 
	var alphaArray="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
	var alpha=[];
  	for (var ltr in alphaArray)
    	alpha.push(alphaArray[ltr]);
  	var vowels=["a","e","i","o","u"];
  	var newStr="";
  	for (var letter in str){
      var newLtr=String.fromCharCode(str.charCodeAt(letter)+1);
      if (newLtr==="{")
      	newLtr="a";
      	
      else if (newLtr==="[")
      	newLtr="A";
        
      else if (vowels.indexOf(newLtr)>0)
        newLtr=newLtr.toUpperCase();
 
      else if (alpha.indexOf(newLtr)==-1)
        newLtr=str[letter];
        
      newStr+=newLtr;
    }
	return newStr

}
