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
    console.log(porcentaje)
    console.log(transcurrido)
    console.log(restante)
});

function mostrarResultado() {

};