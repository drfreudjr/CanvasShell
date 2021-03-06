const cl = console.log;
degree = i => (Math.PI/180)*i

window.onload = function () {           // onload wrapper
                                        // Global 2D context reference
var canvas;                             // Global canvas object reference
var context; 

// // Begin dynamic fulls screen canvas code

sizeCanvas()                            // create initial canvas
addEventListener("resize", sizeCanvas); // resize canvas and redraw on window size change

function createCanvas () {   
    const canvas = document.createElement("canvas"); 
    canvas.style.position = "absolute"; 
    canvas.style.left     = "0px";      
    canvas.style.top      = "0px";

    document.body.appendChild(canvas);  // Add to document
    return canvas;
}

function sizeCanvas () {                // Create or resize 
    if (canvas === undefined) {         
        canvas = createCanvas();        
        context = canvas.getContext("2d");  
    }
    canvas.width  = innerWidth; 
    canvas.height = innerHeight; 
    drawScreen()     
}

function drawScreen() {  // wrapper that gets called on resize event

    //  //  // Enter Page Specific Code here


width=window.innerWidth
height=window.innerHeight



renderFrame()
function renderFrame () {
        fps = 60    // set lower to throttle for faster that is multiplr frames/paint 
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