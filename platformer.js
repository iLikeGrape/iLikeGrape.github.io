//board
let board;
let boardWidth = 800;
let boardHeight = 500;
let context;

//player
let playerX = 400;
let playerY = 400;
let playerWidth = 50;
let playerHeight = 50;

//player physics
let playerVelY = 0;
let playerVelX = 0;
let onGround = true;
let gravity = .4;
let groundHeight = 400;

let player = {
    x : playerX,
    y : playerY,
    width : playerWidth,
    height : playerHeight,
};

window.onload = function() { //when game starts 
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //drawing player box
    context.fillStyle="green";
    context.fillRect(player.x, player.y, player.width, player.height);

    document.addEventListener("keydown", function(e){
        switch(e.key){
            case "ArrowLeft":
                moveLeft = true;
            case "a":
                moveLeft = true;
            case "ArrowRight":
                moveRight = true;
            case "d":
                moveRight = true;
            case " ":
                e.preventDefault()
                    playerVelY = -10;
            case "w":
                    playerVelY = -10;       
            case "ArrowUp":
                    playerVelY = -10;
        }
    }, false);
    window.addEventListener("keyup", function(e){
        switch(e.key){
            case "ArrowLeft":
                moveLeft = false
            case "a":
                moveLeft = false
            case "ArrowRight":
                moveRight = false
            case "d":
                moveRight = false
        }
    }, false);
    
    requestAnimationFrame(update);

}
function update() {
    requestAnimationFrame(update);
    console.log("update")
    //preping for next frame

    //player X movement

    if(moveLeft && !moveRight){
        Xspeed = -5
    }
    if(moveRight && !moveLeft){
        Xspeed = 5
    }
    if(!moveLeft && !moveRight){
        Xspeed = 0
    }
    //player x movement
    player.x += playerVelX
    //player Y movement
    playerVelY += gravity;
    player.y = Math.min(player.y + playerVelY, groundHeight)

    context.clearRect(0, 0, board.width, board.height);
    context.fillStyle="green";
    context.fillRect(player.x, player.y, player.width, player.height);
    context.fillText(moveLeft, 40, 20)
    context.fillText(moveRight,40, 50)
    context.fillText(playerVelX, 5, 20)
    context.fillText(playerVelY, 5, 50)

};

function xCollision(a, b) { // checks is the left or right sides are touching
    return a.x <= b.x + b.width &&   //a's left side is to the left of b's right side 
         a.x + a.width >= b.x;  //a's right side is to the right b's left side
}
function yCollision(a, b) {
    return a.y <= b.y + b.height &&  //a's top side is above b's bottom side
        a.y + a.height >= b.y;    //a's bottom side is under b's top side
}
