/* Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function ABCheck(str) { 
  	var abCount=0;

	for (var counter=0; counter<str.length; counter++){
      if (str[counter]==="A" || str[counter]==="a"){
        var bCounter=counter+4;
        var BCounter=counter-4;
        if((str[bCounter]==="B"||str[bCounter]==="b")||(str[BCounter]==="B"||str[BCounter]==="b"))
        	abCount++;
       }
    }
	if (abCount>=1)
		return "true"
  return "false"
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());           
