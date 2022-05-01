//https://v5.db.transport.rest/stops/8002347/departures?duration=120


var zug1linie = "";
var zug2linie = "";
var zug3linie = "";
var zug4linie = "";

var zzalines = 4; //Linien des ZZAs

let takenconnections = [];
let linecount = [];
let lineraw = [];
var productName = [];
let platform = [];
let platformchange = [];
let plannedtime = [];
let time = [];
let delayed = [];
let delay = [];
let direction = [];
var inMin = [];
var departures = null;
var phipsiart = null;
var allowAnimations = false;
var apiurl = null;
var ibnrinput = null;
var requestedduration = 120;
var data;
var res =[];

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
    apicall();

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

function linieumwandeln (ddel, productName = null) {
    
    try{var select = document.getElementById(ddel);
    var value = select.options[select.selectedIndex].text;
    }
    catch(err){
        var value=ddel;
    }
    var wert;
         if (value == "S1" || value == "S 1"){wert = "1";}
    else if (value == "S2" || value == "S 2"){wert = "2";}
    else if (value == "S3" || value == "S 3"){wert = "3";}
    else if (value == "S4" || value == "S 4"){wert = "4";}
    else if (value == "S6" || value == "S 6"){wert = "6";}
    else if (value == "S7" || value == "S 7"){wert = "7";}
    else if (value == "S8" || value == "S 8"){wert = "8";}
    else if (value == "RB" || value.includes("RB")){wert = "B";}
    else if (value == "RE" || value.includes("RE")){wert = "E";}
    else if (productName == "ICE"){wert = "I"; console.log("------------")}
    else {wert = "";}
    return wert;
}

async function searchstation(searchstring, outputtf){
    api_url = "https://v5.db.transport.rest/stations?fuzzy=true&query="+ searchstring;
        if(searchstring == null){return;}
    
        //Abrufen der API
        console.log("SEARCH: Starting to call the API for station IBNRs for request \""+ searchstring +"\"...")

        try{
            var response = await fetch(api_url);
            res = await response.json();
            console.log(res);
        }
        catch(err) { //Fehlermeldung, falls der Abruf nicht geklappt hat,
        console.log("CALLING ERROR: The API call did not work. Just try again. Cancelling operation..."); return;   
        }

        //document.getElementById(outputtf).value = respons[0].
}

