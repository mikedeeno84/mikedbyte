/*Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function CountingMinutesI(str) {

var startTime=str.slice(0,str.indexOf("m")+1);
var endTime=str.slice(str.indexOf("-")+1);
var sHour=parseInt(startTime);
var eHour=parseInt(endTime);
if (startTime.indexOf("pm")>0)
    sHour+=12;
if (endTime.indexOf("pm")>0)
    eHour+=12;    
var sMinute=parseInt(startTime.slice(startTime.indexOf(":")+1,-2));
var eMinute=parseInt(endTime.slice(endTime.indexOf(":")+1,-2));
var startInMinutes=(sHour*60)+sMinute;
var endInMinutes=(eHour*60)+eMinute;
if (startInMinutes>=endInMinutes)
 	return (endInMinutes-startInMinutes)+1440
  
  return endInMinutes-startInMinutes
         
}
   
CountingMinutesI(readline());           
