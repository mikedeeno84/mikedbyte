/*Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */


function LongestWord(sen) { 
	var newStr="";
    var alpha="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    for (var letter in sen){
      if (alpha.indexOf(sen[letter])>-1)
        newStr+=sen[letter];
    }
    var wordList=newStr.split(" ")
    var bigWord=wordList[0];
 	for (var word in wordList){
      var currentWord=wordList[word];
      if (currentWord.length >bigWord.length)
        bigWord=wordList[word];
    }
  return bigWord; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());   
