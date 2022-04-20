function request() {
    var out2;
    fetch('https://v5.db.transport.rest/stops/8002347/departures?duration=120').then(res => res.json()).then((out) => {out2 = out}).catch(err =>console.error(err));
    console.log(out2);
}
