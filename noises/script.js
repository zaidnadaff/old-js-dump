const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.width = 500;
canvas.height = 700;
let canvasPosition = canvas.getBoundingClientRect();

const explosions =[];

class Explosions {
    constructor(x ,y){
        this.x= x;
        this.y = y;
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth/2;
        this.height = this.spriteHeight/2;
        this.image = new Image();
        this.image.src = 'boom.png'
        this.frame = 0;

    }
    update(){
        this.frame++;
        

    }
    draw(){
        ctx.drawImage(this.image , this.spriteWidth*this.frame , 0 , this.spriteWidth , this.spriteHeight , this.x , this.y , this.width , this.height)
    }

}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('click', function(e){
      let positionX = e.x -canvasPosition.left -50;
      let positionY = e.y -canvasPosition.top-45 ;
    explosions.push(new Explosions(positionX,positionY));

    });
  });

  function animate(){
    ctx.clearRect(0,0,canvas.width , canvas.height)
    for(let i=0 ; i < explosions.length; i++){
        explosions[i].update();
        explosions[i].draw();

    }
    requestAnimationFrame(animate)
  }

//   animate();