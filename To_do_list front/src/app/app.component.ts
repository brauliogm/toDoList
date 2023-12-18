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

  constructor(private listaService: ListaService){}

  ngInit(){
    
  }
  
  addTask(newTask: Tarea) {
    console.log(newTask);
    
    this.listaService.agregarTarea(newTask);
    this.tarea = new Tarea(),
    this.ngInit();
  }
}
