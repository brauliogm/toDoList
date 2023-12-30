import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { Observable } from 'rxjs';
import { TareaCompletada } from './tareaCompletada';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  task: Tarea;
  lista: Tarea[] = [];
  listaCompletada: Tarea[] = [];

  private urlTarea = "http://localhost:8080/toDo-app/tarea";
  private urlTareaCompletada = "http://localhost:8080/toDo-app/tarea-completada";

  constructor(private clientHTTP: HttpClient) { }

  obtenerListaTarea(): Observable<Tarea[]>{
    return this.clientHTTP.get<Tarea[]>(this.urlTarea);
  }

  obtenerListaTareasCompletadas(): Observable<TareaCompletada[]>{
    return this.clientHTTP.get<TareaCompletada[]>(this.urlTareaCompletada);
  }

  agregarTarea(nuevaTarea: Tarea){
    this.lista.push(nuevaTarea);
  }

  eliminarTarea(numTarea: number){
    this.lista.splice(numTarea, 1);
  }

  agregarTareaCompletada(nuevaTarea: Tarea){
    this.listaCompletada.push(nuevaTarea);
    
  }

  eliminarTareaCompletada(numTarea: number){
    this.listaCompletada.splice(numTarea, 1);
  }
  
  deleteAllTaskComplete(){
    this.listaCompletada.splice(0, this.listaCompletada.length);
  }

  editTask(task: Tarea){
    
  }
  

}
