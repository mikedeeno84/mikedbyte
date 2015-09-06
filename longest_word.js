/*Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */


function LongestWord(sen) { 
    var newStr="";
    var alpha="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    for (var letter in sen){ //loops through string to create a new string without non alphabetic characters or spaces
      if (alpha.indexOf(sen[letter])>-1)
        newStr+=sen[letter];
    }
    var wordList=newStr.split(" ")//splits the new string into an array of words
    var bigWord=wordList[0];//stores the first word as the longest word
    for (var word in wordList){//loop through array and if any word length exceeds that of bigWord, bigWord is set to that word
      var currentWord=wordList[word];
      if (currentWord.length >bigWord.length)
        bigWord=wordList[word];
    }
  return bigWord; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());   
