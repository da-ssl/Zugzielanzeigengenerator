var zug1linie = "";
var zug2linie = "";
var zug3linie = "";
var zug4linie = "";

var zzalines = 4; //Linien des ZZAs

let takenconnections = [];
let linecount = [];
let lineraw = [];
let platform = [];
let platformchange = [];
let plannedtime = [];
let time = [];
let delayed = [];
let delay = [];
let direction = [];
var inMin = [];

var allowAnimations = false;

function fetchjson(){
    
}
function leeren() {
    var d = document.getElementById("text01");
    var e = d.getContext("2d");
    e.clearRect(0, 0, d.width, d.height);
    allowAnimations = false;
    lauftext4text = null;
}

function stopAnimations() {
    allowAnimations = false;
}
function startAnimations() {
    allowAnimations = true;
}


var c = document.getElementById("text01");


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

    var lauftext4text = document.getElementById("ibZug4lauftext").value;


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
        allowAnimations = true;
        move_pixel = 3;
        var lauftext4 = c.getContext("2d");
        lauftext4.font = "140px lcdzza10px";
        var x = 3480;
        var text_width = lauftext4.measureText(lauftext4text).width;
        lauftext4.fillText("",0,0)
        lauftext4.fillText(lauftext4text, x, 3480);
        console.log("lauftext4text = " + lauftext4text);
        console.log("lauftext4 = " + lauftext4);

        //lauftext(lauftext4, lauftext4text, "auto", 3480, 1000);
        window.requestAnimationFrame(moveTicker);

        function moveTicker()
        {
            if(allowAnimations == true){
                lauftext4.clearRect(0,890,x,2000);
                if (x > 480 )
                    x = x - move_pixel;
                else
                    x = 4000 + text_width;
                lauftext4.fillText(lauftext4text, x, 1000);	
                window.requestAnimationFrame(moveTicker);
            }
            else {
                window.requestAnimationFrame(moveTicker);
            }
            
        }
    }

    

    //var wasserzeichen = c.getContext("2d");
    //wasserzeichen.font = "150px Anek Odia";
    //wasserzeichen.fillStyle = "gray";
    //wasserzeichen.textAlign = "end";
    //wasserzeichen.fillText("test.thewalt.de/zzagen", 3950, 1340)

}




function lauftext(textelement, text, speed, xcoor, ycoor)
{
    
    window.requestAnimationFrame(lauftext);
    lauftext2 = c.getContext("2d");
    text_width = lauftext2.measureText(textelement).width;
    if(speed == "auto") {speed = 3} //Wenn man als Geschw. "auto" angibt, ist automatisch die Geschw. von 3 gesetzt.
    if(allowAnimations == true) {
        if (xcoor > 480 /*480 = Anfang jedes Lauftextes*/){
            xcoor = xcoor - speed;
            console.log("Animation: check");
        }
        else{
            xcoor = 4000 + text_width;
        }
        console.log("text shoud be filled at: "+ xcoor + ", " + ycoor + " with the following text: " + text);
        lauftext2.fillText(text, xcoor, ycoor);
        
        window.requestAnimationFrame(lauftext);
    }
    else{
        window.requestAnimationFrame(lauftext);
    }
}


