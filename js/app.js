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
    filtrarAuto();
})
selectMaximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})
selectPuertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
})
selectTransmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
selectColor.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
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

    if (arreglo.length === 0) {
        const error = document.createElement('P');
        error.textContent = "No hubo resultados, intenta con otros filtros de búsqueda.";
        error.classList.add('alerta', 'error');
        resultado.appendChild(error);
    }

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

function limpiarHTML () {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Función de filtrado en base a la búsqueda
function filtrarAuto (e) {

    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    console.log(resultado)
    mostrarAutos(resultado);

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

function filtrarMinimo (elemento) {
    if (datosBusqueda.minimo) {
        return elemento.precio >= parseInt(datosBusqueda.minimo); 
    } else {
        return elemento; 
    }
}

function filtrarMaximo (elemento) {
    if (datosBusqueda.maximo) {
        return elemento.precio <= parseInt(datosBusqueda.maximo); 
    } else {
        return elemento; 
    }
}

function filtrarPuertas (elemento) {
    if (datosBusqueda.puertas) {
        return elemento.puertas === parseInt(datosBusqueda.puertas); 
    } else {
        return elemento; 
    }
}

function filtrarTransmision (elemento) {
    if (datosBusqueda.transmision) {
        return elemento.transmision === datosBusqueda.transmision; 
    } else {
        return elemento; 
    }
}

function filtrarColor (elemento) {
    if (datosBusqueda.color) {
        return elemento.color === datosBusqueda.color; 
    } else {
        return elemento; 
    }
}