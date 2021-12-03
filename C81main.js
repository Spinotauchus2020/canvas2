canvas=document.getElementById("meinCanvas");
color="blue";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = 9;
ctx.arc(200 , 200 , 40 ,0,2*Math.PI );
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x , mouse_y)
}
function circle(x,y){
    ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = 9;
ctx.arc(x , y , 40 ,0,2*Math.PI );
ctx.stroke();
}