function linieumwandeln (ddel) {
    
    try{var select = document.getElementById(ddel);
    var value = select.options[select.selectedIndex].text;
    }
    catch(err){
        var value=ddel;
    }
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
    else if (value == "S4" || value == "S 4"){
        wert = "4";
    }
    else if (value == "S6" || value == "S 6"){
        wert = "6";
    }
    else if (value == "S7"){
        wert = "7";
    }
    else if (value == "S8"){
        wert = "8";
    }
    else if (value == "RB" || value.includes(" RB")){
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

function apirequest(traincount){
    
    var depatures = [{"tripId":"1|251786|2|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T10:35:00+02:00","plannedWhen":"2022-04-20T10:35:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Zorneding","provenance":null,"line":{"type":"line","id":"3-b7-sev-1285801-5355333","fahrtNr":"97614","name":"Bus SEV","public":true,"adminCode":"B7____","productName":"Bus","mode":"train","product":"regional","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"station","id":"8006671","name":"Zorneding","location":{"type":"location","id":"8006671","latitude":48.089395,"longitude":11.833004},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":48.046543,"longitude":11.937522}},{"tripId":"1|389061|0|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T10:51:00+02:00","plannedWhen":"2022-04-20T10:51:00+02:00","delay":0,"platform":"3","plannedPlatform":"3","direction":"München Hbf Gl.5-10","provenance":null,"line":{"type":"line","id":"brb-rb54","fahrtNr":"79070","name":"BRB RB54","public":true,"adminCode":"M8____","productName":"BRB","mode":"train","product":"regional","operator":{"type":"operator","id":"bayerische-regiobahn","name":"Bayerische Regiobahn"},"additionalName":"BRB RB54"},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8098262","name":"München Hbf Gl.5-10","location":{"type":"location","id":"8098262","latitude":48.140094,"longitude":11.555373},"products":{"nationalExpress":true,"national":true,"regionalExp":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":true,"tram":true,"taxi":false},"station":{"type":"station","id":"8000261","name":"München Hbf","location":{"type":"location","id":"8000261","latitude":48.140364,"longitude":11.558744},"products":{"nationalExpress":true,"national":true,"regionalExp":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":true,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":47.888693,"longitude":12.085547}},{"tripId":"1|249646|0|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T10:52:00+02:00","plannedWhen":"2022-04-20T10:48:00+02:00","delay":240,"platform":"1","plannedPlatform":"1","direction":"Ebersberg(Oberbay)","provenance":null,"line":{"type":"line","id":"4-800725-6","fahrtNr":"6643","name":"S 6","public":true,"adminCode":"800725","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"db-regio-ag-bayern","name":"DB Regio AG Bayern"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8001634","name":"Ebersberg(Oberbay)","location":{"type":"location","id":"8001634","latitude":48.074886,"longitude":11.970494},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":48.104407,"longitude":11.763023}},{"tripId":"1|249659|0|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T10:54:00+02:00","plannedWhen":"2022-04-20T10:54:00+02:00","delay":0,"platform":"4","plannedPlatform":"4","direction":"Tutzing","provenance":null,"line":{"type":"line","id":"4-800725-6","fahrtNr":"6650","name":"S 6","public":true,"adminCode":"800725","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"db-regio-ag-bayern","name":"DB Regio AG Bayern"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8005927","name":"Tutzing","location":{"type":"location","id":"8005927","latitude":47.906815,"longitude":11.272653},"products":{"nationalExpress":true,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|389053|0|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T11:06:00+02:00","plannedWhen":"2022-04-20T11:06:00+02:00","delay":0,"platform":"5","plannedPlatform":"5","direction":"Kufstein","provenance":null,"line":{"type":"line","id":"brb-rb54","fahrtNr":"79065","name":"BRB RB54","public":true,"adminCode":"M8____","productName":"BRB","mode":"train","product":"regional","operator":{"type":"operator","id":"bayerische-regiobahn","name":"Bayerische Regiobahn"},"additionalName":"BRB RB54"},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8100001","name":"Kufstein","location":{"type":"location","id":"8100001","latitude":47.583509,"longitude":12.165201},"products":{"nationalExpress":true,"national":true,"regionalExp":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|392660|2|80|20042022","stop":{"type":"stop","id":"624538","name":"Bahnhof, Grafing b. München","location":{"type":"location","id":"624538","latitude":48.043739,"longitude":11.940677},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},"when":"2022-04-20T11:10:00+02:00","plannedWhen":"2022-04-20T11:10:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Glonn, Bahnhofsplatz","provenance":null,"line":{"type":"line","id":"5-mvvrbu-440","fahrtNr":"14757","name":"Bus 440","public":true,"adminCode":"mvvRBU","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"621239","name":"Bahnhofsplatz, Glonn","location":{"type":"location","id":"621239","latitude":47.988913,"longitude":11.8647},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|252442|1|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T11:11:00+02:00","plannedWhen":"2022-04-20T11:11:00+02:00","delay":null,"platform":"11","plannedPlatform":"11","direction":"Wasserburg(Inn)Bf","provenance":null,"line":{"type":"line","id":"rb-48","fahrtNr":"27347","name":"RB 48","public":true,"adminCode":"8013D_","productName":"RB","mode":"train","product":"regional","operator":{"type":"operator","id":"db-regionetz-verkehrs-gmbh-sudostbayernbahn","name":"DB RegioNetz Verkehrs GmbH Südostbayernbahn"},"additionalName":"RB 48"},"remarks":[{"type":"status","code":null,"text":"Track repairs: On the route Wasserburg(Inn)Bf - Grafing Bahnhof between Ebersberg(Oberbay) and Grafing Bahnhof.\nThere are delays in both directions in the regional transport of the Deutsche Bahn."}],"origin":null,"destination":{"type":"stop","id":"8006220","name":"Wasserburg(Inn)Bf","location":{"type":"location","id":"8006220","latitude":48.061744,"longitude":12.185202},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}}},{"tripId":"1|249650|1|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T11:14:00+02:00","plannedWhen":"2022-04-20T11:14:00+02:00","delay":null,"platform":"1","plannedPlatform":"1","direction":"Starnberg","provenance":null,"line":{"type":"line","id":"4-800725-6","fahrtNr":"6652","name":"S 6","public":true,"adminCode":"800725","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"db-regio-ag-bayern","name":"DB Regio AG Bayern"}},"remarks":[],"origin":null,"destination":{"type":"station","id":"8005676","name":"Starnberg","location":{"type":"location","id":"8005676","latitude":47.995934,"longitude":11.34347},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":true,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|1488171|0|80|20042022","stop":{"type":"stop","id":"624538","name":"Bahnhof, Grafing b. München","location":{"type":"location","id":"624538","latitude":48.043739,"longitude":11.940677},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},"when":"2022-04-20T11:23:00+02:00","plannedWhen":"2022-04-20T11:23:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Schalldorf, Kapelle","provenance":null,"line":{"type":"line","id":"5-mvvrbu-444","fahrtNr":"14914","name":"Bus 444","public":true,"adminCode":"mvvRBU","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"624538","name":"Bahnhof, Grafing b. München","location":{"type":"location","id":"624538","latitude":48.043739,"longitude":11.940677},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}}},{"tripId":"1|251718|0|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T11:31:00+02:00","plannedWhen":"2022-04-20T11:31:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Ebersberg(Oberbay)","provenance":null,"line":{"type":"line","id":"3-b7-sev-1285801-5355333","fahrtNr":"95625","name":"Bus SEV","public":true,"adminCode":"B7____","productName":"Bus","mode":"train","product":"regional","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[{"type":"status","code":null,"text":"Track repairs: On the route Wasserburg(Inn)Bf - Grafing Bahnhof between Ebersberg(Oberbay) and Grafing Bahnhof.\nThere are delays in both directions in the regional transport of the Deutsche Bahn."}],"origin":null,"destination":{"type":"stop","id":"8001634","name":"Ebersberg(Oberbay)","location":{"type":"location","id":"8001634","latitude":48.074886,"longitude":11.970494},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|249643|2|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T11:34:00+02:00","plannedWhen":"2022-04-20T11:34:00+02:00","delay":null,"platform":"1","plannedPlatform":"1","direction":"Tutzing","provenance":null,"line":{"type":"line","id":"4-800725-6","fahrtNr":"6654","name":"S 6","public":true,"adminCode":"800725","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"db-regio-ag-bayern","name":"DB Regio AG Bayern"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8005927","name":"Tutzing","location":{"type":"location","id":"8005927","latitude":47.906815,"longitude":11.272653},"products":{"nationalExpress":true,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|251786|3|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T11:35:00+02:00","plannedWhen":"2022-04-20T11:35:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Zorneding","provenance":null,"line":{"type":"line","id":"3-b7-sev-1285801-5355333","fahrtNr":"97618","name":"Bus SEV","public":true,"adminCode":"B7____","productName":"Bus","mode":"train","product":"regional","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"station","id":"8006671","name":"Zorneding","location":{"type":"location","id":"8006671","latitude":48.089395,"longitude":11.833004},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|249665|0|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T11:48:00+02:00","plannedWhen":"2022-04-20T11:48:00+02:00","delay":null,"platform":"4","plannedPlatform":"4","direction":"Tutzing","provenance":null,"line":{"type":"line","id":"4-800725-6","fahrtNr":"6656","name":"S 6","public":true,"adminCode":"800725","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"db-regio-ag-bayern","name":"DB Regio AG Bayern"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8005927","name":"Tutzing","location":{"type":"location","id":"8005927","latitude":47.906815,"longitude":11.272653},"products":{"nationalExpress":true,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|249646|1|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T11:51:00+02:00","plannedWhen":"2022-04-20T11:48:00+02:00","delay":180,"platform":"1","plannedPlatform":"1","direction":"Ebersberg(Oberbay)","provenance":null,"line":{"type":"line","id":"4-800725-6","fahrtNr":"6649","name":"S 6","public":true,"adminCode":"800725","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"db-regio-ag-bayern","name":"DB Regio AG Bayern"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8001634","name":"Ebersberg(Oberbay)","location":{"type":"location","id":"8001634","latitude":48.074886,"longitude":11.970494},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":47.995934,"longitude":11.34347}},{"tripId":"1|392752|0|80|20042022","stop":{"type":"stop","id":"624538","name":"Bahnhof, Grafing b. München","location":{"type":"location","id":"624538","latitude":48.043739,"longitude":11.940677},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},"when":"2022-04-20T11:53:00+02:00","plannedWhen":"2022-04-20T11:53:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Aßling, Rathaus ü. Grafing Stadt (S)","provenance":null,"line":{"type":"line","id":"5-mvvrbu-447","fahrtNr":"15119","name":"Bus 447","public":true,"adminCode":"mvvRBU","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"620212","name":"Rathaus, Aßling","location":{"type":"location","id":"620212","latitude":47.992086,"longitude":12.004806},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|389064|0|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T11:55:00+02:00","plannedWhen":"2022-04-20T11:55:00+02:00","delay":0,"platform":"3","plannedPlatform":"3","direction":"München Hbf Gl.5-10","provenance":null,"line":{"type":"line","id":"brb-rb54","fahrtNr":"79072","name":"BRB RB54","public":true,"adminCode":"M8____","productName":"BRB","mode":"train","product":"regional","operator":{"type":"operator","id":"bayerische-regiobahn","name":"Bayerische Regiobahn"},"additionalName":"BRB RB54"},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8098262","name":"München Hbf Gl.5-10","location":{"type":"location","id":"8098262","latitude":48.140094,"longitude":11.555373},"products":{"nationalExpress":true,"national":true,"regionalExp":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":true,"tram":true,"taxi":false},"station":{"type":"station","id":"8000261","name":"München Hbf","location":{"type":"location","id":"8000261","latitude":48.140364,"longitude":11.558744},"products":{"nationalExpress":true,"national":true,"regionalExp":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":true,"tram":true,"taxi":false}}}},{"tripId":"1|389056|0|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T12:04:00+02:00","plannedWhen":"2022-04-20T12:04:00+02:00","delay":0,"platform":"5","plannedPlatform":"5","direction":"Kufstein","provenance":null,"line":{"type":"line","id":"brb-rb54","fahrtNr":"79067","name":"BRB RB54","public":true,"adminCode":"M8____","productName":"BRB","mode":"train","product":"regional","operator":{"type":"operator","id":"bayerische-regiobahn","name":"Bayerische Regiobahn"},"additionalName":"BRB RB54"},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8100001","name":"Kufstein","location":{"type":"location","id":"8100001","latitude":47.583509,"longitude":12.165201},"products":{"nationalExpress":true,"national":true,"regionalExp":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|392686|1|80|20042022","stop":{"type":"stop","id":"624538","name":"Bahnhof, Grafing b. München","location":{"type":"location","id":"624538","latitude":48.043739,"longitude":11.940677},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},"when":"2022-04-20T12:10:00+02:00","plannedWhen":"2022-04-20T12:10:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Eglharting, Westring ü. Grafing Stadt (S)","provenance":null,"line":{"type":"line","id":"5-mvvrbu-442","fahrtNr":"14809","name":"Bus 442","public":true,"adminCode":"mvvRBU","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"624052","name":"Eglharting Westring, Kirchseeon","location":{"type":"location","id":"624052","latitude":48.081349,"longitude":11.855127},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|252442|2|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T12:11:00+02:00","plannedWhen":"2022-04-20T12:11:00+02:00","delay":null,"platform":"11","plannedPlatform":"11","direction":"Wasserburg(Inn)Bf","provenance":null,"line":{"type":"line","id":"rb-48","fahrtNr":"27349","name":"RB 48","public":true,"adminCode":"8013D_","productName":"RB","mode":"train","product":"regional","operator":{"type":"operator","id":"db-regionetz-verkehrs-gmbh-sudostbayernbahn","name":"DB RegioNetz Verkehrs GmbH Südostbayernbahn"},"additionalName":"RB 48"},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8006220","name":"Wasserburg(Inn)Bf","location":{"type":"location","id":"8006220","latitude":48.061744,"longitude":12.185202},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}}},{"tripId":"1|249668|0|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T12:14:00+02:00","plannedWhen":"2022-04-20T12:14:00+02:00","delay":null,"platform":"1","plannedPlatform":"1","direction":"Tutzing","provenance":null,"line":{"type":"line","id":"4-800725-6","fahrtNr":"6658","name":"S 6","public":true,"adminCode":"800725","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"db-regio-ag-bayern","name":"DB Regio AG Bayern"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8005927","name":"Tutzing","location":{"type":"location","id":"8005927","latitude":47.906815,"longitude":11.272653},"products":{"nationalExpress":true,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|392661|0|80|20042022","stop":{"type":"stop","id":"624538","name":"Bahnhof, Grafing b. München","location":{"type":"location","id":"624538","latitude":48.043739,"longitude":11.940677},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},"when":"2022-04-20T12:24:00+02:00","plannedWhen":"2022-04-20T12:24:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Glonn, Bahnhofsplatz","provenance":null,"line":{"type":"line","id":"5-mvvrbu-440","fahrtNr":"14758","name":"Bus 440","public":true,"adminCode":"mvvRBU","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"621239","name":"Bahnhofsplatz, Glonn","location":{"type":"location","id":"621239","latitude":47.988913,"longitude":11.8647},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|251716|1|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T12:31:00+02:00","plannedWhen":"2022-04-20T12:31:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Ebersberg(Oberbay)","provenance":null,"line":{"type":"line","id":"3-b7-sev-1285801-5355333","fahrtNr":"95629","name":"Bus SEV","public":true,"adminCode":"B7____","productName":"Bus","mode":"train","product":"regional","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8001634","name":"Ebersberg(Oberbay)","location":{"type":"location","id":"8001634","latitude":48.074886,"longitude":11.970494},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|249643|3|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T12:34:00+02:00","plannedWhen":"2022-04-20T12:34:00+02:00","delay":null,"platform":"1","plannedPlatform":"1","direction":"Tutzing","provenance":null,"line":{"type":"line","id":"4-800725-6","fahrtNr":"6660","name":"S 6","public":true,"adminCode":"800725","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"db-regio-ag-bayern","name":"DB Regio AG Bayern"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8005927","name":"Tutzing","location":{"type":"location","id":"8005927","latitude":47.906815,"longitude":11.272653},"products":{"nationalExpress":true,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|251786|4|80|20042022","stop":{"type":"stop","id":"8002347","name":"Grafing Bahnhof","location":{"type":"location","id":"8002347","latitude":48.043424,"longitude":11.940156},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"when":"2022-04-20T12:35:00+02:00","plannedWhen":"2022-04-20T12:35:00+02:00","delay":null,"platform":null,"plannedPlatform":null,"direction":"Zorneding","provenance":null,"line":{"type":"line","id":"3-b7-sev-1285801-5355333","fahrtNr":"97622","name":"Bus SEV","public":true,"adminCode":"B7____","productName":"Bus","mode":"train","product":"regional","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"station","id":"8006671","name":"Zorneding","location":{"type":"location","id":"8006671","latitude":48.089395,"longitude":11.833004},"products":{"nationalExpress":false,"national":false,"regionalExp":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}}]
    console.log("api request is going to start with " + traincount + " connections");

    //Prüfen, ob es sich bei der Verbindung nicht um einen Bus handelt
    for (let i = 0; i <= traincount; i++) {
        console.log("CONCHECK: checking connection " + i + " ...")
        if (depatures[i].line.productName == "Bus") {
            //nichts tun
            console.log("CONCHECK: connection " + i + " skipped: bus connection.");
        }
        else {
            console.log("CONCHECK: connection " + i + " taken: not a bus connection. (connection:"+ depatures[i].line.productName + ")");
            takenconnections.push(i);
        }

    }

    //Jetzt werden die Daten aus jeder Zugverbindung extrahiert
    var firstcon = takenconnections[0];
    var lastcon = takenconnections[takenconnections.length-1];
    console.log("GETTING: Starting to get variables. Firstcon: " + firstcon + " Lastcon: " + lastcon);
    
    

    for (let i = firstcon; i<=lastcon;i++) {
        if(takenconnections.includes(i) == true) {
            lineraw[i] = depatures[i].line.name;                        //Linie
            platform[i] = depatures[i].platform;                        //Gleis
            if(depatures[i].plannedPlatform != depatures[i].platform)   //Wenn das geplante Gleis nicht gleich dem stattfindenden Gleis ist,
                {platformchange[i]=true;}                               //so wird die Variable "platformchange" auf true gesetzt.
            
            let plannedtime1 = [];                                      //Zwischenspeicher für Fahrplanzeit in normalem Format
            plannedtime1[i] = new Date(depatures[i].plannedWhen);
            plannedtime[i] = plannedtime1[i].getTime() + 7200000;       //Jetzt in Unix-Format umgerechnet; +720k, weil Zeitzonenverschiebung (+2h)

            let time1 = [];                                             //Zwischenspeicher für Zeit in normalem Format
            time1[i] = new Date(depatures[i].when);                     
            time[i] = time1[i].getTime() + 7200000;                     //Jetzt in Unix-Format umgerechnet; +720k, weil Zeitzonenverschiebung (+2h)
            
            if(plannedtime[i] != time[i]) {                             //Prüfen, ob Verspätung vorliegt
                delayed[i] = true;                                      //Die Variable "delay" wird auf true gesetzt
                delay[i] = (time[i] - plannedtime[i]) / 60000;          //und die Verspätung in Minuten berechnet
            }
            
            //In Minuten
            inMin[i] = (((time[i]) - (Date.now() + 7200000)) / 60000).toFixed();
            if(inMin[i] <= 0){inMin = " "}

            console.log("GETTING: index: " + i + " LINE: " + lineraw[i] + " DELAY: " + delay[i] + " \"");

            try {
                direction[i] = depatures[i].destination.station.name;     //Der kurze Stationsmae station.name wird, falls vorhanden, gewählt
                console.log("GETTING: index " + i + ": Short station name taken: \"" + direction[i] + " \"");
            }
            catch(err) {
                direction[i] = depatures[i].direction;
                console.log("GETTING: index " + i + ": Direction name taken: \"" + direction[i]);
            }
        }
    }
    
    console.log("WRITE: Writing Text is being prepared...");
    console.log("WRITE: Coordinates are beeing recieved...");
    
    var xcoords = [512, 672, 832, 1000];
    var ycoords = [500, 772, 2470, 3480];

    var currentline = 0;
    for(let i=0; i<=traincount; i++) {

        if(direction[i] != null /*Prüfen ob Eintrag gültig oder leer (weil gefiltert)*/){
            currentline++;
            console.log("WRITE: Connection to " + direction[i] + " will be written (id " + i+"), NUMBER " + currentline)    //Die Variable currentline wird benutzt, um die aktuelle Zeile festzustellen. Sie wird nur um eins erhöht, wenn ein Zug wirklich geschrieben wird.
            
            var  lineContext = c.getContext("2d");
            lineContext.font = "140px lcdzza10px-linien"
            lineContext.fillStyle ="white";
            lineContext.textAlign = "left"; 
            lineContext.fillText(linieumwandeln(lineraw[i]), ycoords[0], xcoords[currentline-1]); 

            var  platformContext = c.getContext("2d");
            platformContext.font = "140px lcdzza10px"
            platformContext.fillStyle ="white";
            platformContext.textAlign = "end"; 
            platformContext.fillText(platform[i], ycoords[2], xcoords[currentline-1]);      //TODO: weiß hinterlegte Schrift, falls platformchange == true

            var  destContext = c.getContext("2d");
            destContext.font = "140px lcdzza10px"
            destContext.fillStyle ="white";
            destContext.textAlign = "left"; 
            destContext.fillText(direction[i], ycoords[1], xcoords[currentline-1]);

            if(inMin[i] > 0)
            {var  minContext = c.getContext("2d");
            minContext.font = "140px lcdzza10px"
            minContext.fillStyle ="white";
            minContext.textAlign = "end"; 
            minContext.fillText(inMin[i], ycoords[3], xcoords[currentline-1]);
        }        
        }
        else {
            console.log("WRITE: Connection " + i +" will NOT be written (id " + i +" ), NUMBER ")
        }

        
        
    }


    /*Benötigte Variablen:
    -Linie (umgewandelt, das wird aber in einer anderen Funktion erledigt),
    -Ziel
    -Zeit (in Minuten umgewandelt)
    -Verspätung (in Minuten)
    -Gleis
    -evtl. Belegung*/
    
    
    /*var dest1 = depatures[0].direction;
    var time1 = depatures[0].when;
    var line1 = depatures[0].line.name;
    console.log("Ziel: " + dest1);
    console.log("Zeit: " + time1);
    console.log("Linie: " + line1)*/
}