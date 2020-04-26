class DrawingImage extends PaintFunction{
    constructor(contextReal, img){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.img = img;
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.putTag();
        contextReal.drawImage(this.img, coord[0]-(this.img.width / 2), coord[1]-(this.img.height / 2));
    }
    onDragging(){}
    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.putTag();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

// let img = new Image();
// img.src = 'https://4.bp.blogspot.com/-fPqO1opiJ8U/VdL1WkuZXrI/AAAAAAAAw-Y/yVIcsikznD0/s100/shirokuma_sleep.png';
// img.onload = function() {
// let pat = ctx.createPattern(img, 'no-repeat');
// ctx.rect(0, 0, img.width, img.height);
// ctx.fillStyle = pat;
// ctx.fill();
// };