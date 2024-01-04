import { Tarea } from "./tarea";

export class TareaCompletada{
    idTareaCompletada: number;
    tarea: Tarea;

    constructor(tarea?: Tarea) {
        this.tarea = tarea || new Tarea(); // Si tarea es undefined, asigna una nueva instancia de Tarea
    }
}