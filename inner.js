var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

window.onload = function() {
    var block = document.querySelectorAll('.el');
    for (var i = 0; i < block.length; i++) {
        block[i].onclick = handleClick;
        block[i].style.backgroundColor = getRandomColor();
    }
};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function handleClick(event) {
    event.stopPropagation();
    console.log(event);
    this.style.backgroundColor = getRandomColor();
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