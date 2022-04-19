let aktuelleZeit = new Date();
let zeit = aktuelleZeit.getHours() + ":" + aktuelleZeit.getMinutes();
document.getElementById("dsa-txt").innerHTML = "Zeit: " + zeit;