
function setTime(){
    const time = new Date().toLocaleString();
    document.getElementById("time-text").innerHTML = time;
}

function dragElement(element){
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    const header = document.getElementById(element.id + "-header");

    if (header) {
        header.onmousedown = startDragging;
        header.ontouchstart = startDragging;
    } else {
        element.onmousedown = startDragging;
        element.ontouchstart = startDragging;
    }

    function startDragging(e){
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;

        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
        document.ontouchend = stopDragging;
        document.ontouchmove = dragElement;
    }

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();

        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;

        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
    }
}

function createWindow(element){
    dragElement(element);

    const button = document.getElementById(element.id + "-button");
    button.onclick = closeWindow;
    button.ontouchstart = closeWindow;

    const icon = document.getElementById(element.id + "-icon");
    icon.onmousedown = openWindow;
    icon.ontouchstart = openWindow;

    function closeWindow(){
        element.style.display = "none";
    }
    function openWindow(){
        element.style.display = "inline";
    }
}

document.body.onload = setTime();
createWindow(document.getElementById("welcome-window"));
createWindow(document.getElementById("customise-window"));
setInterval(setTime, 1000);
