document.addEventListener('DOMContentLoaded', (e) => {
    const hoy = new Date();
    console.log(hoy)
    let dia = '';
    let mes = '';
    inputProgreso = document.getElementById('fecha-progreso');
    hoy.getDate() > 9 ? dia = hoy.getDate() : dia = '' + '0' + hoy.getDate();
    hoy.getMonth() > 9 ? mes = hoy.getMonth() : mes = '' + '0' + (hoy.getMonth()+1);
    inputProgreso.value = hoy.getFullYear() + '-' + mes + '-' + dia;
});

document.getElementsByTagName('button')[0].addEventListener('click', (e) => {
    const fechaInicial = new Date (document.getElementById('fecha-inicial').value);
    const fechaFinal = new Date (document.getElementById('fecha-final').value);
    const fechaProgreso = new Date (document.getElementById('fecha-progreso').value);

    e.preventDefault();
    calcular(fechaInicial, fechaFinal, fechaProgreso);
});

function calcular(fi, ff, fp) {
    console.log('Calculando con ', fi, ff, fp);
};

function mostrarResultado() {

};