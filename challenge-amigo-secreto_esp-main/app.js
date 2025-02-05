// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaDeAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];




function agregarAmigo() {

    if(inputAmigo.value !== "") {

        amigos.push(inputAmigo.value)

        
        let li = document.createElement("li");
        li.textContent = inputAmigo.value;
        listaDeAmigos.appendChild(li);
        
        inputAmigo.value = ""
    }else{
        alert("Por favor ingresa un nombre válido")
    }
    


    
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const amigoSecreto = Math.floor(Math.random() * amigos.length);
    // Limpiar resultado anterior antes de agregar el nuevo
    resultado.innerHTML = "";  

const liAmigoSecreto = document.createElement("li");
liAmigoSecreto.textContent = "El amigo secreto es: " +  amigos[amigoSecreto]
resultado.appendChild(liAmigoSecreto)
listaDeAmigos.innerHTML = "";
amigos = [];

}


