let copyScopeSelected = false;
let copyImgData = contextReal.getImageData(0,0,1,1);

class CanvasCopy extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        if ( copyScopeSelected ) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.putImageData(copyImgData, coord[0], coord[1]);
        };
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if ( copyScopeSelected ) {
            this.contextDraft.putImageData(copyImgData, coord[0], coord[1]);
        } else {
            this.contextDraft.setLineDash([5, 3]);
            this.contextDraft.strokeStyle = 'black';
            this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        };
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if ( copyScopeSelected ) {
            this.contextReal.putImageData(copyImgData, coord[0], coord[1]);
            copyScopeSelected = false;
        } else {
            copyImgData = this.contextReal.getImageData(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
            copyScopeSelected = true;
        };
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

// copyImgData = this.contextReal.getImageData(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
// this.contextReal.putImageData(copyImgData, this.origX, this.origY);

// this.context.setLineDash([5, 3]);
// this.context.strokeStyle = 'black';
// this.context.beginPath();
// this.context.moveTo(start[0],start[1]);
// this.context.lineTo(end[0],end[1]);
// this.context.stroke();