var last_position_of_x, last_position_of_y;
var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width = screen.width;

    new_width = screen.width - 70;
    new_height=screen.height - 300;

    canvas.addEventListener("mousedown", my_mouseDown)
    function my_mouseDown(e) {
        Colour = document.getElementById("colourInput").value;
        Width = document.getElementById("widthInput").value;
        mouseEvent = "mousedown";
    }
    canvas.addEventListener("mouseup", my_mouseUp);
    function my_mouseUp(e) {
        mouseEvent = "mouseup";
}
    canvas.addEventListener("mouseleave", my_mouseLeave);
    function my_mouseLeave(e){
        mouseEvent = "mouseleave";
}
    
    canvas.addEventListener("mousemove", my_mouseMove)
    function my_mouseMove(e)
    {
        current_position_of_mouse_x = clientX - canvas.offsetLeft;
        current_position_of_mouse_y = clientY - canvas.offsetTop;
        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
    canvas.addEventListener("touchstart", my_touchStart);
    function my_touchStart(e)
    {
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    if (width<992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;

        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchmove", my_touchMove);
    function my_touchMove(e)
    {
        
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = Colour;
        ctx.lineWidth = Width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }