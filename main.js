function drawLine(context, startX, startY, endX, endY, lineWidth) {
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.lineWidth = lineWidth;
  context.strokeStyle = "#0059b3";
  context.stroke();
};

function drawSnake() {
  requestID = requestAnimationFrame(drawSnake);
  snakeCTX.save();
  snakeCTX.clearRect(0, 0, 600, 600);
  snakeCTX.restore();
  snakeCTX.beginPath();
  



  if (positionNew == positionOld) {
    if (positionNew == 2 || positionNew == 4) {
      snakeStartX += varianceX;
      snakeEndX += varianceX;
      drawLine(snakeCTX, snakeStartX, snakeStartY, snakeEndX, snakeEndY, 7);
    } else if (positionNew == 1 || positionNew == 3) {
      snakeStartY += varianceY;
      snakeEndY += varianceY;
      drawLine(snakeCTX, snakeStartX, snakeStartY, snakeEndX, snakeEndY, 7);
    }
  } else if (positionOld == 2 && positionNew == 4) {
    var temp = snakeStartX;
    snakeStartX = snakeEndX;
    snakeEndX = temp;
    varianceX = -2;
    snakeStartX += varianceX;
    snakeEndX += varianceX;
    drawLine(snakeCTX, snakeStartX, snakeStartY, snakeEndX, snakeEndY, 7);
  } else if (positionOld == 4 && positionNew == 2) {
    var temp = snakeStartX;
    snakeStartX = snakeEndX;
    snakeEndX = temp;
    varianceX = 2;
    snakeStartX += varianceX;
    snakeEndX += varianceX;
    drawLine(snakeCTX, snakeStartX, snakeStartY, snakeEndX, snakeEndY, 7);
  } else if (positionOld == 1 && positionNew == 3) {
    var temp = snakeStartY;
    snakeStartY = snakeEndY;
    snakeEndY = temp;
    varianceY = -2;
    snakeStartY += varianceY;
    snakeEndY += varianceY;
    drawLine(snakeCTX, snakeStartX, snakeStartY, snakeEndX, snakeEndY, 7);
  } else if (positionOld == 3 && positionNew == 1) {
    var temp = snakeStartY;
    snakeStartY = snakeEndY;
    snakeEndY = temp;
    varianceY = 2;
    snakeStartY += varianceY;
    snakeEndY += varianceY;
    drawLine(snakeCTX, snakeStartX, snakeStartY, snakeEndX, snakeEndY, 7);
  } 
  if (snakeEndX > 600 || snakeEndX < 0 || snakeStartY < 0 || snakeEndY > 600) {
    cancelAnimationFrame(requestID);
    snakeStartX = 100;
    snakeStartY = 100;
    snakeEndX = 200;
    snakeEndY = 100;
    positionNew = 2;
    positionOld = 2;
    varianceX = 2;
    drawSnake();
  }
};

function drawBoard() {
  boardCTX.save();
  boardCTX.clearRect(0, 0, 600, 600);
  boardCTX.restore();
  boardCTX.beginPath();
  pointX = Math.floor((Math.random() * 580) + 1);
  pointY = Math.floor((Math.random() * 580) + 1);
  drawLine(boardCTX, pointX, pointY, pointX, pointY + 10, 10);
  boardCTX.closePath();
};

var boardCan = document.getElementById("boardCan");
var snakeCan = document.getElementById("snakeCan");
var boardCTX = boardCan.getContext("2d");
var snakeCTX = snakeCan.getContext("2d");
var snakeStartX = 100;
var snakeStartY = 100;
var snakeEndX = 200;
var snakeEndY = 100;
var pointX;
var pointY;
var varianceX = 2;
var varianceY = 2;
var positionOld = 2;
var positionNew = 2;
drawSnake();
drawBoard();


document.addEventListener('keydown', function(event) {
  //Left
  if ((event.keyCode || event.which) == 37) {
    positionOld = positionNew;
    positionNew = 4;

  }
  //Right
  else if ((event.keyCode || event.which) == 39) {
    positionOld = positionNew;
    positionNew = 2;
  }
  //Down
  else if ((event.keyCode || event.which) == 40) {
    positionOld = positionNew;
    positionNew = 1;

  }
  //Up
  else if ((event.keyCode || event.which) == 38) {
    positionOld = positionNew;
    positionNew = 3;
  }


});
