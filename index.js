
const time_text = document.getElementById("time-text");
const update_time = 1000;

function setTime(){
    const time = new Date().toLocaleString();
    time_text.innerHTML = time;
}

setInterval(setTime, update_time);

function dragElement(element){
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    if (document.getElementById(element.id + "-header")) {
        document.getElementById(element.id + "-header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e){
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
        console.log("drag");
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
    }
}

function createWindow(element){
    dragElement(element);
    const button = document.getElementById(element.id + "-button");
    button.onclick = closeWindow;

    function closeWindow(e){
        element.style.display = "none";
    }
}

createWindow(document.getElementById("welcome-window"))

