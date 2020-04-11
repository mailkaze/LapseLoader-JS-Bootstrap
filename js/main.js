document.addEventListener('DOMContentLoaded', (e) => {
    const hoy = new Date();
    inputProgreso = document.getElementById('fecha-progreso');
    // inputProgreso.value = hoy.getFullYear() + '-' + hoy.getMonth() + '-' + hoy.getDate();
    inputProgreso.value = hoy;
    console.log(hoy.get)
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