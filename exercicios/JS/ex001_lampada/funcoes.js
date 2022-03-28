const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn () {
    lamp.src = '/exercicios/JS/ex001_lampada/ligada.jpg';    
}

turnOn.addEventListener ('click', lampOn);