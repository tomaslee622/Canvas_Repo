document.addEventListener('DOMContentLoaded', () => {
    const c = document.getElementById('canvas-real')
    const context = c.getContext('2d')
    const width = c.width
    const height = c.height

    context.lineJoin = 'round'
    context.lineWidth = 3
    context.strokeStyle = 'blue'

    UndoCanvas.enableUndo(context)
                                                
    // const undoButton = document.getElementById('undoButton')       
    // undoButton.addEventListener('click', (e) => {
    //   e.preventDefault()
    //   context.undo()
    //   context.undoTag()
    //   updateControls()
    // })

    // const redoButton = document.getElementById('redoButton')
    // redoButton.addEventListener('click', (e) => {
    //   e.preventDefault()
    //   context.redo()
    //   context.redoTag()
    //   updateControls()
    // })

    const undoTagButton = document.getElementById('undoTagButton')
    undoTagButton.addEventListener('click', (e) => {
      e.preventDefault()
      context.undo()
      context.undoTag()
      
    })

    const redoTagButton = document.getElementById('redoTagButton')
    redoTagButton.addEventListener('click', (e) => {
      e.preventDefault()
      context.redo()
      context.redoTag()
      
    })


    const getMouseX = (e) => {
      if(typeof e.targetTouches !== 'undefined'){
        return e.targetTouches[0].pageX - c.offsetLeft
      }
      return e.pageX - c.offsetLeft
    }

    const getMouseY = (e) => {
      if(typeof e.targetTouches !== 'undefined'){
        return e.targetTouches[0].pageY - c.offsetTop
      }
      return e.pageY - c.offsetTop
    }

    const draw = (e) => {
      const mouseX = getMouseX(e)
      const mouseY = getMouseY(e)

      context.beginPath()
      if(connectLine){
        context.moveTo(prevMouseX, prevMouseY)
      }else{
        context.moveTo(mouseX, mouseY)
      }
      context.lineTo(mouseX, mouseY)
      context.closePath()
      context.stroke()
      prevMouseX = mouseX
      prevMouseY = mouseY
      connectLine = true
      
    }

    c.addEventListener('mousedown', (e) => {
      e.preventDefault()
      context.putTag()
      drawing = true
      draw(e)
    })

    c.addEventListener('mousemove', (e) => {
      if(drawing){
        e.preventDefault()
        draw(e)
      }
    })

    c.addEventListener('mouseleave', (e) => {
      connectLine = false
    })

    document.addEventListener('mouseup', (e) => {
      if(drawing){
        context.putTag()
      }
      drawing = false
      connectLine = false
    })

    c.addEventListener('touchstart', (e) => {
      e.preventDefault()
      context.putTag()
      drawing = true
      draw(e)
    })

    c.addEventListener('touchmove', (e) => {
      if(drawing){
        e.preventDefault()
        draw(e)
      }
    })

    document.addEventListener('touchend', (e) => {
      if(drawing){
        context.putTag()
      }
      drawing = false
      connectLine = false
    })

    document.addEventListener('touchcancel', (e) => {
      if(drawing){
        context.putTag()
      }
      drawing = false
      connectLine = false
    })

    
  })