class DrawingEllipse extends PaintFunction{
    constructor(contextReal,contextDraft,fillColor = '#4f4',strokeColor = '#000',strokeWidth = 3){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = this.fillColor;
        this.contextReal.strokeStyle = this.strokeColor;
        this.contextReal.lineWidth = this.strokeWidth;
        this.contextReal.putTag();
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = this.fillColor;
        this.contextDraft.strokeStyle = this.strokeColor;
        this.contextDraft.lineWidth = this.strokeWidth;
        let x = (coord[0] + this.origX) / 2;
        let y = (coord[1] + this.origY) / 2;
        let radiusX = Math.abs( (coord[0] - this.origX) / 2 );
        let radiusY = Math.abs( (coord[1] - this.origY) / 2 );
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
        this.contextDraft.closePath();
        this.contextDraft.fill();
        this.contextDraft.stroke()
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        let x = (coord[0] + this.origX) / 2;
        let y = (coord[1] + this.origY) / 2;
        let radiusX = Math.abs( (coord[0] - this.origX) / 2 );
        let radiusY = Math.abs( (coord[1] - this.origY) / 2 );
        this.contextReal.beginPath();
        this.contextReal.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
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
// Math.floor(Math.hypot(coord[0]- this.origX, coord[1] - this.origY))
// ctx.ellipse(100, 100, 50, 75, 0, 0, 2 * Math.PI);