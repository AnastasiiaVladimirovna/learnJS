var $container;
var $setButton;
var $userInput;
var balls = [];
var isPlaying = false;

$(function() {
    $container = $('#borders');
    $userInput = $('#txtBalls');
    $setButton = $('#btnSet');

    $setButton.on('click', handleSend);
    $container.on('click', loop);
    $container.on('mouseover', function(e) {
        mouseover = true;
        mouseOver();
        multiCollision();

    });
    $container.on('mouseout', function() {
        mouseover = false;
        mouseOver();
    });
})


function mouseOver() {
    if (!isPlaying) {
        isPlaying = true;
        requestAnimationFrame(loop);
    } else if (isPlaying) {
        isPlaying = false;
    }
}

function removeAllBalls() {
    $container.empty();
    balls = [];
}

function addNewBall(ballSize) {
    var $newBall = $('<div>');
    $newBall.addClass('ball');

    //   Увеличивать размер шара
    $newBall.width(ballSize);
    $newBall.height(ballSize);

    $newBall.css("left", Math.random() * $container.width())
    $newBall.css("top", Math.random() * $container.height());

    balls.push({
        isDown: Math.random() > 0.5 ? true : false,
        isTop: Math.random() > 0.5 ? true : false,
        speed: 5 + 4 * Math.random(), //in range from 5 to 9
        element: $newBall
    });

    $container.append($newBall);
}

function handleSend() {
    var userChoice = parseInt($userInput.val());
    var ballSize = 40;
    if (userChoice > 5) {
        alert('Введите количество меньше либо равное 5');
        return;
    }
    removeAllBalls();
    for (var i = 1; i <= userChoice; i++) {
        addNewBall(i * 10);
    }
}

function loop() {

    for (var i = 0; i < balls.length; i++) {
        var $ball = balls[i].element;
        var posLeft = parseInt($ball.css("left"));
        var posTop = parseInt($ball.css("top"));
        if (posTop < 0) {
            balls[i].isDown = true;
        }
        if (posTop > $container.height() - $ball.height()) {
            balls[i].isDown = false;
        }
        if (posLeft < 0) {
            balls[i].isRight = true;
        }
        if (posLeft > $container.width() - $ball.width()) {
            balls[i].isRight = false;
        }
        if (balls[i].isRight) {
            posLeft = posLeft + balls[i].speed;
        } else {
            posLeft = posLeft - balls[i].speed;
        }
        if (balls[i].isDown) {
            posTop = posTop + balls[i].speed;
        } else {
            posTop = posTop - balls[i].speed;
        }
        $ball.css("left", posLeft);
        $ball.css("top", posTop);

    }
    if (isPlaying === true) {
        requestAnimationFrame(loop);
    }
}
