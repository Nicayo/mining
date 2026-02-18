let loggedUser = localStorage.getItem("loggedUser");
if (loggedUser) {
    window.location.href = "home.html";
}

const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
const confirmPassWord = document.getElementById("confirmPassWord");

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
        alert("Novo usuário registrado, pressione o botão 'Entrar' e realize o login!");
        userName.value = null;
        passWord.value = null;
        confirmPassWord.value = null;
    }
}

function validateFields() {

    switch (true) {
        case userName.value.length > 20:
            alert("Nome muito grande"); 
            return false;
 
        case userName.value.length < 5:
            alert("Nome muito pequeno");  
            return false;

        case passWord.value.length < 8:
            alert("Sua senha deve ter mais de 8 digitos");
            return false;

        case confirmPassWord.value != passWord.value:
            alert("Senhas diferentes.");
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
        if (duplicated) alert("usuario ja existente");
        return !duplicated;
    }

    return true;
}
