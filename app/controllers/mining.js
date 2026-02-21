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

let bar = document.getElementById("bar").value
const buttonBar = document.getElementById("minerar").value
const nivelNumber = document.getElementById("nivelNumber");

function minerar() {
    document.getElementById("bar").value +=5
    document.getElementById("nivelBar").value +=1

    if (document.getElementById("nivelBar").value == 100) {
        document.getElementById("nivelBar").value = 0
        let nivelAtual = Number(document.getElementById("nivelNumber").innerText);
    nivelAtual += 1;

    document.getElementById("nivelNumber").innerText = nivelAtual;
}
    
    if (document.getElementById("bar").value == 100) {
        document.getElementById("bar").value = 0
        
        let array = []
    for (let i = 1; i <= 168; i++) {
        
        

        if (i <= 90) {
            array.push("pedra");
            
            
        }else if (i <= 150 && i >= 91){
            array.push("prata");
           

        }else if (i <= 160 && i >= 151) {
            array.push("ouro");
            

        }else if (i <= 165 && i >= 161) {
            array.push("platina");
            

        }else if (i <= 167 && i >= 166) {
            array.push("Diamante");
            

        }else if (i >= 168) {
            array.push("BitCoin");
            

        }
         
    
            
    } 
    
    
     let aleatorio = Math.floor((Math.random()* 168) + 1)       
            
    
    let minerioSorteado = array[aleatorio]
    document.getElementById("ultimoMinerioNome").innerHTML = minerioSorteado
    
}}


    








         