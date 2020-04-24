let drawing = false
let prevMouseX = 0
let prevMouseY = 0
let connectLine = false

class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    
    onMouseDown(coord,event){
        this.context.strokeStyle = contextFill;
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
        this.context.putTag()
        drawing = true
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){
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