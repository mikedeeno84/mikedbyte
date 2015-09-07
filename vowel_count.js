/* Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function VowelCount(str) { 
	var vowels = ["A","E","I","O","U","a","e",'i', 'o', 'u'];
  var vCount=0;
  for (var letter in str){//loop through the string and increment vCount each time a vowel is found
    if (vowels.indexOf(str[letter]) >=0){
      vCount++; }
  }
	return vCount         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           
