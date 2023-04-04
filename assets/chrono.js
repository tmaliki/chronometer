/**
 * TP Chrono
 */
let timerVal = 0;
let chronoId = document.querySelector('#chronoId');
let startId = document.querySelector('#startId');
let stopId = document.querySelector('#stopId');
let resetId = document.querySelector('#resetId');

let heure = 0;
let minutes = 0;
let secondes = 0;
let msecondes = 0;

// start chrono
startId.addEventListener('click', startChrono);
function startChrono() {
    timerVal = setInterval(() => {
        // affichage
        let heureShow = (heure < 10) ? "0"+ heure : heure;
        let minutesShow = (minutes < 10) ? "0"+ minutes : minutes;
        let secondesShow = (secondes < 10) ? "0"+ secondes : secondes;
        let msecondesShow = (msecondes < 10) ? "0"+ msecondes : msecondes;
        chronoId.innerHTML = heureShow +" : "+ minutesShow +" : "+ secondesShow +" : "+ msecondesShow;
        
        msecondes += 1;
        if(msecondes >= 10) {
            msecondes = 0;
            secondes += 1;
        }

        if(secondes >= 60) {
            secondes = 0;
            minutes += 1;
        }
        
        if(minutes >= 60) {
            minutes = 0;
            heure += 1;
        }
    }, 100);
    startId.setAttribute('disabled', '');
}

// stop chrono
stopId.addEventListener('click', stopChrono);
function stopChrono() {
    clearInterval(timerVal);
    startId.removeAttribute('disabled');
}

// reset chrono
resetId.addEventListener('click', resetChrono);
function resetChrono() {
    heure = 0;
    minutes = 0;
    secondes = 0;
    msecondes = 0;
    clearInterval(timerVal);
    chronoId.innerHTML = "00 : 00 : 00 : 00";
    startId.removeAttribute('disabled');
}
