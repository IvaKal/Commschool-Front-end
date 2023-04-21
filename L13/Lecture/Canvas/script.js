var myGamePiece

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 100);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function () { 
        this.canvas.width = 580;
        this.canvas.height= 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]); 
        this.interval = setInterval(updateGameArea, 20)
     },
     clear:function(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height)
     } 
}

function component(width, height, color, x,y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
      }
      this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY
      }
  }

  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
    }

    function moveUp(){
        myGamePiece.speedY -= 1;
    }
    function moveDown(){
        myGamePiece.speedY += 1;
    }
    function moveLeft(){
        myGamePiece.speedX -= 1;
    }
    function moveRight(){
        myGamePiece.speedX += 1;
    }



    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                moveLeft()
                break;
            case 38:
                moveUp()
                break;
            case 39:
                moveRight()
                break;
            case 40:
                moveDown()
                break;
        }
    }
