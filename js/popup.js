function clock(){
var t = new Date();
var h = t.getHours();
var m = t.getMinutes();
var s = t.getSeconds();
var result = (h<10?"0"+h:h) + ":" + (m<10?"0"+m:m) + ":" + (s<10?"0"+s:s);
document.getElementById("clock").innerHTML = result;
setTimeout(clock, 1000);
}

