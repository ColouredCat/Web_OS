

document.getElementById("platform").innerHTML = "Device Platform: " +  navigator.platform;
document.getElementById("language").innerHTML = "Language: " +  navigator.language;
document.getElementById("browser").innerHTML = "Browser Suplier: " +  navigator.vendor;
document.getElementById("screen").innerHTML = "Screen Resolution: " +  `${screen.width}x${screen.height}`;
document.getElementById("colour").innerHTML = "Colour Depth: " + screen.colorDepth;
document.getElementById("time").innerHTML = "Time zone: " + Intl.DateTimeFormat().resolvedOptions().timeZone;