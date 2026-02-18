let loggedUser = localStorage.getItem("loggedUser");
if (!loggedUser) {
    window.location.href = "login.html";
}
loggedUser = JSON.parse(loggedUser);

const usernameSpan = document.getElementById("username");
usernameSpan.innerText = loggedUser.userName;

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}
