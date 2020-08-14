function clockHandAngles(seconds) {
    var hours = seconds*(1/3600); //converted to hours
    hours = hours%12;
    console.log(hours);
    var minute = Math.abs(hours - Math.floor(hours));
    minute = minute*60;
    console.log(minute);
    var Seconds = Math.abs(minute - Math.floor(minute));
    Seconds = Seconds*60;
    console.log(Seconds);

    Seconds = Math.ceil(Seconds);
    minute = Math.floor(minute);
    hours = Math.floor(hours);

    console.log(hours);
    degrees_h = (hours*30) + (minute*0.5); //for ever minute it equals a half degree. half degree per minute
    console.log(minute);
    degree_m = (minute*6) + (Seconds*0.1);
    console.log(Seconds);
    degree_S = (Seconds*6);

    var clock_angle = [Math.ceil(degrees_h) , Math.ceil(degree_m), Math.ceil(degree_S)];
    return clock_angle;

}
y=clockHandAngles(8000);
console.log(y);