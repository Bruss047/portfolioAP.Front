export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    img: string;
    urlP: string;



    constructor(nombre: string, descripcion: string, img: string, urlP: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.urlP = urlP;
   
    }
}