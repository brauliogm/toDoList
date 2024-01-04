import { Component } from '@angular/core';
import { Tarea } from '../tarea';
import { ListaService } from '../lista.service';
import { TareaCompletada } from '../tareaCompletada';

@Component({
  selector: 'app-tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.css']
})
export class TasksDoneComponent {

  listaComplete: TareaCompletada[];

  constructor(private listaService: ListaService){}

  ngOnInit(){
    this.obtenerListaTareasCompletadas()
  }

  private obtenerListaTareasCompletadas(){
    this.listaService.obtenerListaTareasCompletadas().subscribe(
      (datos => {
        this.listaComplete = datos;
      })
    )
  }

  deleteTask(numTarea: number){
    this.listaService.eliminarTareaCompletada(numTarea).subscribe(
      datos => {
        console.log(datos);
        this.obtenerListaTareasCompletadas();
      },
      error => {
        console.log('Error al eliminar tarea:', error);
      }
    )
  }

  taskIncomplete(task: TareaCompletada, i: number){
    
  }
}
