// Make the DIV element draggable:

var windows = [];
var itemToFind = "";

let divElement = document.getElementsByClassName("window");

var found = windows.findIndex(el => el == itemToFind)

var windows = ["browser", "resume", "projects", "trash", "tops", "bottoms", "dresses", "outerwear", "shoes", "jewelry", "accessories"];

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



function orderDiv(x) {
  var newWindow = x.querySelector("div");
  itemToFind = newWindow.id;
  var foundIdx = windows.findIndex(el => el == itemToFind);
  windows.splice(foundIdx, 1);
  windows.unshift(itemToFind);
  console.log(windows);
}


document.addEventListener('click', function (b) {


  if (document.getElementById('wardrobe-folders').contains(b.target)) {
    if (document.getElementById('dresseslink').contains(b.target)) {
      itemToFind = "dresses";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
      for (var i = 0; i < windows.length; i++) {
        document.getElementById(windows[i]).style.zIndex = 10 - i;
      }
    } else if (document.getElementById('bottomslink').contains(b.target)) {
      itemToFind = "bottoms";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);

      for (var i = 0; i < windows.length; i++) {
        document.getElementById(windows[i]).style.zIndex = 10 - i;
        console.log(windows[i] + i + document.getElementById(windows[i]).style.zIndex);
      }
    } else if(document.getElementById('topslink').contains(b.target)){
      itemToFind = "tops";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);

      for (var i = 0; i < windows.length; i++) {
        document.getElementById(windows[i]).style.zIndex = 10 - i;
        console.log(windows[i] + i + document.getElementById(windows[i]).style.zIndex);
      }
    }
    else if(document.getElementById('outerwearlink').contains(b.target)){
      itemToFind = "outerwear";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);

      for (var i = 0; i < windows.length; i++) {
        document.getElementById(windows[i]).style.zIndex = 10 - i;
        console.log(windows[i] + i + document.getElementById(windows[i]).style.zIndex);
      }
    }

    else if(document.getElementById('jewelrylink').contains(b.target)){
      itemToFind = "jewelry";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);

      for (var i = 0; i < windows.length; i++) {
        document.getElementById(windows[i]).style.zIndex = 10 - i;
        console.log(windows[i] + i + document.getElementById(windows[i]).style.zIndex);
      }
    }

    else if(document.getElementById('accessorieslink').contains(b.target)){
      itemToFind = "accessories";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);

      for (var i = 0; i < windows.length; i++) {
        document.getElementById(windows[i]).style.zIndex = 10 - i;
        console.log(windows[i] + i + document.getElementById(windows[i]).style.zIndex);
      }
    }

    else if(document.getElementById('shoeslink').contains(b.target)){
      itemToFind = "shoes";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);

      for (var i = 0; i < windows.length; i++) {
        document.getElementById(windows[i]).style.zIndex = 10 - i;
        console.log(windows[i] + i + document.getElementById(windows[i]).style.zIndex);
      }
    }
  } else {
    for (var i = 0; i < windows.length; i++) {
      document.getElementById(windows[i]).style.zIndex = 10 - i;
      console.log(windows[i] + i + document.getElementById(windows[i]).style.zIndex);
    }
  }});


    function dressesFront() {
      itemToFind = "dresses";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
      console.log("fdjskfjsdlk");
    }


    window.addEventListener('click', function (e) {
      if (document.getElementById('find').contains(e.target)) {
        document.getElementById("links").style.display = "block";
        document.getElementById("links").style.zIndex = "2000";
      } else {
        document.getElementById("links").style.display = "none";
      }
    });



    function aboutme() {
      document.getElementById("browser").style.transform = "scale(1)";
      itemToFind = "browser";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
      console.log(windows)
    }

    function resume() {
      document.getElementById("resume").style.transform = "scale(1)";
      itemToFind = "resume";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
      console.log(windows)
    }

    function projects() {
      document.getElementById("projects").style.transform = "scale(1)";
      itemToFind = "projects";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
      console.log(windows)
    }

    function trash() {
      document.getElementById("trash").style.transform = "scale(1)";
      itemToFind = "trash";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
      console.log(windows)
    }

    function tops() {
      document.getElementById("tops").style.transform = "scale(1)";
      itemToFind = "tops";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
      console.log(windows)
    }

    function bottoms() {
      document.getElementById("bottoms").style.transform = "scale(1)";
      itemToFind = "bottoms";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
    }

    function dresses() {
      document.getElementById("dresses").style.transform = "scale(1)";
      itemToFind = "dresses";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
    }

    function outerwear() {
      document.getElementById("outerwear").style.transform = "scale(1)";
      itemToFind = "outerwear";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
    }

    function shoes() {
      document.getElementById("shoes").style.transform = "scale(1)";
      itemToFind = "shoes";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
    }

    function jewelry() {
      document.getElementById("jewelry").style.transform = "scale(1)";
      itemToFind = "jewelry";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
    }

    function accessories() {
      document.getElementById("accessories").style.transform = "scale(1)";
      itemToFind = "accessories";
      var foundIdx = windows.findIndex(el => el == itemToFind);
      windows.splice(foundIdx, 1);
      windows.unshift(itemToFind);
    }



    function closeAboutme() {
      document.getElementById("browser").style.transform = "scale(0)";
    }

    function closeResume() {
      document.getElementById("resume").style.transform = "scale(0)";
    }

    function closeTrash() {
      document.getElementById("trash").style.transform = "scale(0)";
    }

    function closeProjects() {
      document.getElementById("projects").style.transform = "scale(0)";
    }

    function closeTops() {
      document.getElementById("tops").style.transform = "scale(0)";
    }

    function closeBottoms() {
      document.getElementById("bottoms").style.transform = "scale(0)";
    }

    function closeDresses() {
      document.getElementById("dresses").style.transform = "scale(0)";
    }

    function closeOuterwear() {
      document.getElementById("outerwear").style.transform = "scale(0)";
    }

    function closeShoes() {
      document.getElementById("shoes").style.transform = "scale(0)";
    }

    function closeJewelry() {
      document.getElementById("jewelry").style.transform = "scale(0)";
    }

    function closeAccessories() {
      document.getElementById("accessories").style.transform = "scale(0)";
    }




    function dragElement(elmnt) {

      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "nav")) {
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

        if (elmnt.offsetTop - pos2 <= 36) {
          elmnt.style.top = 36 + "px";
        }
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
