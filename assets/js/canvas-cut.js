let cutScopeSelected = false;
let cutImgData = contextReal.getImageData(0,0,1,1);

class CanvasCut extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        if ( cutScopeSelected ) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.putImageData(cutImgData, coord[0], coord[1]);
        };
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if ( cutScopeSelected ) {
            this.contextDraft.putImageData(cutImgData, coord[0], coord[1]);
        } else {
            this.contextDraft.setLineDash([5, 3]);
            this.contextDraft.strokeStyle = 'black';
            this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        };
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if ( cutScopeSelected ) {
            this.contextReal.putImageData(cutImgData, coord[0], coord[1]);
            this.contextReal.putTag();
            cutScopeSelected = false;
            currentFunction = new DrawingLine(contextReal, contextDraft);
        } else {
            cutImgData = this.contextReal.getImageData(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextReal.clearRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextDraft.putImageData(cutImgData, (coord[0] < this.origX) ? coord[0] : this.origX, (coord[1] < this.origY) ? coord[1] : this.origY);
            this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            cutScopeSelected = true;
        };
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

// cutImgData = this.contextReal.getImageData(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
// this.contextReal.putImageData(cutImgData, this.origX, this.origY);

// this.context.setLineDash([5, 3]);
// this.context.strokeStyle = 'black';
// this.context.beginPath();
// this.context.moveTo(start[0],start[1]);
// this.context.lineTo(end[0],end[1]);
// this.context.stroke();