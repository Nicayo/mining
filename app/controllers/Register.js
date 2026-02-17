const userName = document.getElementById("userName");

const passWord = document.getElementById("passWord");
const confirmPassWord = document.getElementById("confirmPassWord");

function validateFields() {
    switch (true) {
        case userName.value.length > 20:
                alert("Nome muito grande");
            break;
        case userName.value.length < 5:
                alert("Nome muito pequeno");
            break;

        //verificar se esta no sistema

        case passWord.value.length < 8:
                alert("Sua senha deve ter mais de 8 digitos");
            break;

        //verificar se esta no sistema

        case confirmPassWord.value != passWord.value:
            alert("Senhas diferentes.");


    }
 

}

function registerUser() {
    validateFields()
    console.log(userName.value);
    
    
}
