import { Component } from '@angular/core';
import { Tarea } from '../tarea';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  tarea: Tarea = new Tarea();

  constructor(private listaService: ListaService){}

  ngOnInit(){
    if (this.tarea.descripcion == "") {
      this.tarea.descripcion = this.listaService.task.descripcion;
    }
    console.log('ola');
    console.log(this.tarea.descripcion);

  }

  addTask(newTask: Tarea) {
    this.listaService.agregarTarea(newTask);
    this.tarea = new Tarea();
  }
  
}
