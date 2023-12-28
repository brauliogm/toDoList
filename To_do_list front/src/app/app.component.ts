import { Component } from '@angular/core';
import { Tarea } from './tarea';
import { ListaService } from './lista.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tarea: Tarea = new Tarea();
  listaCompletada: Tarea[];
  
  constructor(private listaService: ListaService){}
  
  
  ngOnInit(){
    this.listaCompletada = this.listaService.listaCompletada;
  }
  
  addTask(newTask: Tarea) {
    this.listaService.agregarTarea(newTask);
    this.tarea = new Tarea();
    this.ngOnInit()
    console.log(this.listaCompletada);
    
  }

  cleanTaskComplete(){
    this.listaService.deleteAllTaskComplete();
  }
}
