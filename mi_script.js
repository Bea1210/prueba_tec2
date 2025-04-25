document.addEventListener('DOMContentLoaded', function() {
    const miBoton = document.getElementById('miBoton');

    if (miBoton) {
        miBoton.addEventListener('click', function() {
            alert('¡Hola! Este es un botón interactivo.');
        });
    }
});