async function apirequest(traincount){
    leeren();                               //Bildschirm leeren

    var res = document.getElementsByName('datasource'); //auto: Daten sollen autmatisch aberufen, manual: daten sollen manuell eingegeben werden

    if(res[1].checked){
        console.log("GENERATING: Generating URL of API request...");
        ibnrinput = document.getElementById("ibIBNR").value;
        if(ibnrinput==null){console.log("GENERATING: IBNR input was null. Cancelling operation."); return;}
        apiurl = "https://v5.db.transport.rest/stops/"+ ibnrinput + "/departures?duration=" + requestedduration;


        //Abrufen der API
        console.log("CALLING: Starting to call the API with "+traincount+" connections...")
        console.log("CALLING: API-URL:" + apiurl)

        try{
            
            var response = await fetch(apiurl);
            departures = await response.json();
            console.log(departures);
        }
        catch(err) { //Fhlermeldung, falls der Abruf nicht geklappt hat,
        console.log("CALLING ERROR: The API call did not work. Just try again. Cancelling operation...");   
        }
        console.log("CALLING: Succesfully called API data")
        
        console.log("INFORMATION: Traincount: " + traincount + " departures.length: " + departures.length)
        

        //Prüfen, ob es sich bei der Verbindung nicht um einen Bus handelt
        for (let i = 0; i <= traincount; i++) {
            //console.log("CONCHECK: checking connection " + i + " ...")
            try{
                if (departures[i].platform != null) { //departures[i].line.product == "suburban" || departures[i].line.product == "regional" || departures[i].line.product == "nationalExpress"
                    console.log("CONCHECK: connection " + i + " taken: "+ departures[i].line.productName + " connection.");
                    takenconnections.push(i);
                }
                else {
                    //nichts tun
                    console.log("CONCHECK: connection " + i + " skipped: " + departures[i].line.productName + " connection.");
                }
            } catch(err){
                console.log("ERROR: "+ err);
                console.log("CONCHECK: Error. Probably reached connection limit. Starting function again with more connections...");
                alert("Da hat etwas nicht geklappt. Bitte nochmal versuchen.");
                requestedduration = requestedduration * 4;
                
                return;
            }

        }

        //Jetzt werden die Daten aus jeder Zugverbindung extrahiert
        var firstcon = takenconnections[0];
        var lastcon = takenconnections[takenconnections.length-1];
        console.log("GETTING: Starting to get variables. Firstcon: " + firstcon + " Lastcon: " + lastcon);
        
        

        for (let i = firstcon; i<=lastcon;i++) {
            if(takenconnections.includes(i) == true) {
                lineraw[i] = departures[i].line.name;                        //Linie
                productName[i] = departures[i].line.productName;              //Produktname, z.B. "ICE", "S" (statt "S 6")
                platform[i] = departures[i].platform;                        //Gleis
                if(departures[i].plannedPlatform != departures[i].platform)   //Wenn das geplante Gleis nicht gleich dem stattfindenden Gleis ist,
                    {platformchange[i]=true;}                               //so wird die Variable "platformchange" auf true gesetzt.
                
                let plannedtime1 = [];                                      //Zwischenspeicher für Fahrplanzeit in normalem Format
                plannedtime1[i] = new Date(departures[i].plannedWhen);
                plannedtime[i] = plannedtime1[i].getTime() + 7200000;       //Jetzt in Unix-Format umgerechnet; +720k, weil Zeitzonenverschiebung (+2h)

                let time1 = [];                                             //Zwischenspeicher für Zeit in normalem Format
                time1[i] = new Date(departures[i].when);                     
                time[i] = time1[i].getTime() + 7200000;                     //Jetzt in Unix-Format umgerechnet; +720k, weil Zeitzonenverschiebung (+2h)
                
                if(plannedtime[i] != time[i]) {                             //Prüfen, ob Verspätung vorliegt
                    delayed[i] = true;                                      //Die Variable "delay" wird auf true gesetzt
                    delay[i] = (time[i] - plannedtime[i]) / 60000;          //und die Verspätung in Minuten berechnet
                }
                
                //In Minuten
                inMin[i] = (((time[i]) - (Date.now() + 7200000)) / 60000).toFixed();
                //if(inMin[i] <= 0){inMin = " "; console.log("NOW: Train " + i + " is depaturing now")} //Falls der Zug in der aktuellen Minute abfährt, wird auf dem Display keine Minutenangabe mehr angezeigt

                console.log("GETTING: index: " + i + " LINE: " + lineraw[i] + " DELAY: " + delay[i] + " \"");

                try {
                    direction[i] = departures[i].destination.station.name;     //Der kurze Stationsmae station.name wird, falls vorhanden, gewählt
                    console.log("GETTING: index " + i + ": Short station name taken: \"" + direction[i] + " \"");
                }
                catch(err) {
                    direction[i] = departures[i].direction;
                    console.log("GETTING: index " + i + ": Direction name taken: \"" + direction[i]);
                }
                
                //Bei Bahnhöfen, die mit München, Berlin, etc. beginnen, das wegkürzen (wird bei S-Bahn-Anzeigern auch nicht angezeigt)
                var replace1 = ["München Leuchtenbergring", "München-Pasing", "München Flughafen Terminal"]
                var replace2 = ["Leuchtenbergring", "Pasing", "Flughafen/Airport °"];
                        
                for (j=0; j<=replace1.length; j++)
                {
                    if(direction[i]==(replace1[j]))
                    {
                        console.log("REPLACING: Replacing \"" + replace1[j] + "\" with \"" + replace2[j] +"\"");
                        try{
                            direction[i] = replace2[j];
                        } catch(err) {
                            console.log("REPLACING: Error!")
                        }
                    }
                }

                if(direction[i].includes("(") && direction[i].slice(-1)==")"){      //Falls ein Bfsname "(" beinhaltet und mit ")" endet
                                                                                    //Ausdrücke, die in Klammern gesetzt sind, entfernen
                    var tempdir =  direction[i].split('(')                        //Ausdrücke, die in Klammern gesetzt sind, entfernen
                    direction[i] = tempdir[0];
                }
                
            }
        }
    } else{
        //======DATEN MANUELL ABFRAGEN=======
        for(let i=0; i<=3; i++) {   //y zeigt die aktuelle Zeile im ZZA
            var destinput = [];
            destinput[i] = [document.getElementById("ibZug1ziel"), document.getElementById("ibZug2ziel"), document.getElementById("ibZug3ziel"), document.getElementById("ibZug4ziel")];
            var destinput2 = [];
            destinput2[i] = ["ibZug1ziel", 'ibZug2ziel']
            try{
                console.log("GETTINGDATA: Going to write train to "+ document.getElementById(destinput2[i]).value)
            } catch(err) {
                console.log("GETTINGDATA: Error. ConID: " + i)
            }
            //direction[y] = document.getElementById(destinput[y]).value;

        }
    }
    
    
    
    console.log("WRITE: Writing Text is being prepared...");
    console.log("WRITE: Coordinates are beeing recieved...");
    
    var xcoords = [512, 672, 832, 1000];
    var ycoords = [500, 772, 2470, 3480];

    var currentline = 0;
    for(let i=0; i<=traincount; i++) {

        if(direction[i] != null /*Prüfen ob Eintrag gültig oder leer (weil gefiltert)*/){
            
            //if(delay[i-1] == 0){currentline++;} //Die Variable currentline wird benutzt, um die aktuelle Zeile festzustellen. Sie wird nur um eins erhöht, wenn ein Zug wirklich geschrieben wird.
            currentline++;
            console.log("WRITE: Connection to " + direction[i] + " will be written (id " + i+"), NUMBER " + currentline)    
            
            var  lineContext = c.getContext("2d");
            lineContext.font = "140px lcdzza10px-linien"
            lineContext.fillStyle ="white";
            lineContext.textAlign = "left"; 
            lineContext.fillText(linieumwandeln(lineraw[i], departures[i].line.productName), ycoords[0], xcoords[currentline-1]); 

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
            } else{console.log("NOW: Train in line " + currentline + " is depaturing now")}       
        }
        else {
            console.log("WRITE: Connection " + i +" will NOT be written (id " + i +", line: " +(currentline+1)+" )")
        }

        
        
    }


    /*Benötigte Variablen:
    -Linie (umgewandelt, das wird aber in einer anderen Funktion erledigt),
    -Ziel
    -Zeit (in Minuten umgewandelt)
    -Verspätung (in Minuten)
    -Gleis
    -evtl. Belegung*/
    
    
    /*var dest1 = departures[0].direction;
    var time1 = departures[0].when;
    var line1 = departures[0].line.name;
    console.log("Ziel: " + dest1);
    console.log("Zeit: " + time1);
    console.log("Linie: " + line1)*/
}

async function searchstations() {
    const stationresponse = await fetch('/searchstations');
    const stationanswer = await stationresponse.json();
    console.log(stationanswer)
}



/*async function nextstation() {
    if('geolocation' in navigator) {
        console.log("Getting user location...")
        navigator.geolocation.getCurrentPosition(async position => {
            console.log(position.coords);
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const location = {lon, lat}
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(location)
            }
            const response = await fetch('/locate', options)
            const data = await response.json();
            console.log(data);
          });
        
    } else {
        alert("An error occured attempting to get usere's geolocation. Make sure you are connected to the website via https.")
    }
}*/