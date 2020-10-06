function dropdownZeroTrigger() {
  document.getElementById("dropdown1").classList.add("d-none");
  document.getElementById("dropdown1").classList.remove("d-flex");
  document.getElementById("dropdown1").classList.remove("flex-column");
  document.getElementById("dropdown2").classList.add("d-none");
  document.getElementById("dropdown2").classList.remove("d-flex");
}

function dropdownOneTrigger() {
  document.getElementById("dropdown1").classList.toggle("d-none");
  document.getElementById("dropdown1").classList.toggle("d-flex");
  document.getElementById("dropdown1").classList.toggle("flex-column");
  document.getElementById("dropdown2").classList.add("d-none");
  document.getElementById("dropdown2").classList.remove("d-flex");
}

function dropdownTwoTrigger() {
  document.getElementById("dropdown2").classList.toggle("d-none");
  document.getElementById("dropdown2").classList.toggle("d-flex");
  document.getElementById("dropdown2").classList.add("flex-column");
}

$(window).scroll(function () {
  var element = document.getElementById("scrollTop");
  if (window.scrollY > 300) {
    element.classList.add("scrollTopAnimAppear");
    element.classList.remove("scrollTopAnimVanish");
  } else {
    element.classList.remove("scrollTopAnimAppear");
    element.classList.add("scrollTopAnimVanish");
  }
});

function changeActive(el) {
  elList = document.getElementsByClassName("filter");
  for (let i = 0; i < 4; i++) {
    elList[i].classList.remove("active");
  }
  el.classList.add("active");
}
