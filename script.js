// Crear un array con los números del 1 al 20
const numeros = Array.from({ length: 20 }, (_, i) => i + 1);

let cards = [];

// Función para generar un nuevo array con números aleatorios y únicos
function generarArregloAleatorio() {
    const copiaNumeros = [...numeros];
    const arregloAleatorio = [];

    while (copiaNumeros.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * copiaNumeros.length);
        const numeroAleatorio = copiaNumeros.splice(indiceAleatorio, 1)[0];
        arregloAleatorio.push(numeroAleatorio);
    }

    return arregloAleatorio;
}

// Función para mostrar los números en divs de clase "card"
function mostrarNumerosEnCards(numeros) {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''; // Limpiar los números previos
    cards = [];

    numeros.forEach((numero, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.dataset.moved = 'false'; // Indicar que no se ha movido

        const front = document.createElement('div');
        front.classList.add('card__front');
        front.textContent = numero;

        const back = document.createElement('div');
        back.classList.add('card__back');

        card.appendChild(front);
        card.appendChild(back);

        // Establecer el desplazamiento en el eje Z
        card.style.transform = `rotateX(30deg) rotateY(-180deg) translateZ(${index * 3}px)`;

        card.addEventListener('click', () => moverCard(card));
        cardsContainer.appendChild(card);
        cards.push(card);
    });
}

// Función para mover una carta al hacer clic
function moverCard(card) {
    // Solo mover la carta si no se ha movido antes
    if (card.dataset.moved === 'false') {
        const desplazamiento = 300; // Desplazamiento en px a la derecha
        const index = parseInt(card.dataset.index, 10);

        // Mover la carta 100px a la derecha
        card.style.transform = `rotateX(30deg) rotateY(0deg) translateZ(${index * 3}px) translateX(${desplazamiento}px)`;
        card.dataset.moved = 'true'; // Marcar como movida
    }
}

// Inicializar mostrando un arreglo aleatorio
mostrarNumerosEnCards(generarArregloAleatorio());

// Evento para el botón "barajar"
document.getElementById('barajar').addEventListener('click', () => {
    const nuevoArregloAleatorio = generarArregloAleatorio();
    mostrarNumerosEnCards(nuevoArregloAleatorio);
});
