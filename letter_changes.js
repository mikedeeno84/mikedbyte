/*Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function LetterChanges(str) { 
	var alphaArray="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"; //with no vowels
	var alpha=[];
  	for (var ltr in alphaArray)
    	alpha.push(alphaArray[ltr]);
  	var vowels=["a","e","i","o","u"];//only lower case vowels need to be adjusted
  	var newStr="";
  	for (var letter in str){ //selects each letter in the string and adjusts it according to varying conditions
      		var newLtr=String.fromCharCode(str.charCodeAt(letter)+1); //advance the character by one letter in alpha bet
		      if (newLtr==="{") //corrects for when the end of alphabet occurs
		      	newLtr="a";
		      	
		      else if (newLtr==="[") //corrects for when the end of alphabet occurs
		      	newLtr="A";
		        
		      else if (vowels.indexOf(newLtr)>0) //upper cases the vowel
		        newLtr=newLtr.toUpperCase();
		 
		      else if (alpha.indexOf(newLtr)==-1) //if the letter needs no adjusting 
		        newLtr=str[letter];
		        
		      newStr+=newLtr; //adds current character into the string
    }
	return newStr

}
