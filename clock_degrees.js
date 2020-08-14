function clockHandAngles(seconds) {
    var hours = seconds*(1/3600); //converted to hours
    hours = hours%12; //This gives us the remainder for the hours
    console.log(hours);
    var minute = Math.abs(hours - Math.floor(hours));//finding the minutes here, however, the units is hours
    minute = minute*60; //Converting to minutes
    console.log(minute);
    var Seconds = Math.abs(minute - Math.floor(minute)); //Finding the seconds here, but the units is minutes
    Seconds = Seconds*60; //Converting to seconds
    console.log(Seconds);

    Seconds = Math.ceil(Seconds);
    minute = Math.floor(minute);
    hours = Math.floor(hours);

    console.log(hours);
    degrees_h = (hours*30) + (minute*0.5); //for ever minute it equals a half degree. half degree per minute in an hour
    console.log(minute);
    degree_m = (minute*6) + (Seconds*0.1);// 6 degrees in a minute per hour, and its 360 degrees divided by 3600 seconds for the seconds part
    console.log(Seconds);
    degree_S = (Seconds*6); //6 degrees because its 360 degrees in a full rotation divided by 60 seconds

    var clock_angle = [Math.ceil(degrees_h) , Math.ceil(degree_m), Math.ceil(degree_S)];
    return clock_angle;

}
y=clockHandAngles(8000);
console.log(y);