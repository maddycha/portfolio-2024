// Make the DIV element draggable:
dragElement(document.getElementById("browser"));
dragElement(document.getElementById("resume"));
dragElement(document.getElementById("projects"));
dragElement(document.getElementById("trash"));
dragElement(document.getElementById("tops"));
dragElement(document.getElementById("bottoms"));
dragElement(document.getElementById("dresses"));
dragElement(document.getElementById("outerwear"));
dragElement(document.getElementById("shoes"));
dragElement(document.getElementById("jewelry"));
dragElement(document.getElementById("accessories"));

window.addEventListener('click', function(e){
  if (document.getElementById('find').contains(e.target)){
    document.getElementById("links").style.display = "block";
    document.getElementById("links").style.zIndex = "2000";
  } else{
    document.getElementById("links").style.display = "none";
  }
});


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

function trash(){
  document.getElementById("trash").style.transform = "scale(1)";
  trashFront();
}

function tops(){
  document.getElementById("tops").style.transform = "scale(1)";
  topsFront();
}

function bottoms(){
  document.getElementById("bottoms").style.transform = "scale(1)";
  bottomsFront();
}

function dresses(){
  document.getElementById("dresses").style.transform = "scale(1)";
  dressesFront();
}

function outerwear(){
  document.getElementById("outerwear").style.transform = "scale(1)";
  outerwearFront();
}

function shoes(){
  document.getElementById("shoes").style.transform = "scale(1)";
  shoesFront();
}

function jewelry(){
  document.getElementById("jewelry").style.transform = "scale(1)";
  jewelryFront();
}

function accessories(){
  document.getElementById("accessories").style.transform = "scale(1)";
  accessoriesFront();
}


function aboutmeFront(){
  document.getElementById("browser").style.zIndex = "100";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "50";
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "50";
}

function resumeFront(){
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "100";
  document.getElementById("projects").style.zIndex = "50";
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "50";
}

function projectsFront(){
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "100";
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "50";
}

function trashFront(){
  document.getElementById("trash").style.zIndex = "100";
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "500";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "50";
}

function topsFront(){
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "100";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "50";
}

function bottomsFront(){
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "100";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "50";
}

function dressesFront(){
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "100";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "50";
}

function shoesFront(){
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("shoes").style.zIndex = "100";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "50";
}

function outerwearFront(){
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "100";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "50";
}

function jewelryFront(){
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "50";
  document.getElementById("jewelry").style.zIndex = "100";
}

function accessoriesFront(){
  document.getElementById("trash").style.zIndex = "50";
  document.getElementById("browser").style.zIndex = "50";
  document.getElementById("resume").style.zIndex = "50";
  document.getElementById("projects").style.zIndex = "50";
  document.getElementById("tops").style.zIndex = "50";
  document.getElementById("bottoms").style.zIndex = "50";
  document.getElementById("dresses").style.zIndex = "50";
  document.getElementById("shoes").style.zIndex = "50";
  document.getElementById("outerwear").style.zIndex = "50";
  document.getElementById("accessories").style.zIndex = "100";
  document.getElementById("jewelry").style.zIndex = "50";
}

function closeAboutme(){
  document.getElementById("browser").style.transform = "scale(0)";
}

function closeResume(){
  document.getElementById("resume").style.transform = "scale(0)";
}

function closeTrash(){
  document.getElementById("trash").style.transform = "scale(0)";
}

function closeProjects(){
  document.getElementById("projects").style.transform = "scale(0)";
}

function closeTops(){
  document.getElementById("tops").style.transform = "scale(0)";
}

function closeBottoms(){
  document.getElementById("bottoms").style.transform = "scale(0)";
}

function closeDresses(){
  document.getElementById("dresses").style.transform = "scale(0)";
}

function closeOuterwear(){
  document.getElementById("outerwear").style.transform = "scale(0)";
}

function closeShoes(){
  document.getElementById("shoes").style.transform = "scale(0)";
}

function closeJewelry(){
  document.getElementById("jewelry").style.transform = "scale(0)";
}

function closeAccessories(){
  document.getElementById("accessories").style.transform = "scale(0)";
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
