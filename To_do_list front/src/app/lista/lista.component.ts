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
    this.obtenerTareas()
  }

  private obtenerTareas(){
    this.listaService.obtenerListaTarea().subscribe(
      (datos => {
        this.lista = datos;
      })
    )
  }

  deleteTask(numTarea: number){
    this.listaService.eliminarTarea(numTarea).subscribe(
      (datos => {
        console.log(datos);
        
      })
    )
  }

  taskComplete(task: Tarea, i: number){
    this.listaService.agregarTareaCompletada(task)
    this.deleteTask(i);
  }

  editTask(task: Tarea){
    console.log(task);
    
  }
  

}
