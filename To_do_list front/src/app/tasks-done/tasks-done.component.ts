import { Component } from '@angular/core';
import { Tarea } from '../tarea';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.css']
})
export class TasksDoneComponent {

  listaComplete: Tarea[]

  constructor(private listaService: ListaService){}

  ngOnInit(){
    this.listaComplete = this.listaService.listaCompletada;
  }

  taskComplete(tarea: Tarea,i: number){

  }

  deleteTask(i:number){

  }
}
