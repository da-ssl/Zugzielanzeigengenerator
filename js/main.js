var zug1linie = "";
var zug2linie = "";
var zug3linie = "";
var zug4linie = "";



/*function dropdownlinien(dropdownelement){
    var dde = document.getElementById(dropdownelement);
    dde.options.add("S1");
    dde.options.add("S2");
    dde.options.add("S3");
    dde.options.add("S4");
    dde.options.add("S6");
    dde.options.add("S7");
    dde.options.add("S8");
    dde.options.add("RE");
    dde.options.add("RB");
}//Man könnte diese Funktion beim Seitenstart ausführen, um den unnötig langen HTML-Code zu kürzen. Ich bin aber zu dumm es beim Seitenstart auszuführen

dropdownlinien('ibZug1linie');
dropdownlinien('ibZug2linie');
dropdownlinien('ibZug3linie');
dropdownlinien('ibZug4linie');*/


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

    //Zug 1

    var ziel1 = c.getContext("2d");
    ziel1.font = "140px lcdzza10px"
    ziel1.fillStyle ="white";
    ziel1.textAlign = "left"; 
    ziel1.fillText(zug1ziel, 772, 512)

    var linie1 =c.getContext("2d");
    linie1.font= "140px lcdzza10px-linien"
    linie1.fillStyle = "white";
    linie1.fillText(zug1linie, 500, 512)

    var gleis1 = c.getContext("2d");
    gleis1.font = "140px lcdzza10px"
    gleis1.fillStyle = "white";
    gleis1.textAlign = "end"; 
    gleis1.fillText(zug1gleis, 2470, 512);

    var ws1 = c.getContext("2d");
    ws1.font = "140px lcdzza10px"
    ws1.fillStyle = "white";
    ws1.textAlign = "center"; 
    ws1.fillText(zug1ws, 2790, 512);

    var min1 = c.getContext("2d");
    min1.font = "140px lcdzza10px"
    min1.fillStyle = "white";
    min1.textAlign = "end"; 
    min1.fillText(zug1min, 3480, 512);

    //Zug 2

    var ziel2 = c.getContext("2d");
    ziel2.font = "140px lcdzza10px"
    ziel2.fillStyle ="white";
    ziel2.textAlign = "left"; 
    ziel2.fillText(zug2ziel, 772, 672)

    var linie2 =c.getContext("2d");
    linie2.font= "140px lcdzza10px-linien"
    linie2.fillStyle = "white";
    linie2.fillText(zug2linie, 500, 672)

    var gleis2 = c.getContext("2d");
    gleis2.font = "140px lcdzza10px"
    gleis2.fillStyle = "white";
    gleis2.textAlign = "end"; 
    gleis2.fillText(zug2gleis, 2470, 672);
    
    var ws2 = c.getContext("2d");
    ws2.font = "140px lcdzza10px"
    ws2.fillStyle = "white";
    ws2.textAlign = "center"; 
    ws2.fillText(zug2ws, 2790, 672);

    var min2 = c.getContext("2d");
    min2.font = "140px lcdzza10px"
    min2.fillStyle = "white";
    min2.textAlign = "end"; 
    min2.fillText(zug2min, 3480, 672);

    //Zug 3

    var ziel3 = c.getContext("2d");
    ziel3.font = "140px lcdzza10px"
    ziel3.fillStyle ="white";
    ziel3.textAlign = "left"; 
    ziel3.fillText(zug3ziel, 772, 832)

    var linie3 =c.getContext("2d");
    linie3.font= "140px lcdzza10px-linien"
    linie3.fillStyle = "white";
    linie3.fillText(zug3linie, 500, 832)

    var gleis3 = c.getContext("2d");
    gleis3.font = "140px lcdzza10px"
    gleis3.fillStyle = "white";
    gleis3.textAlign = "end"; 
    gleis3.fillText(zug3gleis, 2470, 832);

    var ws3 = c.getContext("2d");
    ws3.font = "140px lcdzza10px"
    ws3.fillStyle = "white";
    ws3.textAlign = "center"; 
    ws3.fillText(zug3ws, 2790, 832);

    var min3 = c.getContext("2d");
    min3.font = "140px lcdzza10px"
    min3.fillStyle = "white";
    min3.textAlign = "end"; 
    min3.fillText(zug3min, 3480, 832);

    //Zug 4

    const iflt4 = document.querySelector('#lauftextletztezeile');

    if(iflt4.checked == false){
    
        var ziel4 = c.getContext("2d");
        ziel4.font = "140px lcdzza10px"
        ziel4.fillStyle ="white";
        ziel4.textAlign = "left"; 
        ziel4.fillText(zug4ziel, 772, 1000)
        
        var linie4 = c.getContext("2d");
        linie4.font = "140px lcdzza10px-linien"
        linie4.fillstyle = "white";
        linie4.fillText(zug4linie, 500, 1000)
        
        var gleis4 = c.getContext("2d");
        gleis4.font = "140px lcdzza10px"
        gleis4.fillStyle = "white";
        gleis4.textAlign = "end"; 
        gleis4.fillText(zug4gleis, 2470, 1000);
        
        var ws4 = c.getContext("2d");
        ws4.font = "140px lcdzza10px"
        ws4.fillStyle = "white";
        ws4.textAlign = "center"; 
        ws4.fillText(zug4ws, 2790, 1000);
        
        var min4 = c.getContext("2d");
        min4.font = "140px lcdzza10px"
        min4.fillStyle = "white";
        min4.textAlign = "end"; 
        min4.fillText(zug4min, 3480, 1000);
    } else 
    {
        /*var lauftext4 = c.getContext("2d");
        const move_pixel = 1;
        var x = 1000;
        lauftext4.font = "140px lcdzza10px";
        lauftext4.fillStyle = "white";
        var lauftext4text = "Hier steht ihr Lauftext, der nur als Beispiel dient.";
        var text_width = lauftext4.measureText(lauftext4text).width;
        lauftext4.fillText(lauftext4text, 3480, x);

        function lauftext4beweg()
        {
            lauftext4.clearRect(3480,1000,x,2000);
            if (x > text_width) {
                x = x - move_pixel;
            } else {
                x = 500;
            }
            lauftext4.fillText(lauftext4text, x, 1000);
            window.requestAnimationFrame(lauftext4beweg);
        }*/

        const move_pixel = 3;
        var lauftext4 = c.getContext("2d");
        lauftext4.font = "140px lcdzza10px";
        var x = 3480;
        var lauftext4text = document.getElementById("ibZug4lauftext").value;
        var text_width = lauftext4.measureText(lauftext4text).width;
        lauftext4.fillText(lauftext4text, x, 3480);

        window.requestAnimationFrame(moveTicker);
        function moveTicker()
        {
            lauftext4.clearRect(0,890,x,2000);
            if (x > 480 /*-text_width*/)
                x = x - move_pixel;
            else
                x = 4000 + text_width;
            lauftext4.fillText(lauftext4text, x, 1000);	
            window.requestAnimationFrame(moveTicker);
        }
        
        /*lauftext4.fillText("", 3480, 1000);*/
    }

    

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