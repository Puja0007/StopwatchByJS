var hr=0, min=0, sec=0, count=0;
var timer=false;

function start(){
timer = true;
stopwatch();
}

function stop(){
timer = false;
}

function reset(){
timer = false;
count=0;
sec=0;
min=0;
hr=0;
document.getElementById("count").innerHTML="00";
document.getElementById("sec").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("hr").innerHTML="00";
}

function stopwatch(){
    if(timer){
        count++;
    if(count == 100){
        sec= sec+1;
        count=0;
    }
    if(sec == 60){
        min= min+1;
        sec=0;
    }
    if(min == 60){
        hr= hr+1;
        min=0;
    }
    var getSecs = sec<10?"0"+sec:sec;
    var getMins = min<10?"0"+min:min;
    var getHrs = hr<10?"0"+hr:hr;
    document.getElementById("count").innerHTML=count;
    document.getElementById("sec").innerHTML=getSecs;
    document.getElementById("min").innerHTML=getMins;
    document.getElementById("hr").innerHTML=getHrs;
    setTimeout("stopwatch()",10);
    }
}