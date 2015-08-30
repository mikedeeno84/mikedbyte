/*Have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
//same as Letter Count I
function LetterCount(str) { 
function inWord(inStr){
	var used=[];
  	var ltrCt=0;
  	var repeat=[];
  	for (var count=0; count<inStr.length;count++){
      if (used.indexOf(inStr[count])===-1){
        ltrCt=0;
        for (var newCount=0;newCount<inStr.length;newCount++){
          if(inStr[newCount]==inStr[count])
            ltrCt++;
        }
        used.push(inStr[count]);
        repeat.push(ltrCt);
      }
    }
  var repeated=0;
  for (count=0;count<repeat.length;count++){
    if (repeat[count]>1)
      repeated+=repeat[count]
      }
    return repeated;
}
  var spltStr=str.split(" ");
  var longCt=0;
  var longWord="";
  for (var count=0; count<spltStr.length;count++){
    if (inWord(spltStr[count])>longCt){
        longCt=inWord(spltStr[count]);
      	longWord=spltStr[count];
  }
  }
if (longWord==="")
  return -1;
  return longWord
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCount(readline());           
