let loggedUser = localStorage.getItem("loggedUser");
if (loggedUser) {
    window.location.href = "home.html";
}

const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
const erroSenha = document.getElementById("erroSenha");
const erroSenha2 = document.getElementById("erroSenha2");

function login() {
    if (localStorage.getItem("users") === null) {
        erroSenha2.style.display = "block";
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

    if (!success) return erroSenha.style.display = "block";

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.href = "home.html";
}