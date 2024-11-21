//board
let board;
let boardWidth = 500;
let boardHeight = 600;
let context;

let gameOver = false

//ship
let shipWidth = 64;
let shipHeight = 64;
let shipX = 218;
let shipY = 504;
let shipImg; 

//bullet
let bulletArray = [];
let bulletWidth = 5;
let bulletHeight = 12;
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
   
    window.addEventListener('keydown', function(e) { //prevents scrolling with space?
        if(e.key == 32 && e.target == document.body) {
          e.preventDefault();
        }
      });
    
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
                        y : 600,
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
        context.drawImage(bullet.img, bullet.x, bullet.y, bullet.width*2, bullet.height*2);
    }
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
};