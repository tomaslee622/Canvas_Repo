function point3 ( p1, p2 ) {
    let x2 = p2[0] - p1[0];
    let y2 = p2[1] - p1[1];
    let tx = Math.floor((x2 * Math.cos(Math.PI / -3)) - (y2 * Math.sin(Math.PI / -3)));
    let ty = Math.floor((x2 * Math.sin(Math.PI / -3)) + (y2 * Math.cos(Math.PI / -3)));
    tx += p1[0];
    ty += p1[1];
    let ans = [];
    ans.push(tx);
    ans.push(ty);
    return ans;
}

class DrawingTriangle extends PaintFunction{
    constructor(contextReal,contextDraft,fillColor = '#f44',strokeColor = '#000',strokeWidth = 2){
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
        let p1 = [0,0];
        let p2 = [0,0];
        let p3 = [0,0];
        p1[0] = this.origX;
        p1[1] = this.origY;
        p2[0] = coord[0];
        p2[1] = coord[1];
        p3 = point3( p1, p2 );
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.lineTo(p3[0],p3[1]);
        this.contextDraft.lineTo(this.origX,this.origY);
        this.contextDraft.closePath();
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        let p1 = [0,0];
        let p2 = [0,0];
        let p3 = [0,0];
        p1[0] = this.origX;
        p1[1] = this.origY;
        p2[0] = coord[0];
        p2[1] = coord[1];
        p3 = point3( p1, p2 );
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.lineTo(p3[0],p3[1]);
        this.contextReal.lineTo(this.origX,this.origY);
        this.contextReal.closePath();
        this.contextReal.fill();
        this.contextReal.stroke();
        this.contextReal.putTag();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}