import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  lista: Tarea[] = [];
  listaCompletada: Tarea[] = [];

  private urlBase = "";

  constructor(private clientHTTP: HttpClient) { }

  agregarTarea(nuevaTarea: Tarea){
    this.lista.push(nuevaTarea);
  }

  eliminarTarea(numTarea: number){
    this.lista.splice(numTarea, 1);
  }

  agregarTareaCompletada(nuevaTarea: Tarea){
    this.listaCompletada.push(nuevaTarea);
    console.log(this.listaCompletada);
    
  }
}
