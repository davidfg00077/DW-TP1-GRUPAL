document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnInteract');
    const card = document.getElementById('davidCard');

    if (btn && card) {
        btn.addEventListener('click', () => {
            card.classList.toggle('theme-alt');
            btn.textContent = card.classList.contains('theme-alt') ? 'Restaurar estilo' : 'Cambiar estilo de tarjeta';
        });
    }
});