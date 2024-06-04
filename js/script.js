// Archivo JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Este código se ejecutará después de que el DOM esté completamente cargado
    function mostrarAlerta() {
        alert('Enlaces todavía inactivos');
    }

    // Asigna la función al evento de clic de los enlaces
    var enlaces = document.querySelectorAll('nav a');
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', mostrarAlerta);
    });
});
