function verify() {
    if (localStorage.getItem("loged") === null) {
        window.location.href = "login.html";
    }

}
verify()