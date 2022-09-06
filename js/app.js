// Variables
const resultado = document.querySelector('#resultado');

const selectMarca = document.querySelector('#marca');
const selectYear = document.querySelector('#year');
const selectMinimo = document.querySelector('#minimo');
const selectMaximo = document.querySelector('#maximo');
const selectPuertas = document.querySelector('#puertas');
const selectTransmision = document.querySelector('#transmision');
const selectColor = document.querySelector('#color');

const fechaActual = new Date().getFullYear(); // accedo al año actual
const fechaMinima = fechaActual - 10; // el año minimo de los modelos que voy a vender

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Autos al cargar
    mostrarAutos(autos);
    // Llenar select de años al cargar
    llenarSelectYears();
})

selectMarca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
selectYear.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
})
selectMinimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})
selectMaximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})
selectPuertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})
selectTransmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})
selectColor.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
})


// Funciones
// Creo el HTML de todos los autos existentes.
function mostrarAutos (arreglo) {

    limpiarHTML();

    arreglo.forEach( elemento => {
        const { marca, modelo, year, precio, puertas, color, transmision } = elemento;
        const parrafo = document.createElement('P');
        parrafo.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $${precio} - Color: ${color}`
        resultado.appendChild(parrafo);
    })
}

// Creo el HTML de los años
function llenarSelectYears () {
    for (let i = fechaActual; i >=  fechaMinima; i--) {
        const year = document.createElement('OPTION');
        year.textContent = i;
        year.value = i;
        selectYear.appendChild(year);
    }
}

// Función de filtrado en base a la búsqueda
function filtrarAuto (e) {

    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
    //console.log(resultado)
    mostrarAutos(resultado);

}

function limpiarHTML () {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrarMarca (elemento) {
    if (datosBusqueda.marca) { // si hay un valor en la búsqueda de marca
        return elemento.marca === datosBusqueda.marca; // retorname todos los elementos del array "autos" que tengan el mismo valor de la marca seleccionada en la búsqueda.
    } else {
        return elemento; // si no está puesta ninguna marca en la búsqueda, retorname todos los autos.
    }
}

function filtrarYear (elemento) {
    if (datosBusqueda.year) {
        return elemento.year === parseInt(datosBusqueda.year); 
    } else {
        return elemento; 
    }
}

