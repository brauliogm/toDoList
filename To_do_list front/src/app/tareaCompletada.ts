import { Tarea } from "./tarea";

export class TareaCompletada{
    idTareaCompletada: number;
    descripcion: string = "";
    isChecked:boolean = true;

    constructor(descripcion?: string) {
        this.descripcion = descripcion || ""; // Si tarea es undefined, asigna una nueva instancia de Tarea
    }
}