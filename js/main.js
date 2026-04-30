document.addEventListener('DOMContentLoaded', () => {
    const mensajes = [
        'Bienvenidos al sitio oficial del Grupo 21.',
        'Explora nuestros perfiles individuales y la bitácora de desarrollo.',
        'Diseño adaptable y navegación clara para cada integrante.'
    ];
    const btn = document.getElementById('btnSaludo');
    const salida = document.getElementById('mensajeBienvenida');

    if (btn && salida) {
        btn.addEventListener('click', () => {
            const index = Math.floor(Math.random() * mensajes.length);
            salida.textContent = mensajes[index];
            salida.classList.add('visible');
        });
    }
});