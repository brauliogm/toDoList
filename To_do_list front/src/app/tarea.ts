export class Tarea{
    idTarea: number;
    descripcion: string = "";
    isChecked:boolean = false;

    constructor(descripcion?: string) {
        this.descripcion = descripcion || ""; // Si tarea es undefined, asigna una nueva instancia de Tarea
    }
}