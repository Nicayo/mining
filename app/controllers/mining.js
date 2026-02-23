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

let quantidade = new Map()
    quantidade.set("pedra", 0);
    quantidade.set("prata", 0);
    quantidade.set("ouro", 0);
    quantidade.set("platina", 0);
    quantidade.set("Diamante", 0);
    quantidade.set("Bitcoin", 0);


function minerar() {
    document.getElementById("bar").value +=50
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
    
    

    switch(minerioSorteado) {
        case "pedra":
            quantidade.get("pedra")
            quantidade.set("pedra", quantidade.get("pedra") + 1)
            let minerio = quantidade.get("pedra")
            let pedra = document.getElementById("minerioPedra");
            let texto = pedra.innerText;
            if (texto.length >= 8) {
                let novoTexto = texto.substring(0, 8) + minerio
                pedra.innerText = novoTexto;
            }
        break;

        case "prata":
            quantidade.get("prata")
            quantidade.set("prata", quantidade.get("prata") + 1)
            let minerio1 = quantidade.get("prata")
            let prata = document.getElementById("minerioPrata");
            let texto1 = prata.innerText;
            if (texto1.length >= 7) {
                let novoTexto = texto1.substring(0, 7) + minerio1
                prata.innerText = novoTexto;
            }
        break;

        case "ouro":
            quantidade.get("ouro")
            quantidade.set("ouro", quantidade.get("ouro") + 1)
            let minerio2 = quantidade.get("ouro")
            let Ouro = document.getElementById("minerioOuro");
            let texto2 = Ouro.innerText;
            if (texto2.length >= 6) {
                let novoTexto = texto2.substring(0, 6) + minerio2
                Ouro.innerText = novoTexto;
            }
        break

        case "platina":
            quantidade.get("platina")
            quantidade.set("platina", quantidade.get("platina") + 1)
            let minerio3 = quantidade.get("platina")
            let platina = document.getElementById("minerioPlatina");
            let texto3 = platina.innerText;
            if (texto3.length >= 9) {
                let novoTexto = texto3.substring(0, 9) + minerio3
                platina.innerText = novoTexto;
            }
        break

        case "Diamante":
            quantidade.get("Diamante")
            quantidade.set("Diamante", quantidade.get("Diamante") + 1)
            let minerio4 = quantidade.get("Diamante")
            let diamante = document.getElementById("minerioDiamante");
            let texto4 = diamante.innerText;
            if (texto4.length >= 10) {
                let novoTexto = texto4.substring(0, 10) + minerio4
                diamante.innerText = novoTexto;
            }
        break

        case "BitCoin":
            quantidade.get("Bitcoin")
            quantidade.set("Bitcoin", quantidade.get("Bitcoin") + 1)
            let minerio5 = quantidade.get("Bitcoin")
            let bitcoin = document.getElementById("minerioBitCoin");
            let texto5 = bitcoin.innerText;
            if (texto5.length >= 9) {
                let novoTexto = texto5.substring(0, 9) + minerio5
                bitcoin.innerText = novoTexto;
            }
        break
    }
    console.log(quantidade)
    
}}

