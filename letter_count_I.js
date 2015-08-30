/*Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

Use the Parameter Testing feature in the box below to test your code with different arguments.*/
function LetterCountI(str) { 
	function inWord(inStr){//counts repeated letters within a single word
		var used=[];
	  	var ltrCt=0;
	  	var repeat=[];
	  	for (var count=0; count<inStr.length;count++){//loops through each letter  
		      if (used.indexOf(inStr[count])===-1){//checks to see if we have already counted this letter
		        ltrCt=0;//resets count to zero
		      	for (var newCount=0;newCount<inStr.length;newCount++){ //counts appearances of current letter
		          if(inStr[newCount]==inStr[count])
		            ltrCt++;//increases the letter count when the inner loop matches the letter set by the outer loop
		        }
		        used.push(inStr[count]);//adds to list of checked letters so we don't check the same letter twice
		        repeat.push(ltrCt);//pushes the total number repeated for particular letter
		      }
	    }
	  var repeated=0;
	  for (count=0;count<repeat.length;count++){//cycles through the repeat array and total the number of repeated letters
	    if (repeat[count]>1)
	      repeated+=repeat[count]
	      }
	    return repeated;//returns total number of repeated letters
	}
  var spltStr=str.split(" "); //splits the input string into seperate words
  var longCt=0;
  var longWord="";
  for (var count=0; count<spltStr.length;count++){ //cycles through the words to determine which has most repeats using inWord function
    if (inWord(spltStr[count])>longCt){
        longCt=inWord(spltStr[count]);
      	longWord=spltStr[count];//sets the variable to the word with 
  }
  }
if (longWord==="")//returns -1 if no word has more that 0 repeated letters
  return -1;
  
  return longWord //returns word with most repeated letters
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());           
