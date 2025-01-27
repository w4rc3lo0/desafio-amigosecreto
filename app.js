// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Inicializamos un arreglo para almacenar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtenemos el valor del campo de texto
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregamos el nombre al arreglo
    amigos.push(nombre);

    // Actualizamos la lista visible
    actualizarListaAmigos();

    // Limpiamos el campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Función para actualizar la lista de nombres en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiamos la lista actual

    // Recorremos los nombres y los agregamos como elementos de lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.className = "name-item";
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    // Validamos que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de realizar el sorteo.");
        return;
    }

    // Generamos un índice aleatorio basado en la longitud del arreglo
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    const amigoSecreto = amigos[indiceGanador];

    // Mostramos el resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="result-item">🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
