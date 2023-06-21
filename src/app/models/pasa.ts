export class Pasa {
    id_pasa?: string;
    hora: string;
    id_cine: string;
    id_pelicula: String

    constructor(hora:string, id_cine:string, id_pelicula:string){
        this.hora = hora;
        this.id_cine = id_cine;    
        this.id_pelicula = id_pelicula;
    }
}