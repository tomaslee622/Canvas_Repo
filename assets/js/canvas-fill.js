function getPixel(imageData, x, y) {
  if (x < 0 || y < 0 || x >= imageData.width || y >= imageData.height) {
    return [-1, -1, -1, -1];  // impossible color
  } else {
    const offset = (y * imageData.width + x) * 4;
    return imageData.data.slice(offset, offset + 4);
  }
}

function setPixel(imageData, x, y, color) {
  const offset = (y * imageData.width + x) * 4;
  imageData.data[offset + 0] = color[0];
  imageData.data[offset + 1] = color[1];
  imageData.data[offset + 2] = color[2];
  imageData.data[offset + 3] = color[0];
}

function colorsMatch(a, b, rangeSq) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  const da = a[3] - b[3];
  return dr * dr + dg * dg + db * db + da * da < rangeSq;
}

function floodFill(ctx, x, y, fillColor, range = 1) {
  // read the pixels in the canvas
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  // flags for if we visited a pixel already
  const visited = new Uint8Array(imageData.width, imageData.height);
  
  // get the color we're filling
  const targetColor = getPixel(imageData, x, y);
  console.log(targetColor, fillColor);
  
  // check we are actually filling a different color
  if (!colorsMatch(targetColor, fillColor)) {

    const rangeSq = range * range;
    const pixelsToCheck = [x, y];
    while (pixelsToCheck.length > 0) {
      const y = pixelsToCheck.pop();
      const x = pixelsToCheck.pop();
      
      const currentColor = getPixel(imageData, x, y);
      if (!visited[y * imageData.width + x] &&
           colorsMatch(currentColor, targetColor, rangeSq)) {
        setPixel(imageData, x, y, fillColor);
        visited[y * imageData.width + x] = 1;  // mark we were here already
        pixelsToCheck.push(x + 1, y);
        pixelsToCheck.push(x - 1, y);
        pixelsToCheck.push(x, y + 1);
        pixelsToCheck.push(x, y - 1);
      }
    }
    
    // put the data back
    ctx.putImageData(imageData, 0, 0);
  }
}

class CanvasFill extends PaintFunction{
    constructor(contextReal,contextDraft,fillColor = '#44f'){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.fillColor = fillColor;
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = this.fillColor;
        let rgba = pickr.getColor().toRGBA();
        rgba[3] *= 255;
        console.log(rgba);
        this.origX = coord[0];
        this.origY = coord[1];
        floodFill(this.contextReal, this.origX, this.origY, rgba, 2);
        this.contextReal.putTag();
    }
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}


// https://stackoverflow.com/questions/2106995/how-can-i-perform-flood-fill-with-html-canvas
// https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes