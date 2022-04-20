let aktuelleZeit = new Date();
let stunde = aktuelleZeit.getHours();
let minute = aktuelleZeit.getMinutes();
if(stunde.length == 1) {stunde="0"+stunde}
if(minute.length == 1) {minute="0"+minute}
let zeit = stunde + ":" + minute;
document.getElementById("dsa-txt").innerHTML = "Zeit: " + zeit;