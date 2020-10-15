const disp = document.getElementById("display");

const trigger = document.body;
trigger.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    compute();
  }
});

function compute() {
  disp.value = eval(disp.value);
  if (x === "") {
    disp.value = "Enter data";
  }
}

var x = "";

function getExp(exp) {
  if (exp.innerHTML !== "=") {
    x += exp.innerHTML;
    disp.value = x;
  } else {
    compute();
    x = "";
  }
  if (exp.innerHTML === "C") {
    x = "";
    disp.value = x;
  }
}
