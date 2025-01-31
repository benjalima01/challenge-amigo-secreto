// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

// **  Mis Variables **

let listaAmigos = [];
let numeroDeAmigos = 0;

console.log(listaAmigos);

// ** Funciones **

// dejar vacio el input
function limpiarCaja() {
  document.getElementById("amigo").value = "";
}

// poner los nombres a la lista

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  // Validar que el nombre solo contenga caracteres alfabéticos
  if (!/^[a-zA-Z]+$/.test(nombreAmigo)) {
    alert("Por favor, ingresa un nombre válido (solo letras).");
    return;
  }
  if (nombreAmigo.length < 3) {
    if (nombreAmigo.trim() === "") {
      alert("Por favor, inserte un nombre.");
    } else {
      alert("El nombre debe tener al menos 3 letras.");
    }
    return;
  }
  if (listaAmigos.includes(nombreAmigo)) {
    // Si el nombre ya existe, damos una alerta informando al usuario para que ingrese el nombre de otra forma.
    alert(`¡${nombreAmigo} ya existe! Debes ingresar un nombre distinto.`);
    return;
  }

  listaAmigos.push(nombreAmigo);
  // dejar en blanco el input de texto
  numeroDeAmigos++;
  limpiarCaja();
  mostrarAmigos();
}

function mostrarAmigos() {
  // Obtener la lista HTML donde se mostrarán los amigos
  let listadoAmigos = document.getElementById("listaAmigos");
  listadoAmigos.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    const elemento = document.createElement("li");
    elemento.textContent = listaAmigos[i];
    listadoAmigos.appendChild(elemento);
  }
}

function sortearAmigo() {
  let cantidadAmigos = listaAmigos.length;
  if (cantidadAmigos < 2) {
    alert("Debes tener al menos 2 amigos para poder sortear.");
    return;
  }
  let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
  let resultadoHTML = document.getElementById("resultado");
  resultadoHTML.innerHTML = listaAmigos[indiceAmigo];
  resultadoHTML.textContent = `¡Tu amigo secreto es ${listaAmigos[indiceAmigo]}!`;
  limpiarCaja();
}

function reiniciarJuego() {
  if (numeroDeAmigos === 0) {
    alert("Debes jugar para poder reiniciar.");
  } else {
    // Limpiar la lista de amigos
    listaAmigos = [];
    numeroDeAmigos = 0;
    let resultadoHTML = document.getElementById(`resultado`);
    resultadoHTML.innerHTML = "";
    let listadoAmigos = document.getElementById("listaAmigos");
    listadoAmigos.innerHTML = "";
    // Limpiar el input de texto
    limpiarCaja();
  }
}
