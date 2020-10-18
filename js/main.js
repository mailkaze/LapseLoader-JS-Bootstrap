import Lapseloader from "./Lapseloader.js";

document.addEventListener("DOMContentLoaded", (e) => {
  // ponemos la fecha de hoy en el campo progreso:
  const hoy = new Date();
  let dia = "";
  let mes = "";
  const inputProgreso = document.getElementById("fecha-progreso");
  hoy.getDate() > 9 ? (dia = hoy.getDate()) : (dia = "" + "0" + hoy.getDate());
  hoy.getMonth() > 9
    ? (mes = hoy.getMonth())
    : (mes = "" + "0" + (hoy.getMonth() + 1));
  inputProgreso.value = hoy.getFullYear() + "-" + mes + "-" + dia;
});

document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
  let fechaInicial = new Date(document.getElementById("fecha-inicial").value);
  let fechaFinal = new Date(document.getElementById("fecha-final").value);
  let fechaProgreso = new Date(document.getElementById("fecha-progreso").value);

  e.preventDefault();

  const lapLo = new Lapseloader();
  const porcentaje = lapLo.calcPorcentaje(
    fechaInicial,
    fechaFinal,
    fechaProgreso
  );
  const transcurrido = lapLo.calcTranscurrido(fechaInicial, fechaProgreso);
  const restante = lapLo.calcRestante(fechaFinal, fechaProgreso);
  const dias = lapLo.calcDias(fechaInicial, fechaFinal, fechaProgreso);
//   console.log(porcentaje);
//   console.log(transcurrido);
//   console.log(restante);
  mostrarResultado(porcentaje, transcurrido, restante, dias, fechaInicial, fechaFinal, fechaProgreso);
});

function updateSliderMessage(value) {
    console.log(value)
}

function mostrarResultado(porcentaje, transcurrido, restante, dias, fechaInicial, fechaFinal, fechaProgreso) {
  // borramos el título, la barra y el slider si ya están en pantalla
  let ifTitulo = document.getElementsByClassName("card-title")[0];
  if (ifTitulo) {
    document
      .getElementsByClassName("card-title")[0]
      .parentNode.removeChild(document.getElementsByClassName("card-title")[0]);
    document
      .getElementsByClassName("progress")[0]
      .parentNode.removeChild(document.getElementsByClassName("progress")[0]);
      document
      .getElementsByClassName("slider")[0]
      .parentNode.removeChild(document.getElementsByClassName("slider")[0]);
  }
  // pintamos el título de la tarjeta
  const titulo = document.createElement("h5");
  titulo.classList.add("card-title");
	titulo.innerHTML = `${transcurrido}`;
	console.log(titulo)
  const body = document.getElementById("card-body");
  let contenido = document.getElementById("contenido");
  body.insertBefore(titulo, contenido);
  // pintamos la barra de progreso
  const barra = `<div class="progress-bar progress-bar-striped progress-bar-animated 
        bg-success" role="progressbar" aria-valuenow="${porcentaje}" aria-valuemin="0" 
        aria-valuemax="100" style="width: ${porcentaje}%">${porcentaje}%</div>`;
  const progreso = document.createElement("div");
  progreso.classList.add("progress");
  progreso.innerHTML = barra;
	body.insertBefore(progreso, contenido);
	// pintamos el slider y su texto:
  const rangeInput = `<input type="range" name="slider" id="slider" min=${fechaInicial.getTime()} max=${fechaFinal.getTime()} value=${fechaProgreso.getTime()}>` 
	
	const sliderLabel = document.createElement("p")
	sliderLabel.innerHTML = `Desplaza el punto para ver un porcentaje y su fecha correspondiente`
	console.log(sliderLabel)

	const slider = document.createElement("div")
  slider.classList.add("slider")
	slider.innerHTML = rangeInput
	body.insertBefore(slider, contenido)
	body.insertBefore(sliderLabel, contenido)
  // pintamos el texto con el resultado
  contenido.innerHTML = restante + "<br>" + dias;

  const sliderComponent = document.getElementById('slider')
	const lapLo = new Lapseloader()
  sliderComponent.addEventListener('input', () => {
		sliderLabel.innerHTML = lapLo.resultadoSlider(fechaInicial, fechaFinal, Date.parse(sliderComponent.value))
		// TODO: no es tan facil, hay que pillar el min, el max y el value. con ellos hay que mostrar un porcentaje y traducir value a fecha
	})
}

