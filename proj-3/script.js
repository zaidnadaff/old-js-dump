 /** @type {HTMLCanvasElement}**/
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const enemiesArray = [];
const numberOfEnemies = 20;
let i=0;

const enemyImage = new Image();
enemyImage.src = 'enemy1.png' 


class Enemy{
    constructor(){
        this.x =Math.random() *canvas.width;
        this.y =Math.random() * canvas.height;
        this.width = 200;
        this.height = 100;
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.frame = 0;

    }
    update(){
        this.x+= this.speed;
        this.y+= this.speed;
       if(i%3==0){ if(this.frame<4)
        this.frame++;
        else
        this.frame=0;}
        i+=2;

    }
    draw(){
        ctx.drawImage(enemyImage,this.frame*this.spriteWidth ,0,this.spriteWidth, this.spriteHeight, this.x , this.y , this.width , this.height)
    }
}

// const enemy1  = new Enemy();
for(let i=0;i<numberOfEnemies;i++)
{
    enemiesArray.push(new Enemy())
}

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    enemiesArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    })
    requestAnimationFrame(animate)
}

//  animate()
