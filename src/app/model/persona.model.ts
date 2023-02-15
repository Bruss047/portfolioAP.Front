export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    direccion: String;
    sobreMi: String;
    telefono: number;
    email: String;
    img: String;


    constructor(nombre: String, apellido: String, direccion: String, sobreMi: String, telefono: number, email: String, img: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.sobreMi = sobreMi;
        this.telefono = telefono;
        this.email = email;
        this.img = img;
    }
}