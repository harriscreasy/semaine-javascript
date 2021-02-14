function clock(){
    let hour = document.querySelector("#hour");
    let minute = document.querySelector("#minute");
    let seconde = document.querySelector("#seconde");
    let milli = document.querySelector("#milli");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ml = new Date().getUTCFullYear();

    hour.innerHTML = h;
    minute.innerHTML = m;
    seconde.innerHTML = s;
    milli.innerHTML = ml; 
}

let interval = setInterval(clock, 1000); 