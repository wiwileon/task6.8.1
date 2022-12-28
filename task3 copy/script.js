const trafficLightG = document.querySelector('#trafficLightG');
const trafficLightY = document.querySelector('#trafficLightY');
const trafficLightR = document.querySelector('#trafficLightR');

function makeGreen() {
    trafficLightG.style.background = ('green');
    trafficLightY.style.background = ('black');
    trafficLightR.style.background = ('black');
    trafficLightG.removeEventListener('click', makeGreen);
    trafficLightY.removeEventListener('click', makeGreen)
    trafficLightR.removeEventListener('click', makeGreen)
    trafficLightG.addEventListener('click', makeYellow);
    trafficLightY.addEventListener('click', makeYellow);
    trafficLightR.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightG.style.background = ('black');
    trafficLightY.style.background = ('yellow');
    trafficLightR.style.background = ('black');
    trafficLightG.removeEventListener('click', makeYellow);
    trafficLightY.removeEventListener('click', makeYellow)
    trafficLightR.removeEventListener('click', makeYellow)
    trafficLightG.addEventListener('click', makeRed);
    trafficLightY.addEventListener('click', makeRed);
    trafficLightR.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightG.style.background = ('black');
    trafficLightY.style.background = ('black');
    trafficLightR.style.background = ('red');
    trafficLightG.removeEventListener('click', makeRed);
    trafficLightY.removeEventListener('click', makeRed)
    trafficLightR.removeEventListener('click', makeRed)
    trafficLightG.addEventListener('click', makeGreen);
    trafficLightY.addEventListener('click', makeGreen);
    trafficLightR.addEventListener('click', makeGreen);
}

trafficLightG.addEventListener('click', makeGreen);
trafficLightY.addEventListener('click', makeYellow);
trafficLightR.addEventListener('click', makeRed);