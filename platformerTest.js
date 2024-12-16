let board;
let boardWidth = 800;
let boardHeight = 500;
let context;

// Player properties
let playerX = 400;
let playerY = 400;
let playerWidth = 50;
let playerHeight = 50;

// Player physics
let playerVelY = 0;
let playerVelX = 0;
let onGround = true;
let gravity = 0.4;
let groundHeight = 400;
let moveLeft = false;
let moveRight = false;

let player = {
    x: playerX,
    y: playerY,
    width: playerWidth,
    height: playerHeight,
};

let platform = {
    x: null,
    y: null,
    width: null,
    height: null,
};

let platformArray = []

window.onload = function () { //when game starts
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    // Create platforms
    createPlatforms();

    document.addEventListener("keydown", function (e) {
        switch (e.key) {
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
                if (onGround) {
                    playerVelY = -10;
                    onGround = false;
                }
                break;
            case "w":
                if (onGround) {
                    playerVelY = -10;
                    onGround = false;
                }
                break;
            case "ArrowUp":
                if (onGround) {
                    playerVelY = -10;
                    onGround = false;
                }
                break;

        }
    }, false);
    window.addEventListener("keyup", function (e) {
        switch (e.key) {
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
    requestAnimationFrame(update);

}

function update() {
    requestAnimationFrame(update);
    console.log("update")
    context.clearRect(0, 0, board.width, board.height);
    // Preparing for next frame

    // Determining movement
    if (moveLeft &&!moveRight) {
        playerVelX = -5
    }
    if (moveRight &&!moveLeft) {
        playerVelX = 5
    }
    if (!moveLeft &&!moveRight) {
        playerVelX = 0
    }
    // Calculating gravity
    if (!onGround) {
        playerVelY += gravity;
    }

    // Player x movement
    player.x += playerVelX;

    // Collision detection with platforms
    onGround = false;
    for (let i = 0; i < platformArray.length; i++) {
        let platform = platformArray[i];
        if (player.x + player.width > platform.x && player.x < platform.x + platform.width) {
            if (player.y + player.height > platform.y && player.y + player.height < platform.y + platform.height) {
                // If player is moving downwards and touches the platform
                if (playerVelY > 0) {
                    player.y = platform.y - player.height;
                    onGround = true;
                    playerVelY = 0;
                }
                // If player is moving upwards and touches the platform
                else if (playerVelY < 0 && platform.y) {
                    player.y = platform.y + platform.height;
                    playerVelY = 0;
                }
            }
        }
    }

    // Collision detection with ground
    if (player.y + player.height > groundHeight) {
        player.y = groundHeight - player.height;
        onGround = true;
        playerVelY = 0;
    }

    player.y += playerVelY;

    // Drawing platforms
    for (let i = 0; i < platformArray.length; i++) {
        let platform = platformArray[i];
        context.fillRect(platform.x, platform.y, platform.width, platform.height);
    };

    // Drawing player
    context.fillStyle = "green";
    context.fillRect(player.x, player.y, player.width, player.height);
    context.fillText(moveLeft, 40, 20)
    context.fillText(moveRight, 40, 50)
    context.fillText(playerVelX, 5, 20)
    context.fillText(playerVelY, 5, 50)
};

function createPlatforms() {
    let platform1 = {
        x: 50,
        y: 200,
        width: 150,
        height: 25,
    };
    let platform2 = {
        x: 300,
        y: 350,
        width: 200,
        height: 25,
    };
    let platform3 = {
        x: 600,
        y: 150,
        width: 100,
        height: 25,
    };
    platformArray.push(platform1);
    platformArray.push(platform2);
    platformArray.push(platform3);
};