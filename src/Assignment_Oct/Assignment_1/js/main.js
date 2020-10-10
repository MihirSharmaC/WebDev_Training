loadEventListeneres();

const user = "admin";
const pass = "12345678";

function loadEventListeneres() {
  const submitBtn = document.querySelector("#submitBtn");
  submitBtn.addEventListener("click", getData);
}

function getData(e) {
  const userNameIp = document.querySelector("#username");
  const uErrorMsgP = document.querySelector("#usernameErrMsg");
  const passwordIp = document.querySelector("#password");
  const pErrorMsgP = document.querySelector("#passwordErrMsg");
  pErrorMsgP.innerHTML = "";
  uErrorMsgP.innerHTML = "";
  if (userNameIp.value == user) {
    if (passwordIp.value === pass) {
      alert("Login Successful");
    } else {
      //   alert("Login Failed");
      pErrorMsgP.innerHTML = "Incorrect Password";
    }
  } else {
    // alert("Login Failed");
    uErrorMsgP.innerHTML = "Username incorrect";
  }
  e.preventDefault();
}
