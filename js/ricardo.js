document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnRicardoAction');
    const extra = document.getElementById('ricardoExtra');

    if (btn && extra) {
        btn.addEventListener('click', () => {
            const visible = extra.classList.toggle('visible');
            btn.textContent = visible ? 'Ocultar detalle' : 'Mostrar detalle';
        });
    }
});