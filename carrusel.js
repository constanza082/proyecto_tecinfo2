document.addEventListener('DOMContentLoaded', function() {
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    const carruselTrack = document.querySelector('.carrusel-track');
    const botones = document.querySelectorAll('.carrusel-boton');
    const imagenes = document.querySelectorAll('.carrusel-imagen');

    let indiceImagenActual = 0;
    const anchoImagen = imagenes[0].offsetWidth; // Ancho de una imagen

    function moverCarrusel() {
        carruselTrack.style.transform = `translateX(-${indiceImagenActual * anchoImagen}px)`;
    }

    function actualizarBotones() {
        botones.forEach(boton => boton.classList.remove('deshabilitado'));
        if (indiceImagenActual === 0) {
            botones[0].classList.add('deshabilitado'); // Deshabilita el botón "anterior" en la primera imagen
        } else if (indiceImagenActual === imagenes.length - 1) {
            botones[1].classList.add('deshabilitado'); // Deshabilita el botón "siguiente" en la última imagen
        }
    }

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const esBotonAnterior = this.classList.contains('anterior');

            if (esBotonAnterior) {
                indiceImagenActual = Math.max(indiceImagenActual - 1, 0);
            } else {
                indiceImagenActual = Math.min(indiceImagenActual + 1, imagenes.length - 1);
            }

            moverCarrusel();
            actualizarBotones();
        });
    });

    // Inicializar botones
    actualizarBotones();

    // Opcional: Hacer el carrusel responsivo al redimensionar la ventana
    window.addEventListener('resize', function() {
        const nuevoAnchoImagen = imagenes[0].offsetWidth;
        carruselTrack.style.transform = `translateX(-${indiceImagenActual * nuevoAnchoImagen}px)`;
    });
});