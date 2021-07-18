mouseEvent = "";
Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");
color = "black";
width_of_line = 1;
radius = 20;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(250, 250, 50, 0, 2 * Math.PI);
ctx.stroke();
Canvas.addEventListener("mousedown",the_mousedown);
Canvas.addEventListener("mousemove",my_mousemove);
Canvas.addEventListener("mouseleave",my_mouseup);
function my_mouseup(e){
    
    mouseEvent = "mouseup";
    
}
function the_mousedown(e){
    color = document.getElementById("iColor").value;
    width_of_line = document.getElementById("iWidth").value;
    radius = document.getElementById("iRadius").value;
    mouseEvent = "mouseDown";
    
}
function my_mousemove(e){
        current_position_of_mouse_x = e.clientX - Canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - Canvas.offsetTop;
        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        
        }


        mouseEvent = "mousemove";
    }
        function clearArea(){
            ctx.clearRect(0, 0, Canvas.width, Canvas.height);
        }
    