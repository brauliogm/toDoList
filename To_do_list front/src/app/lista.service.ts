import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  lista: Tarea[] = [];

  private urlBase = "";

  constructor(private clientHTTP: HttpClient) { }

  agregarTarea(nuevaTarea: Tarea){
    this.lista.push(nuevaTarea);
    console.log(this.lista);
  }

  eliminarTarea(numTarea: number){
    this.lista.slice(numTarea, 1);
  }
}
