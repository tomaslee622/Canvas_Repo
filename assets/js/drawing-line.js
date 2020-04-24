let drawing = false
let prevMouseX = 0
let prevMouseY = 0
let connectLine = false

class DrawingLine extends PaintFunction{
    constructor(contextReal,color = '#0F0',width = 5){
        super();
        this.context = contextReal;
        this.width = width;
        this.color = color;
    }
    
    onMouseDown(coord,event){
        //this.context.strokeStyle = "#df4b26";
        this.context.strokeStyle = this.color;
        this.context.lineJoin = "round";
        this.context.lineWidth = this.width;
        this.context.putTag();
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
        drawing = true
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(coord){
        if(drawing){
            this.context.putTag()
          }
          drawing = false
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();    
    }
}