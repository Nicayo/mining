const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
const confirmPassWord = document.getElementById("confirmPassWord");



function registerUser() {
    
    const listUser = [];
    
    if (validateFields() === true) {

        const user = {
            userName: userName.value,
            passWord: passWord.value
        }

        listUser.push(user);
        localStorage.setItem("user", JSON.stringify(listUser));
        if (localStorage.getItem("user") !== null) {
            listUser.push(user); 
        }
        
    
    }
    
}
function validateFields() {
    
    if (localStorage.getItem("user") !== null) {

        let duplicated = false;

        JSON.parse(localStorage.getItem("user")).forEach(function(user) {
                
            if (user.userName === userName.value) {
                
                duplicated = true;
            }
                
        });
        if (duplicated) alert("usuario ja existente");
        return !duplicated;
    }
        

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

        default: return true;

    }

 

}

//[{"userName":"nicayo","passWord":"12345678"},{"userName":"nicayo","passWord":"12345678"}]
