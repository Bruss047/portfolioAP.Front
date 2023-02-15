export class Experiencia {
    id?: number;
    nombreExp: string;
    puesto: string;
    descExp: string;
    fechaInicio: string;
    fechaFin: string;

    constructor(nombreExp: string, puesto: string, descExp: string, fechaInicio: string, fechaFin: string) {
        this.nombreExp = nombreExp;
        this.puesto = puesto;
        this.descExp = descExp;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}