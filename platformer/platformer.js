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
let moveLeft = false;
let moveRight = false;


let player = {
    x : playerX,
    y : playerY,
    width : playerWidth,
    height : playerHeight,
};

let platform = {
    x : null,
    y : null,
    width : null,
    height : null,
};

let platformArray = []

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
                moveLeft = true
                break;
            case "a":
                moveLeft = true
                break;
            case "ArrowRight":
                moveRight = true
                break;
            case "d":
                moveRight = true
                break;
            case " ":
                e.preventDefault()
                playerVelY = -10;
                break;
            case "w":
                playerVelY = -10; 
                break;      
            case "ArrowUp":
                playerVelY = -10;
                break;

        }
    }, false);
    window.addEventListener("keyup", function(e){
        switch(e.key){
            case "ArrowLeft":
                moveLeft = false
                break;
            case "a":
                moveLeft = false
                break;
            case "ArrowRight":
                moveRight = false
                break;
            case "d":
                moveRight = false
                break;
        }
    }, false);
    createPlatforms();
    requestAnimationFrame(update);

}
function update() {
    requestAnimationFrame(update);
    console.log("update")
    context.clearRect(0, 0, board.width, board.height);
    //preping for next frame

    //determining movement
    if(moveLeft && !moveRight){
        playerVelX = -5
    }
    if(moveRight && !moveLeft){
        playerVelX = 5
    }
    if(!moveLeft && !moveRight){
        playerVelX = 0
    }
    //calculating gravity
    playerVelY += gravity;

    //for quicksand, sent playerVelY to gravity while touching and dont check sides
    for (let i = 0; i < platformArray.length; i++) { //drawing platforms 
        let platform = platformArray[i];
        context.fillRect(platform.x, platform.y, platform.width, platform.height);

    };

    //player x movement
    player.x += playerVelX
    player.y = Math.min(player.y + playerVelY, groundHeight)

    context.fillStyle="green";
    context.fillRect(player.x, player.y, player.width, player.height);
    context.fillText(moveLeft, 40, 20)
    context.fillText(moveRight,40, 50)
    context.fillText(playerVelX, 5, 20)
    context.fillText(playerVelY, 5, 50)

};

function createPlatforms() {
    platform.height = 25;
    platform.width = 150;
    platform.x = 50;
    platform.y = 200;
    platformArray.push(platform);
};
