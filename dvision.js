/*Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function Division(num1,num2) {
if (num1===1 || num2===1)
  return 1
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


function pFact(num, pFactors){
var primeArray=[];
for (var count=0; count<500;count++){
    if (isPrime(count)===true)
      primeArray.push(count);
      }
if (pFactors===undefined)
  pFactors=[];
  
if (isPrime(num)===true){
  pFactors.push(num)
  return pFactors
}
for (var count=0; primeArray[count]<=num; count++){
  if (num%primeArray[count]===0){
    pFactors.push(primeArray[count]);
    num=num/primeArray[count];
    return pFact(num, pFactors);
    	}
	}
}
function intersect(arr1, arr2){
var results=[];
for (var count=0; count<arr1.length;count++){
  if (arr2.indexOf(arr1[count])>-1){
    results.push(arr1[count]);
	arr2.splice(arr2.indexOf(arr1[count]),1)
  		}
	}
return results;
} 

var GFC = intersect(pFact(num1),pFact(num2));
if (GFC.length===0)
  return 1
var result=GFC[0];
for (var count=1; count<GFC.length; count++)
	result=result*GFC[count]
return result

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Division(readline());           
