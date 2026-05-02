document.addEventListener('DOMContentLoaded', () => {
    const mensajes = [
        'Bienvenidos al sitio oficial del Grupo 21.',
        'Explora nuestros perfiles individuales y la bitácora de desarrollo.',
        'Diseño adaptable y navegación clara para cada integrante.'
    ];
    const btn = document.getElementById('btnSaludo');
    const salida = document.getElementById('mensajeBienvenida');

    //AGREGANDO CONSTANTES PARA MENU DESPLEGABLE
    const nav = document.getElementById('siteNav');
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');

    if (btn && salida) {
        btn.addEventListener('click', () => {
            const index = Math.floor(Math.random() * mensajes.length);
            salida.textContent = mensajes[index];
            salida.classList.add('visible');
        });
    }

    //*CONDICIONAL MENU DESPLEGABLE
    if (nav && menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.textContent = isOpen ? '✕ Cerrar' : '☰ Menú';
    });
    //CERRAR MENU AL TOCAR UNA OPCION (EN MOVIL)
    mainMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && window.innerWidth <= 768) {
            nav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰ Menú';
        }
    });
    // SI VUELVE A DESKTOP RESETEAR ESTADO
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰ Menú';
        }
    });
    }
});