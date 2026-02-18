let loggedUser = localStorage.getItem("loggedUser");
if (loggedUser) {
    window.location.href = "home.html";
}

const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");

function login() {
    if (localStorage.getItem("users") === null) {
        alert("Usuario/senha incorretos");
        return;
    }

    let success = false;
    let loggedUser;

    JSON.parse(localStorage.getItem("users")).forEach(function(user) {
        if (user.userName === userName.value && user.passWord === passWord.value) {
            loggedUser = user;
            success = true;
        }
    });

    if (!success) return alert("Usuario/senha incorretos");

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.href = "home.html";
}