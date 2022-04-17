var zug1linie = "";
var zug2linie = "";
var zug3linie = "";
var zug4linie = "";



//function zug1linieSel() {
    //let ausgabeZug1linie = document.getElementById("ibZug1linie").value;
    //if ((ausgabeZug1linie = "S1")||(ausgabeZug1linie = "S2")||(ausgabeZug1linie = "S3")||(ausgabeZug1linie = "S4")||(ausgabeZug1linie = "S6")||(ausgabeZug1linie = "S7")||(ausgabeZug1linie = "S8")) {
    //zug1linie = ausgabeZug1linie.slice(1); //erst ab dem zweiten Buchstaben wird genommen => aus S1 wird 1
    //}
//}

function leeren() {
    var d = document.getElementById("text01");
    var e = d.getContext("2d");
    e.clearRect(0, 0, d.width, d.height);
}

function Eingabe() {

    leeren();

    var zug1linie = linieumwandeln ('ibZug1linie');
    let zug1ziel = document.getElementById("ibZug1ziel").value;
    let zug1gleis = document.getElementById("ibZug1gleis").value;
    let zug1ws = document.getElementById("ibZug1ws").value;
    let zug1min = document.getElementById("ibZug1min").value;

    let zug2ziel = document.getElementById("ibZug2ziel").value;
    var zug2linie = linieumwandeln ('ibZug2linie');
    let zug2gleis = document.getElementById("ibZug2gleis").value;
    let zug2ws = document.getElementById("ibZug2ws").value;
    let zug2min = document.getElementById("ibZug2min").value;

    let zug3ziel = document.getElementById("ibZug3ziel").value;
    var zug3linie = linieumwandeln ('ibZug3linie');
    let zug3gleis = document.getElementById("ibZug3gleis").value;
    let zug3ws = document.getElementById("ibZug3ws").value;
    let zug3min = document.getElementById("ibZug3min").value;

    let zug4ziel = document.getElementById("ibZug4ziel").value;
    var zug4linie = linieumwandeln ('ibZug4linie');
    let zug4gleis = document.getElementById("ibZug4gleis").value;
    let zug4ws = document.getElementById("ibZug4ws").value;
    let zug4min = document.getElementById("ibZug4min").value;

    var c = document.getElementById("text01");

    //Ziel des Zuges

    var ziel1 = c.getContext("2d");
    ziel1.font = "140px lcdzza10px"
    ziel1.fillStyle ="white";
    ziel1.textAlign = "left"; 
    ziel1.fillText(zug1ziel, 772, 512)

    var ziel2 = c.getContext("2d");
    ziel2.font = "140px lcdzza10px"
    ziel2.fillStyle ="white";
    ziel2.fillText(zug2ziel, 772, 672)

    var ziel3 = c.getContext("2d");
    ziel3.font = "140px lcdzza10px"
    ziel3.fillStyle ="white";
    ziel3.fillText(zug3ziel, 772, 832)

    var ziel4 = c.getContext("2d");
    ziel4.font = "140px lcdzza10px"
    ziel4.fillStyle ="white";
    ziel4.fillText(zug4ziel, 772, 1000)

    //S-Bahn-Linie

    var linie1 =c.getContext("2d");
    linie1.font= "140px lcdzza10px-linien"
    linie1.fillStyle = "white";
    linie1.fillText(zug1linie, 500, 512)

    var linie2 =c.getContext("2d");
    linie2.font= "140px lcdzza10px-linien"
    linie2.fillStyle = "white";
    linie2.fillText(zug2linie, 500, 672)

    var linie3 =c.getContext("2d");
    linie3.font= "140px lcdzza10px-linien"
    linie3.fillStyle = "white";
    linie3.fillText(zug3linie, 500, 832)

    var linie4 = c.getContext("2d");
    linie4.font = "140px lcdzza10px-linien"
    linie4.fillstyle = "white";
    linie4.fillText(zug4linie, 500, 1000)

    //Gleis

    var gleis1 = c.getContext("2d");
    gleis1.font = "140px lcdzza10px"
    gleis1.fillStyle = "white";
    gleis1.textAlign = "end"; 
    gleis1.fillText(zug1gleis, 2470, 512);

    var gleis2 = c.getContext("2d");
    gleis2.font = "140px lcdzza10px"
    gleis2.fillStyle = "white";
    gleis2.textAlign = "end"; 
    gleis2.fillText(zug2gleis, 2470, 672);

    var gleis3 = c.getContext("2d");
    gleis3.font = "140px lcdzza10px"
    gleis3.fillStyle = "white";
    gleis3.textAlign = "end"; 
    gleis3.fillText(zug3gleis, 2470, 832);

    var gleis4 = c.getContext("2d");
    gleis4.font = "140px lcdzza10px"
    gleis4.fillStyle = "white";
    gleis4.textAlign = "end"; 
    gleis4.fillText(zug4gleis, 2470, 1000);

    //Wagenstandsanzeiger

    var ws1 = c.getContext("2d");
    ws1.font = "140px lcdzza10px"
    ws1.fillStyle = "white";
    ws1.textAlign = "center"; 
    ws1.fillText(zug1ws, 2790, 512);

    var ws2 = c.getContext("2d");
    ws2.font = "140px lcdzza10px"
    ws2.fillStyle = "white";
    ws2.textAlign = "center"; 
    ws2.fillText(zug2ws, 2790, 672);

    var ws3 = c.getContext("2d");
    ws3.font = "140px lcdzza10px"
    ws3.fillStyle = "white";
    ws3.textAlign = "center"; 
    ws3.fillText(zug3ws, 2790, 832);

    var ws4 = c.getContext("2d");
    ws4.font = "140px lcdzza10px"
    ws4.fillStyle = "white";
    ws4.textAlign = "center"; 
    ws4.fillText(zug4ws, 2790, 1000);

    //In Min

    var min1 = c.getContext("2d");
    min1.font = "140px lcdzza10px"
    min1.fillStyle = "white";
    min1.textAlign = "end"; 
    min1.fillText(zug1min, 3480, 512);

    var min2 = c.getContext("2d");
    min2.font = "140px lcdzza10px"
    min2.fillStyle = "white";
    min2.textAlign = "end"; 
    min2.fillText(zug2min, 3480, 672);

    var min3 = c.getContext("2d");
    min3.font = "140px lcdzza10px"
    min3.fillStyle = "white";
    min3.textAlign = "end"; 
    min3.fillText(zug3min, 3480, 832);

    var min4 = c.getContext("2d");
    min4.font = "140px lcdzza10px"
    min4.fillStyle = "white";
    min4.textAlign = "end"; 
    min4.fillText(zug4min, 3480, 1000);

    //var wasserzeichen = c.getContext("2d");
    //wasserzeichen.font = "150px Anek Odia";
    //wasserzeichen.fillStyle = "gray";
    //wasserzeichen.textAlign = "end";
    //wasserzeichen.fillText("test.thewalt.de/zzagen", 3950, 1340)

}

function linieumwandeln (ddel) {
    var select = document.getElementById(ddel);
    var value = select.options[select.selectedIndex].text;
    var wert;
    if (value == "S1"){
        wert = "1";
    }
    else if (value == "S2"){
        wert = "2";
    }
    else if (value == "S3"){
        wert = "3";
    }
    else if (value == "S4"){
        wert = "4";
    }
    else if (value == "S6"){
        wert = "6";
    }
    else if (value == "S7"){
        wert = "7";
    }
    else if (value == "S8"){
        wert = "8";
    }
    else if (value == "RB"){
        wert = "B";
    }
    else if (value == "RE"){
        wert = "E";
    }
    else {
        wert = "";
    }
    return wert;
}