class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft,fillColor = '#f44',strokeColor = '#000',strokeWidth = 1){
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
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextReal.putTag();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}