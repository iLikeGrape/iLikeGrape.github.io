//board
let board;
let boardWidth = 500;
let boardHeight = 600;
let context;

let gameOver = false

//ship
let shipWidth = 75;
let shipHeight = 95;
let shipX = 218;
let shipY = 500;
let shipImg; 
//actual dimentions
//21px from left edge
//24px from right edge
//middle at 45 from left edge
//middle 51 from right edge

//bullet
let bulletArray = [];
let bulletWidth = 75;
let bulletHeight = 95;
let bulletX = 218

//ship varuble
let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}

//physics for ship

let Xspeed = 0;
let moveLeft = false;
let moveRight = false;

//physics for bullet
let bulletSpeed = 2
window.onload = function() { //when game starts 
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //draw initial dinosaur
    // context.fillStyle="green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);

    shipImg = new Image();
    shipImg.src = "./spaceinvadersImgs/ship.png";
    shipImg.onload = function() {
        console.log("imgLoaded")
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }
    bulletImg = new Image();
    bulletImg.src = "./spaceinvadersImgs/bullet.png";

    
    window.addEventListener("keydown", function(e){
        switch(e.key){
            case "ArrowLeft":
                moveLeft = true
                break;
            case "ArrowRight":
                moveRight = true
                break;
            case " ":
                console.log("shoot bullet")
                if (e.key === " "){
            
                    //place bullet
                    let bullet = {
                        img : bulletImg,
                        x : ship.x,
                        y : 536,
                        width : bulletWidth,
                        height: bulletHeight
                    }
                        bulletArray.push(bullet); //add bullet at this moment to the array
            
                    if (bulletArray.length > 25) {
                        bulletArray.shift(); //remove the first element from the array so that the array doesn't constantly grow
                    }
                }

        }
    }, false);
    window.addEventListener("keyup", function(e){
        switch(e.key){
            case "ArrowLeft":
                moveLeft = false
                break;
            case "ArrowRight":
                moveRight = false
                break;
            
        }
    }, false);
    update()
}
function update(){
    requestAnimationFrame(update);
    console.log("update")
    //preping for next frame
    if (gameOver) {
        return;
    }

    if(ship.x < 0 && Xspeed == -5 || ship.x > 500 && Xspeed == 5){
        Xspeed = 0
    }
    ship.x += Xspeed;   

    if(moveLeft && !moveRight){
        Xspeed = -5
    }
    if(moveRight && !moveLeft){
        Xspeed = 5
    }
    if(!moveLeft && !moveRight){
        Xspeed = 0
    }
   

    context.clearRect(0, 0, board.width, board.height);

    for (let i = 0; i < bulletArray.length; i++) {
        let bullet = bulletArray[i];
        bullet.y -= bulletSpeed;
        context.drawImage(bullet.img, bullet.x, bullet.y, bullet.width, bullet.height);
    }
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
};