const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
document.body.prepend(canvas)
const game = {grid:40,ani:''};
const player = {
    x:game.grid*7,
    y:game.grid*8,
    w:game.grid*2,
    h:game.grid/2,
    color:'red',
    speed:5
};
const ball = {x:game.grid*7,
    y:game.grid*5,
    w:game.grid/3,
    h:game.grid/3,
    color:'green',
    dx :5,
    dy : 5
};
const squares = {
    x:game.grid,
    y:game.grid,
    w:game.grid*2,
    h:game.grid/2,
    color: 'grey'


};
var colors= ['blue','green','orange','purple','black','pink','grey']
 
var arr =[];
const keyz = {ArrowLeft:false,
ArrowRight:false};
canvas.setAttribute('width',game.grid*15);
canvas.setAttribute('height',game.grid*10);
canvas.style.border = '1px solid black';
document.addEventListener('keydown' , e =>{
    if(e.code in keyz){ keyz[e.code] = true}
})
document.addEventListener('keyup' , e =>{
    if(e.code in keyz){ keyz[e.code] = false}
})
document.addEventListener('mousemove', e=>{
 const val = e.clientX - canvas.offsetLeft
 if(val>(player.w/2) && val<(canvas.width-(player.w/2)))
 {
    player.x = val-(player.w/2)
 }


})
game.ani = requestAnimationFrame(draw);

for(let i=1;i<=12;i++){
    arr[i-1]=[];
    for(let j=1;j<=6;j++){
        arr[i-1][j-1]=1
        
    }
}

function drawSquares(){

    for(let i=1;i<=12;i++){
        squares.x = i*game.grid;
    for(let j=1;j<=6;j++){
        squares.y = j*game.grid;
        
        if(arr[i-1][j-1]==1)
        {
           changecolor(); 
    ctx.beginPath();
    ctx.rect(squares.x,squares.y,squares.w,squares.h)
    ctx.fillStyle = squares.color;
    ctx.fill();
    ctx.closePath(); 
        }if(arr[i-1][j-1]==1){
         if(ball.x>=(game.grid*i)&&ball.x<=(game.grid*i)+squares.w && ball.y<(game.grid*j+squares.h )&& ball.y >(game.grid*j)) {
            
          arr[i-1][j-1]=0
          console.log(arr[i-1][j-1])
          console.log(ball.x,ball.y,squares.x*i,squares.y,)
          ball.dy*=-1
         }
        }
    }}
   }

function movement(){
    if(keyz.ArrowLeft){player.x-=player.speed;}
    if(keyz.ArrowRight){player.x+=player.speed;}
}
function drawball(){
   
    ctx.beginPath();
    ctx.rect(ball.x,ball.y,ball.w,ball.h)
    ctx.stroke();
    ctx.strokeStyle='white'
    ctx.closePath();  

    ctx.beginPath();
    ctx.fillStyle = ball.color;
    let adj = ball.w/2
    ctx.arc(ball.x+adj,ball.y+adj,ball.w/2,0,Math.PI*2)
    ctx.fill();
    ctx.closePath(); 
}
function changecolor(){
   
    squares.color = colors[Math.floor(Math.random()*7)]
}

function ballmove(){
    if(ball.x>canvas.width|| ball.x<0){
    ball.dx*=-1
    }
    if(ball.y>canvas.height|| ball.y<0){
        ball.dy*=-1
        }
    ball.x += ball.dx
    ball.y +=ball.dy
}
function draw(){
   
    ctx.clearRect(0,0,canvas.width,canvas.height)
    movement();
    drawball();
    ballmove();
    drawSquares();
    ctx.beginPath();
    ctx.rect(player.x,player.y,player.w,player.h)
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.closePath();
    if(ball.x>=player.x&&ball.x<=player.x+player.w && ball.y<player.y+player.h && ball.y >player.y) 
{
    // ball.dx *=-1
    ball.dy*=-1
}
    game.ani = requestAnimationFrame(draw);
} ctx.beginPath();
ctx.rect(player.x+100,player.y+100,player.w,player.h)
ctx.fillStyle = player.color;
ctx.fill();
ctx.closePath();


