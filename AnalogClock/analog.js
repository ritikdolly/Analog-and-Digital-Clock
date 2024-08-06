let hour=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

//digital clock
let date = document.getElementById("date");
let hr = document.getElementById("hr");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");



function displayTime() {
    let time = new Date();
    //getting hours,min, sec from date
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    
    
    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform =`rotate(${mRotation}deg)`;
    sec.style.transform =`rotate(${sRotation}deg)`;

    //digital clock 

    const monthName = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"];
    const dayName = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]

    date.innerHTML=`${dayName[time.getDay()]} ${time.getDate()} ${monthName[time.getMonth()]} ${time.getFullYear()}`;

    hr.innerHTML=`${hh<10?'0'+hh:hh}`;
    mins.innerHTML=`${mm<10?'0'+mm:mm}`;
    secs.innerHTML=`${ss<10?'0'+ss:ss}`;

}

setInterval(displayTime,1000);

