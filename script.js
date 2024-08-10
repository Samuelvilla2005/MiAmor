const lanternContainer = document.querySelector('.lantern-container');

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

// Aquí reducimos el intervalo para crear más faroles
setInterval(createLantern, 150); // 150 ms entre cada farol en lugar de 300 ms

document.getElementById('love-button').addEventListener('click', function() {
    const counterElement = document.getElementById('counter');
    const loveMessageElement = document.getElementById('love-message');
    let count = 0;

    // Mostrar el contador
    counterElement.style.display = 'block';
    
    const interval = setInterval(() => {
        count += Math.floor(Math.random() * 1000000) + 100000; // Aumenta rápidamente con números grandes
        counterElement.textContent = count.toLocaleString(); // Formato con comas
    }, 50);

    // Después de 5 segundos, detener el contador y mostrar el mensaje
    setTimeout(() => {
        clearInterval(interval);
        counterElement.textContent = "∞"; // Representa un amor infinito
        loveMessageElement.style.display = 'block';
        loveMessageElement.textContent = "Eres mi sueño hecho realidad. - Enredados";
    }, 5000); // 5 segundos
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    
    // Intenta reproducir el audio cuando se carga la página
    audio.play().catch(function(error) {
        console.log('Error al intentar reproducir el audio:', error);
    });
});