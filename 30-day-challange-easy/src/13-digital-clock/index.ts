/**
 * Write a function that takes the number of seconds and returns the digital format clock time as a string. 
 * Time should be counted from 00:00:00.
 */

function digitalClock(seconds: number) {
    let houre=0;
    let minute=0;
    let newhoure;
    let newminute;
    let newsecond;
   while(seconds>3600)
   {
        houre+=1;
       seconds=seconds-3600;
   }
   if(houre===24)
   {
       houre=0;
   }
   while(seconds>=60)
   {
       minute+=1;
       seconds=seconds-60;
   }
  if(houre<10)
  {
    newhoure="0"+houre;
  }
  else newhoure=houre;
  if(minute<10)
  {
    newminute="0"+minute;
  }
  else newminute=minute;
 
   if(seconds<10)
   {
     newsecond="0"+seconds;
   }
   else newsecond=seconds;
   return newhoure+":"+newminute+":"+newsecond;
 }

export { digitalClock };