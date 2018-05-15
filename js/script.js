// Declaración de constantes
const w = window;

// Timing Function
var countDownDate = new Date("May 26, 2018 12:00:00").getTime();
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("secound").innerHTML = seconds;


    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// Load Window Function
function onloadWindow(){
    setTimeout(spin, 2000);
}

function spin(){
    const doc = document;
    doc.getElementById('preload').classList.add('hide');
    doc.getElementById('spinner').classList.remove('fa-spin');
}

w.onload = onloadWindow;
