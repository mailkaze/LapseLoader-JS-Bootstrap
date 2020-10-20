class Lapseloader {
  calcPorcentaje(fIni, fFin, fPro) {
    const total = fFin - fIni;
    const progreso = fPro - fIni;
    // round devuelve un integer, hacemos el *10/10 para conseguir un decimal
    const porcentaje = Math.round((progreso / total) * 100 * 10) / 10;
    return porcentaje;
  }

  montarFrase(lapso) {
    //convertimos los milisegundos a años enteros
    const anos = Math.floor(lapso / 1000 / 60 / 60 / 24 / 365.25);
    //el resto de la división anterior nos deja los días sobrantes
    const sobra = (lapso / 1000 / 60 / 60 / 24) % 365.25;
    //al dividirlos entre la media de duración de un mes nos da los meses
    const meses = Math.floor(sobra / 30.4167);
    //y el resto de esa división nos da los días
    const dias = Math.round(sobra % 30.4167);
    return anos + " años, " + meses + " meses y " + dias + " días.";
  }

  calcTranscurrido(fIni, fPro) {
    const transcurrido = fPro - fIni;
    const frase = "Han pasado " + this.montarFrase(transcurrido);
    return frase;
  }

  calcRestante(fFin, fPro) {
    const restante = fFin - fPro;
    const frase = "Faltan " + this.montarFrase(restante);
    return frase;
  }

  calcDias(fIni, fFin, fPro) {
    let total = fFin - fIni;
    let transcurrido = fPro - fIni;
    let restante = fFin - fPro;
    total = total / 1000 / 60 / 60 / 24;
    transcurrido = transcurrido / 1000 / 60 / 60 / 24;
    restante = restante / 1000 / 60 / 60 / 24;

    return (
      "Han pasado " +
      transcurrido +
      " y faltan otros " +
      restante +
      ", de un total de " +
      total +
      " días."
    );
  }

  getMonth(month) {
    switch (month) {
      case 0:
        return 'Enero'
      case 1:
        return 'Febrero'
      case 2:
        return 'Marzo'
      case 3:
        return 'Abril'
      case 4:
        return 'Mayo'
      case 5:
        return 'Junio'
      case 6:
        return 'Julio'
      case 7:
        return 'Agosto'
      case 8:
        return 'Septiembre'
      case 9:
        return 'Octubre'
      case 10:
        return 'Noviembre'
      case 11:
        return 'Diciembre'
      default:
        break;
    }
  }

  resultadoSlider(fIni, fFin, fPro) {
    const porcentaje = this.calcPorcentaje(fIni, fFin, fPro)
    const fecha = new Date(+fPro)
    return `${porcentaje}%, ${fecha.getDate()} de ${this.getMonth(fecha.getMonth())} de ${fecha.getFullYear()}`
  }

}

export default Lapseloader;