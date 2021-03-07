'use strict'
const cl = console.log;

window.onload = function () {           // onload wrapper
                                        
let canvas;                             
let context; 

addEventListener("resize", sizeCanvas); 
sizeCanvas()                            // create initial canvas

function sizeCanvas () {                // Create or resize 

    if (canvas === undefined) {         
        canvas = createCanvas();        
        context = canvas.getContext("2d");  
    }

    function createCanvas () {   
        const canvas = document.createElement("canvas"); 
        canvas.style.position = "absolute"; 
        canvas.style.left     = "0px";      
        canvas.style.top      = "0px";

        document.body.appendChild(canvas);  // Add to document
        return canvas;
    }

    canvas.width  = window.innerWidth; 
    canvas.height = window.innerHeight; 
    main()     
}

function main() {  // wrapper that gets called on resize event
    let width=window.innerWidth
    let height=window.innerHeight

    renderFrame()

    function renderFrame () {
        let fps = 60    // set lower to throttle for faster that is multiplr frames/paint 
        setTimeout(function() {
            plotFrame() // plot the frame 
            requestAnimationFrame(renderFrame) // then draw it
        }, 1000 / fps)
}

function plotFrame () {
    context.fillStyle = 'orange'
    context.fillRect(0,0,width,height)
}


}   // end drawScreen wrapper
}   // end onload wrapper