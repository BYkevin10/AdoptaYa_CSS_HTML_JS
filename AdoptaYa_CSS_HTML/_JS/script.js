// script.js
const botonesFiltro = document.querySelectorAll('.filtro-btn');
const figuras = document.querySelectorAll('.imagen-mascota');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        const filtro = boton.getAttribute('data-filtro');

        // Quitar clase 'activo' de todos
        botonesFiltro.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');

        figuras.forEach(figura => {
            if (filtro === 'todos') {
                figura.style.display = 'block';
            } else {
                if (figura.classList.contains(filtro)) {
                    figura.style.display = 'block';
                } else {
                    figura.style.display = 'none';
                }
            }
        });
    });
});


