var board
var ctx

var rows = 20
var cols = 20
var BlockSize = 25
var velocityX = 0
var velocityY = 0
var playerX=0
var playerY=0
var snakeBody=[]
var foodX
var foodY

window.onload = function() {
     board = document.getElementById("board")
     
     board.height = rows*BlockSize
     board.width = cols*BlockSize
     ctx = board.getContext("2d")
   
     placefood()
    setInterval(update,100)
    document.addEventListener('keyup', changeDirection)
    
    
}

function changeDirection(e){
if(e.code=="ArrowUp"&&velocityY!=1){
    velocityX=0
    velocityY=-1
}
if(e.code=="ArrowDown"&&velocityY!=-1){
    velocityX=0
    velocityY=1
}
if(e.code=="ArrowLeft"&&velocityX!=1){
    velocityX=-1
    velocityY=0
}
if(e.code=="ArrowRight"&&velocityX!=-1){
    velocityX=1
    velocityY=0
}
}

function update(){
    ctx.fillStyle="black";
    ctx.fillRect(0, 0, board.width, board.height);

    ctx.fillStyle="yellow"
    ctx.fillRect(foodX,foodY,BlockSize,BlockSize)
//    if(playerX>(board.width))
//    {playerX=0}
//    if(playerX<0)
//    {playerX=board.width}
//    if(playerY>board.height)
//    {playerY=0}
//    if(playerY<0)
//    {playerY=board.height}
   if(playerX==foodX && playerY == foodY)
   {
    placefood();
    snakeBody.push([foodX,foodY])

   }
   for(let i=snakeBody.length-1;i>0;i++){
    snakeBody[i]=snakeBody[i-1]
   }
   if (snakeBody.length-1) {
    snakeBody[0] = [playerX, playerY];
}
ctx.fillStyle="red"
playerX+= velocityX*BlockSize
   playerY+= velocityY*BlockSize
   ctx.fillRect(playerX,playerY, BlockSize,BlockSize)
for (let i = 2; i <= snakeBody.length; i++) {
    
    ctx.fillRect(snakeBody[i][0], snakeBody[i][1], BlockSize, BlockSize);
}
console.log(snakeBody)

}

function placefood(){
foodX = Math.floor(Math.random() *cols) *BlockSize
foodY = Math.floor(Math.random() *rows) *BlockSize
}