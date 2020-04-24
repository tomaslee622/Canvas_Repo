class DrawingImage extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
        let img = new Image();
        img.src = 'https://4.bp.blogspot.com/-fPqO1opiJ8U/VdL1WkuZXrI/AAAAAAAAw-Y/yVIcsikznD0/s100/shirokuma_sleep.png';
        img.onload = function() {
            contextReal.drawImage(img, coord[0]-(img.width / 2), coord[1]-(img.height / 2));
        };
        this.contextReal.putTag();
    }
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
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