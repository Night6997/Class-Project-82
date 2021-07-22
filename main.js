var mouseEvent = "empty";
var x, y;
canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");

color = "yellow";
LineW = 1;

canvas.addEventListener( "mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("inputColor").value;
    LineW = document.getElementById("inputLineWidth").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", mouse_move);

function mouse_move(e) {
    current_x = e.ClientX - canvas.offSetLeft;
    current_y = e.ClientY - canvas.offSetTop;
    if(mouseEvent=="mouseDown") {
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = LineW;
       console.log("Last position of x and y = ");
       console.log("x = "+ x + "y = "+ y);
       ctx.moveTo(x,y);
       
       console.log("Current position of x and y = ");
       console.log("x = "+ current_x + "y = "+ current_y);

       ctx.lineTo(current_x, current_y);
       ctx.stroke();
    }
    x = current_x;
    y = current_y;
}

canvas.addEventListener("mouseup", mouse_up);

function mouse_up(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", mouse_leave);

function mouse_leave(e) {
    mouseEvent = "mouseleave";
}

function clear() {
    ctx.rect.clear(0,0 , ctx.canvas.height , ctx.canvas.width);
}
