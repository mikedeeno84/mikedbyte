/*Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function CountingMinutesI(str) {

var startTime=str.slice(0,str.indexOf("m")+1);// slices out the start time and end times & stores them
var endTime=str.slice(str.indexOf("-")+1);
var sHour=parseInt(startTime);//stores the starting hour
var eHour=parseInt(endTime);//stores the ending hour
if (startTime.indexOf("pm")>0)//increment times to military time if the time is in pm
    sHour+=12;
if (endTime.indexOf("pm")>0)
    eHour+=12;    
var sMinute=parseInt(startTime.slice(startTime.indexOf(":")+1,-2));//slices out the ending minutes
var eMinute=parseInt(endTime.slice(endTime.indexOf(":")+1,-2));
var startInMinutes=(sHour*60)+sMinute;//converts the times into total minutes
var endInMinutes=(eHour*60)+eMinute;
if (startInMinutes>=endInMinutes)//if start time is later in the day subtract the total minutes and add 1440 (total minutes in a day) to remove the negative
 	return (endInMinutes-startInMinutes)+1440
  
  return endInMinutes-startInMinutes //subtract total minutes between
         
}
   
CountingMinutesI(readline());           
