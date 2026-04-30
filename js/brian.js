document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnBrianAction');
    const extra = document.getElementById('brianExtra');

    if (btn && extra) {
        btn.addEventListener('click', () => {
            const mostrando = extra.classList.toggle('visible');
            btn.textContent = mostrando ? 'Ocultar consejo' : 'Mostrar consejo';
        });
    }
});