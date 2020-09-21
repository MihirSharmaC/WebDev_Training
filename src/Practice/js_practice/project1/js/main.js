// Challenge

function getYear() {
  if (document.getElementById("ageInDays") != null) {
    document.getElementById("ageInDays").remove();
  }
  var age = prompt("Which year were you born in?");
  while (age == "") {
    age = prompt("Which year were you born in?");
  }
  var ageInDays = 365 * (2020 - age);
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You Are " + ageInDays + " days old!!!"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
