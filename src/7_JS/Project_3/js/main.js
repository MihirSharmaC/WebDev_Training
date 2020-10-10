let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (guess < min || guess > max || isNaN(guess)) {
    setMessage(`Please enter a number between ${min} & ${max}`, "red");
  } else {
    clearMessage();
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct!!! You Win!!!`);
  } else {
    guessesLeft--;

    if (guessesLeft === 0) {
      gameOver(
        false,
        `GameOver... You Lost!!! The correct number was ${winningNum}`
      );
    } else {
      guessInput.style.borderColor = "red";
      setMessage(`Guess is not correct. Guesses Left: ${guessesLeft}`, "red");
      guessInput.value = "";
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function clearMessage() {
  message.textContent = "";
}

function gameOver(won, message) {
  let color;
  won ? (color = "green") : (color = "red");

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(message, color);

  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document
  .getElementById("storage-tester")
  .addEventListener("click", storageTest);

function storageTest() {
  let x = [
    {
      name: "Mihir",
      pass: "1234",
    },
    {
      name: "Megha",
      pass: "12345",
    },
    {
      name: "Abhishek",
      pass: "123456",
    },
    {
      name: "Kiran",
      pass: "1234567",
    },
  ];
  x.forEach(function (item) {
    localStorage.setItem(item.name, JSON.stringify(item.pass));
  });
  // console.log(localStorage.getItem("Mihir"));
}

const str = "Hello";
const str2 = String(new String("Hello"));
console.log(str === str2);
console.log(str2);
