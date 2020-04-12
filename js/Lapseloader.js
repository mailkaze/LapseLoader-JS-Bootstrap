class Lapseloader {

    calcPorcentaje(fIni, fFin, fPro) {
        const total = fFin - fIni;
        const progreso = fPro - fIni;
        // round devuelve un integer, hacemos el *10/10 para conseguir un decimal
        const porcentaje = Math.round((progreso/total*100)*10) /10;
        return porcentaje;
    }

    montarFrase(lapso) {
        //convertimos los milisegundos a años enteros
        const anos = Math.floor(lapso/1000/60/60/24/365.25);
        //el resto de la división anterior nos deja los días sobrantes
        const sobra = lapso/1000/60/60/24%365.25;
        //al dividirlos entre la media de duración de un mes nos da los meses
        const meses = Math.floor(sobra/30.4167);
        //y el resto de esa división nos da los días
        const dias = Math.round(sobra % 30.4167);
        return anos + ' años, ' + meses + ' meses y ' + dias + ' días.';
    }

    calcTranscurrido(fIni, fPro) {
        const transcurrido = fPro - fIni;
        const frase = 'Han pasado ' + this.montarFrase(transcurrido);
        return frase;
    }

    calcRestante(fFin, fPro) {
        const transcurrido = fFin - fPro;
        const frase = 'Han pasado ' + this.montarFrase(transcurrido);
        return frase;
    }
}

export default Lapseloader;


