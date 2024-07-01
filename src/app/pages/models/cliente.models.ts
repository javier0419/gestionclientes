export enum Genero {
    M = 'M',
    F = 'F',
    Otro = 'Otro'
}

export class ClienteModel {
    idcliente: number;
    nombre: string;
    apellido: string;
    genero: Genero;
    ciudad: string;
    pais: string;
    email: string;
    contrasena: string;

    constructor() {
        this.idcliente = 0;
        this.nombre = '';
        this.apellido = '';
        this.genero = Genero.Otro;
        this.ciudad = '';
        this.pais = '';
        this.email = '';
        this.contrasena = '';
    }
}
