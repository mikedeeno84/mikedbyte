/* Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

Use the Parameter Testing feature in the box below to test your code with different arguments. */

function PrimeMover(num) { 

  
function isPrime(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2==0) return (n==2);
 if (n%3==0) return (n==3);
 var m=Math.sqrt(n);
 for (var i=5;i<=m;i+=6) {
  if (n%i==0)     return false;
  if (n%(i+2)==0) return false;
 }
 return true;
}
var primeArray=[2,3,5];
for (count=5;count<10000;count+=2){
  if (count%3 !=0 && count %5 !=0){
    if(isPrime(count)===true)
      primeArray.push(count)
      }
}
  return primeArray[num-1]; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline());           
