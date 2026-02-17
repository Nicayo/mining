const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");

function verify() {
    if (localStorage.getItem("user") != null) {
    
        let sucess = false;
        let loggedUser;

        JSON.parse(localStorage.getItem("user")).forEach(function(user) {
                
            if (user.userName === userName.value && user.passWord === passWord.value) {
                loggedUser = user;
                sucess = true;
            }
                
        });

        if (!sucess) alert("usuario/senha incorretos");

        if (sucess) {
            //gravar que o usuario esta logado no localstorage
            //mandar ele pra outra pagina
            localStorage.setItem("loged", JSON.stringify(loggedUser))
            window.location.href = "home.html";


        }

    }else{
        alert("usuario/senha incorretos")
    }


}

//