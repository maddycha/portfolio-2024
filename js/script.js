// Make the DIV element draggable:
dragElement(document.getElementById("browser"));
dragElement(document.getElementById("resume"));
dragElement(document.getElementById("projects"));

function findme(){
  
}

function aboutme(){
  document.getElementById("browser").style.transform = "scale(1)";
  aboutmeFront();
}

function resume(){
  document.getElementById("resume").style.transform = "scale(1)";
  resumeFront();
}

function projects(){
  document.getElementById("projects").style.transform = "scale(1)";
  projectsFront();
}

function aboutmeFront(){
  document.getElementById("browser").style.zIndex = "100";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "50";
}

function resumeFront(){
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "100";
  document.getElementById("projects").style.zIndex = "50";
}

function projectsFront(){
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "100";

}


function closeAboutme(){
  document.getElementById("browser").style.transform = "scale(0)";
}

function closeResume(){
  document.getElementById("resume").style.transform = "scale(0)";
}

function closeProjects(){
  document.getElementById("projects").style.transform = "scale(0)";
}

function dragElement(elmnt) {

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id+"nav")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "nav").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    if(elmnt.offsetTop - pos2 <= 36){
      elmnt.style.top = 36 + "px";
    }
    }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
