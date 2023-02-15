export class Educacion {
    id?: number;
    nombreEd: string;
    tituloEd: string;
    descEd: string;
    imgEdu: string;
    inicio: string;
    fin: string


    constructor(nombreEd: string, tituloEd: string, descEd: string, imgEdu: string, inicio: string, fin: string) {
        this.nombreEd = nombreEd;
        this.tituloEd = tituloEd;
        this.descEd = descEd;
        this.imgEdu = imgEdu;
        this.inicio = inicio;
        this.fin = fin;
    }

}
