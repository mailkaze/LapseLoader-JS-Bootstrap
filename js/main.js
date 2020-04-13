import Lapseloader from './Lapseloader.js';

document.addEventListener('DOMContentLoaded', (e) => {
    // ponemos la fecha de hoy en el campo progreso:
    const hoy = new Date();
    let dia = '';
    let mes = '';
    const inputProgreso = document.getElementById('fecha-progreso');
    hoy.getDate() > 9 ? dia = hoy.getDate() : dia = '' + '0' + hoy.getDate();
    hoy.getMonth() > 9 ? mes = hoy.getMonth() : mes = '' + '0' + (hoy.getMonth()+1);
    inputProgreso.value = hoy.getFullYear() + '-' + mes + '-' + dia;
});

document.getElementsByTagName('button')[0].addEventListener('click', (e) => {
    let fechaInicial = new Date (document.getElementById('fecha-inicial').value);
    let fechaFinal = new Date (document.getElementById('fecha-final').value);
    let fechaProgreso = new Date (document.getElementById('fecha-progreso').value);

    e.preventDefault();
    
    const lapLo = new Lapseloader();
    const porcentaje = lapLo.calcPorcentaje(fechaInicial, fechaFinal, fechaProgreso);
    const transcurrido = lapLo.calcTranscurrido(fechaInicial, fechaProgreso);
    const restante = lapLo.calcRestante(fechaFinal, fechaProgreso);
    const dias = lapLo.calcDias(fechaInicial, fechaFinal, fechaProgreso);
    console.log(porcentaje)
    console.log(transcurrido)
    console.log(restante)
    mostrarResultado(porcentaje, transcurrido, restante, dias);
});

function mostrarResultado(porcentaje, transcurrido, restante, dias) {
    // borramos el título y la barra si ya están en pantalla
    let ifTitulo = document.getElementsByClassName('card-title')[0]
    if (ifTitulo) {
        document.getElementsByClassName('card-title')[0].parentNode.removeChild(document.getElementsByClassName('card-title')[0]);   
        document.getElementsByClassName('progress')[0].parentNode.removeChild(document.getElementsByClassName('progress')[0]);   
    }
     // pintamos el título de la tarjeta
     const titulo = document.createElement('h5');
     titulo.classList.add("card-title");
     titulo.innerHTML = `${ transcurrido }`;
     const body = document.getElementById('card-body');
     let contenido = document.getElementById('contenido');
     body.insertBefore(titulo, contenido);
     // pintamos la barra de progreso
     const barra = `<div class="progress-bar progress-bar-striped progress-bar-animated 
        bg-success" role="progressbar" aria-valuenow="${ porcentaje }" aria-valuemin="0" 
        aria-valuemax="100" style="width: ${ porcentaje }%">${ porcentaje }%</div>`
     const progreso = document.createElement('div');
     progreso.classList.add("progress");
     progreso.innerHTML = barra;
     body.insertBefore(progreso, contenido);
    // pintamos el texto con el resultado
    contenido.innerHTML = restante + "<br>" + dias;
    
};