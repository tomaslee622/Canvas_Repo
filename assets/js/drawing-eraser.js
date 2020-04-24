class DrawingEraser extends PaintFunction{
    constructor(contextReal,contextDraft,color = '#fff',width = 30){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
        this.width = width;
        this.color = color;
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = this.color;
        this.contextReal.putTag();
    }

    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(coord[0]-(this.width / 2), coord[1]-(this.width / 2), this.width, this.width);
    }

    onMouseMove(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextDraft.strokeStyle = "#000";
        this.contextDraft.lineWidth = 1;
        this.contextDraft.fillStyle = this.color;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.fillRect(coord[0]-(this.width / 2), coord[1]-(this.width / 2), this.width, this.width);
        this.contextDraft.strokeRect(coord[0]-(this.width / 2), coord[1]-(this.width / 2), this.width, this.width)
    }
    onMouseUp(coord){
        this.contextReal.putTag();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}