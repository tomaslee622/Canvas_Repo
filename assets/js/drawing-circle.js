class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = "#44f";
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextDraft.beginPath();
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = "#44f";
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.arc(this.origX, this.origY, Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY)), 0, 2 * Math.PI);
        this.contextDraft.fill()
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.arc(this.origX, this.origY, Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY)), 0, 2 * Math.PI);
        this.contextReal.fill()
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// this.contextDraft.arc(this.origX, this.origY, Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY)), 0, 2 * Math.PI);
// this.contextReal.arc(this.origX, this.origY, Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY)), 0, 2 * Math.PI);
//Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY))