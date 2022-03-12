export class Persona{
    id?: string;
    email: string ;
    nombre: string ;
    comunidad: string;
    numero: string;
    operadora: string;
    gestor: string;
    fechaNacimiento: Date;
    puntos:number;

    constructor(email:string, nombre: string,comunidad: string,numero: string,operadora: string,gestor: string,fechaNacimiento: Date,puntos:number){
        this.email=email;
        this.nombre=nombre;
        this.comunidad=comunidad;
        this.numero=numero;
        this.operadora=operadora;
        this.gestor=gestor;
        this.fechaNacimiento=fechaNacimiento;
        this.puntos=puntos;

    }

}