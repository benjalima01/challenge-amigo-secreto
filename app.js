// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


// **  Mis Variables **


let listaAmigos = [];

let amigosSorteados = [];


// ** Funciones **


// dejar vacio el input
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}


// poner los nombres a la lista 

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        } else if (listaAmigos.includes(nombreAmigo)) {
            // Si el nombre ya existe, damos una alerta informando al usuario para que ingrese el nombre de otra forma.
            alert(`¡${nombreAmigo} ya existe! Debes ingresar un nombre distinto.`)
    } else {
        listaAmigos.push(nombreAmigo);
        // dejar en blanco el input de texto
        limpiarCaja(); 
        mostrarAmigos();
    }     
}

function mostrarAmigos() {
    // Obtener la lista HTML donde se mostrarán los amigos
    let listadoAmigos = document.getElementById('listaAmigos');
    listadoAmigos.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        const elemento = document.createElement("li");
        elemento.textContent = listaAmigos[i];
        listadoAmigos.appendChild(elemento);
    }
}


function sortearAmigo() {
    let cantidadAmigos = listaAmigos.length;
    if (cantidadAmigos === 0) {
      alert("Por favor, inserte un nombre antes de sortear");
    } else {
      let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
      let resultadoHTML = document.getElementById("resultado");
      resultadoHTML.innerHTML = listaAmigos[indiceAmigo];
    }
  }



    




/* Verifica que el nombre no esté vacío antes de agregarse y actualiza la lista visual.*/


