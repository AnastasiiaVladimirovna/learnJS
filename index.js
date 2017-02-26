var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

window.onload = function() {
    var squareNumber = prompt("Какое количество квадратов вы хотите ввести?");
    for (var i = 0; i < squareNumber; i++) {
        addNewBlock();
    }
    getNewColor();
};

function getNewColor(){
    getChangeColor();
    setTimeout(function(){getNewColor();},1000);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getChangeColor(event) {
    var allElements = document.querySelectorAll('.el');
    var randCorner = Math.floor( Math.random()*(allElements.length)+0);
    allElements[randCorner].style.backgroundColor = getRandomColor();
    if (areSameColor()) {
        setTimeout(function() {
            alert("Цвет одинаковый");
        }, 50);
    }
}

function areSameColor() {
    var elements = document.querySelectorAll('.el');
    var sameColor = elements[0].style.backgroundColor;
    for (var i = 0; i < elements.length; i++) {
        if (sameColor !== elements[i].style.backgroundColor) {
            return false;
        }
    }
    return true;
}

function addNewBlock() {
    var elements = document.querySelectorAll('.el');
    var elementNumbers =elements[elements.length-1];
    var elementWidth =elementNumbers.offsetWidth;
    var elementHeight =elementNumbers.offsetHeight;
    var newElement = document.createElement('div');
    newElement.className = 'el';
    newElement.style = "position:absolute; top:5px;left:5px;"
    newElement.style.width = elementWidth - 10;
    newElement.style.height = elementHeight - 10;
    newElement.style.backgroundColor = getRandomColor();
    elementNumbers.appendChild(newElement);
}