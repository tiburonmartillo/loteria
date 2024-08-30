// script.js
function flipCard(card) {
    card.classList.toggle('flipped');

    // Verifica si la carta ya está volteada
    if (card.classList.contains('flipped')) {
        // Mueve la carta al contenedor de cartas seleccionadas
        setTimeout(() => {
            document.querySelector('.selected-cards').appendChild(card);
            card.classList.remove('flipped');
        }, 1200); // Espera a que termine la animación
    }
}
