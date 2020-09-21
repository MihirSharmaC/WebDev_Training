function shrinkNav() {
  if (document.getElementById("dropdown-nav").style.height == "20vh") {
    document.getElementById("dropdown-nav").style.height = "0vh";
    document.getElementById("loginBtn").style.background = "#333";
    setTimeout(function () {
      document.getElementById("dropdown-nav").style.display = "none";
    }, 200);
    document.getElementById("nav-btn-nb").style.margin = "0vh";
  } else {
    document.getElementById("dropdown-nav").style.height = "0vh";
    document.getElementById("loginBtn").style.background = "#0073d2";
    document.getElementById("dropdown-nav").style.display = "flex";
    setTimeout(function () {
      document.getElementById("dropdown-nav").style.height = "20vh";
      document.getElementById("nav-btn-nb").style.marginTop = "20vh";
    }, 10);
  }
}

var mouse = true;
var mouseHover = true;
function mouseStatus(n) {
  mouse = n;
  if (mouse) {
    document.getElementById("elem1showcase").classList.remove("hide");
    mouseHover = true;
  } else if (!mouse && !mouseHover) {
    document.getElementById("elem1showcase").classList.add("hide");
  }
}

function mouseOverExpand(n) {
  mouseHover = n;
  mouseStatus(false);
}
