const lanternContainer = document.querySelector('.lantern-container');
const counterElement = document.getElementById('counter');
const loveMessageElement = document.getElementById('love-message');
const specialImage = document.getElementById('special-image');

// Función para crear faroles
function createLantern() {
    const lantern = document.createElement('div');
    lantern.classList.add('lantern');
    
    lantern.style.left = `${Math.random() * 100}vw`;
    lantern.style.animationDuration = `${5 + Math.random() * 5}s`;
    lantern.style.opacity = Math.random() * 0.5 + 0.5;
    
    lanternContainer.appendChild(lantern);
    
    setTimeout(() => {
        lantern.remove();
    }, 10000); // Los faroles se eliminan después de 10s
}

// Intervalo para crear faroles
setInterval(createLantern, 150); // 150 ms entre cada farol

// Lógica del botón
document.getElementById('love-button').addEventListener('click', function() {
    let count = 0;

    // Mostrar el contador
    counterElement.style.display = 'block';
    specialImage.style.display = 'none'; // Asegúrate de que la imagen esté oculta al principio
    
    const interval = setInterval(() => {
        count += Math.floor(Math.random() * 1000000) + 100000; // Aumenta rápidamente con números grandes
        counterElement.textContent = count.toLocaleString(); // Formato con comas
    }, 50);

    // Después de 5 segundos, detener el contador, mostrar el mensaje y la imagen
    setTimeout(() => {
        clearInterval(interval);
        counterElement.textContent = "∞"; // Representa un amor infinito
        loveMessageElement.style.display = 'block';
        loveMessageElement.textContent = "Eres mi sueño hecho realidad. - Enredados";
        specialImage.style.display = 'block'; // Muestra la imagen
    }, 5000); // 5 segundos
});

// Reproduce el audio cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    
    // Intenta reproducir el audio cuando se carga la página
    audio.play().catch(function(error) {
        console.log('Error al intentar reproducir el audio:', error);
    });
});
