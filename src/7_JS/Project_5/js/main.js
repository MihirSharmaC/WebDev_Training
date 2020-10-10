// Search input
const github = new GitHub();
const ui = new UI();

searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
  setTimeout(() => console.log("waiting on Input confirm"), 1500);
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
