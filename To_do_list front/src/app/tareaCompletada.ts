import { Tarea } from "./tarea";

export class TareaCompletada{
    idTareaCompletada: number;
    descripcion: string = "";
    checked:boolean = true;

    constructor(descripcion?: string) {
        this.descripcion = descripcion || ""; // Si tarea es undefined, asigna una nueva instancia de Tarea
    }
}