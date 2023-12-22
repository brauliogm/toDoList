import { Component } from '@angular/core';
import { Tarea } from '../tarea';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  lista: Tarea[];

  constructor(private listaService: ListaService){}

  ngOnInit(){
    this.lista = this.listaService.lista;
  }

  deleteTask(numTarea: number){
    this.listaService.eliminarTarea(numTarea);
  }

  taskComplete(task: Tarea, i: number){
    this.listaService.agregarTareaCompletada(task)
    this.deleteTask(i);
  }
  

}
