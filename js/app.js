// Variables
const resultado = document.querySelector('#resultado');

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})

// Funciones

// Creo el HTML de todos los autos existentes.
function mostrarAutos () {
    autos.forEach( elemento => {
        const { marca, modelo, year, precio, puertas, color, transmision } = elemento;
        const parrafo = document.createElement('P');
        parrafo.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}`
        resultado.appendChild(parrafo);
    })
}