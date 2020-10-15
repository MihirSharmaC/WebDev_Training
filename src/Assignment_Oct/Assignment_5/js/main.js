const input = document.getElementById("newTaskIp");
const addBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", addTask);

(function populateList() {
  if (localStorage.list == null) {
    listStore = [];
    localStorage.setItem("list", JSON.stringify(listStore));
  }
  const x = localStorage.getItem("list");
  y = JSON.parse(x);
  y.forEach((index) => addToList(index));
})();

function addTask() {
  if (input.value !== "") {
    addToList(input.value);
    addToStorage(input.value);
    input.value = "";
  }
}

function addToList(listItem) {
  taskList.innerHTML += `
    <li class="d-block bg-white border pl-4 py-3">
      <input type="checkbox" name="Check" id="completed" onClick="removeItem(this)"/>
      <span class="h5 ml-3">${listItem}</span>
    </li>
        `;
}

function addToStorage(storageItem) {
  const x = localStorage.getItem("list");
  y = JSON.parse(x);
  y.push(storageItem);
  z = JSON.stringify(y);
  localStorage.setItem("list", z);
}

function removeItem(listItem) {
  removeFromStorage(listItem.parentElement.querySelector("span").innerHTML);
  removeFromList(listItem);
}

function removeFromList(listItem) {
  listItem.parentElement.remove();
}

function removeFromStorage(listItem) {
  const x = localStorage.getItem("list");
  y = JSON.parse(x);
  y.forEach((element, index) => {
    if (element === listItem) {
      y.splice(index, 1);
    }
  });
  z = JSON.stringify(y);
  localStorage.setItem("list", z);
}
