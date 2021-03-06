class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft,fillColor = '#f4f',strokeColor = '#000',strokeWidth = 2){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
    }
    
    onMouseDown(coord,event){
        // this.contextReal.fillStyle = "#44f";
        // this.contextReal.strokeStyle = "#f00";
        // this.contextReal.lineWidth = 3;
        this.contextReal.fillStyle = this.fillColor;
        this.contextReal.strokeStyle = this.strokeColor;
        this.contextReal.lineWidth = this.strokeWidth;
        this.contextReal.putTag();
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        // this.contextDraft.fillStyle = "#44f";
        // this.contextDraft.strokeStyle = "#f00";
        // this.contextDraft.lineWidth = 3;
        this.contextDraft.fillStyle = this.fillColor;
        this.contextDraft.strokeStyle = this.strokeColor;
        this.contextDraft.lineWidth = this.strokeWidth;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY)), 0, 2 * Math.PI);
        this.contextDraft.closePath();
        this.contextDraft.fill();
        this.contextDraft.stroke()
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX, this.origY, Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY)), 0, 2 * Math.PI);
        this.contextReal.closePath();
        this.contextReal.fill();
        this.contextReal.stroke();
        this.contextReal.putTag();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// this.contextDraft.arc(this.origX, this.origY, Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY)), 0, 2 * Math.PI);
// this.contextReal.arc(this.origX, this.origY, Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY)), 0, 2 * Math.PI);
//Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY))