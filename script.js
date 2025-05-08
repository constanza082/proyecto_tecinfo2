document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.galeria img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            // Aquí puedes agregar la lógica para la interactividad
            // Por ejemplo, mostrar la imagen en un modal,
            // cambiar el borde al hacer clic, etc.
            console.log('Imagen ক্লিক করা হয়েছে:', this.alt);
            this.classList.toggle('seleccionada'); // Ejemplo: agregar/quitar una clase al hacer clic
        });
    });
});