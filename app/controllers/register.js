let loggedUser = localStorage.getItem("loggedUser");
if (loggedUser) {
    window.location.href = "home.html";
}

const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
const confirmPassWord = document.getElementById("confirmPassWord");
const userExist = document.getElementById("userExist");
const displaySucess = document.getElementById("telaSucesso");

function registerUser() {
    
    if (validateFields()) {
        let usersList = localStorage.getItem("users");

        const user = {
            userName: userName.value,
            passWord: passWord.value
        };

        if(usersList) {
            usersList = JSON.parse(usersList);
            usersList.push(user);
        } else {
            usersList = [user];
        }

        localStorage.setItem("users", JSON.stringify(usersList));
    
        displaySucess.classList.remove("oculto");
        displaySucess.classList.add("ativo");
        

        userName.value = null;
        passWord.value = null;
        confirmPassWord.value = null;
    }
}

function validateFields() {

    switch (true) {
        case userName.value.length > 20:
            userExist.innerHTML = "Nome muito grande";
            userExist.style.display = "block"; 
            return false;
 
        case userName.value.length < 5:
            userExist.innerHTML = "Nome muito pequeno";
            userExist.style.display = "block";
            return false;

        case passWord.value.length < 8:
            userExist.innerHTML = "Sua senha deve ter mais de 8 digitos";
            userExist.style.display = "block";
            return false;

        case confirmPassWord.value != passWord.value:
            userExist.innerHTML = "Senhas diferentes";
            userExist.style.display = "block";
            return false;
    }

    const usersList = localStorage.getItem("users");

    if (usersList) {
        let duplicated = false;

        JSON.parse(usersList).forEach(function(user) {
            if (user.userName === userName.value) {
                duplicated = true;
            }
        });
        if (duplicated) {
            userExist.innerHTML = "Usuário existente"
            userExist.style.display = "block";
        }
        return !duplicated;
    }

    return true;
}
