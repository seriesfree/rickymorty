document.addEventListener('DOMContentLoaded', function() {
    var titulosTemporada = document.querySelectorAll('.temporada-titulo');

    titulosTemporada.forEach(function(tituloTemporada) {
        tituloTemporada.addEventListener('click', function() {
            var episodios = this.nextElementSibling; // Selecciona la lista de episodios siguiente al título
            episodios.classList.toggle('mostrar'); // Alternar la clase 'mostrar' para mostrar u ocultar la lista de episodios
        });
    });
});

