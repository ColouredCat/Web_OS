
const canvas = document.getElementById("paint-canvas");
const sizeText = document.getElementById("paint-size");
const colourText = document.getElementById("paint-colour");
var painting = false;
var size = 6;
var colour = 0;
const maxColours = 12;
var colorArray = ['#FF6633', '#bd00bd', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		'#E6B3B3', '#66991A', '#f7ff66'];

canvas.onmousedown = startPaint;
canvas.onmousemove = paint;
canvas.onmouseup = stopPaint;
window.onkeydown = changePaint;

function startPaint(e){
    painting = true;
}
function stopPaint(e){
    painting = false;
}
function changePaint(e){
    if (e.key == "." && size != 12){
        size++;
    } else if (e.key == "," && size != 1){
        size--;
    }
    if (e.key == "a"){
        colour--;
        if (colour == -1){
            colour = maxColours;
        }
    } else if (e.key == "d"){
        colour++;
        if (colour == maxColours+1){
            colour = 0;
        }
    } else if (e.key == "r"){
        canvas.getContext("2d").fillStyle = "white";
        canvas.getContext("2d").fillRect(0, 0, canvas.clientWidth, canvas.height);
    }
    sizeText.innerHTML = "<b>Brush Size: " + size.toString();
    colourText.style.color = colorArray[colour];
}
function paint(e){
    if (!painting){
        return;
    }

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    ctx.fillStyle = colorArray[colour];
    ctx.beginPath();
    ctx.arc(relativeX, relativeY, size, 0, 2 * Math.PI);
    ctx.fill()
    ctx.closePath();
}