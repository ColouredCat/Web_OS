
function applyChanges(){
    if (document.getElementById("customize-abstract").checked){
        document.body.style.backgroundImage = "url(backgrounds/abstract.jpg)";
        document.body.style.color = "black";
    } else if (document.getElementById("customize-galaxy").checked){
        document.body.style.backgroundImage = "url(backgrounds/galaxy.jpg)";
        document.body.style.color = "white";
    } else if (document.getElementById("customize-mountain").checked){
        document.body.style.backgroundImage = "url(backgrounds/mountain.jpg)";
        document.body.style.color = "white";
    } else if (document.getElementById("customize-view").checked){
        document.body.style.backgroundImage = "url(backgrounds/view.jpg)";
        document.body.style.color = "black";
    }

    if(document.getElementById("customize-fa").checked){
        document.body.style.fontFamily = "\"Finlandica\", sans-serif";
    } else if(document.getElementById("customize-fb").checked){
        document.body.style.fontFamily = "\"Inter\", sans-serif";
    } else if(document.getElementById("customize-fc").checked){
        document.body.style.fontFamily = "\"Raleway\", sans-serif";
    }

    document
}

document.getElementById("customise").oninput = applyChanges();
setInterval(applyChanges, 50);