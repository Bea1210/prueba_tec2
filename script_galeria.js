document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.grid-item img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            const altTexto = this.getAttribute('alt');
            alert(`¡Hiciste clic en la imagen: ${altTexto}!`);
        });
    });
});