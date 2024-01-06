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

  constructor(private listaService: ListaService){
    this.listaComplete = [];
  }

  ngOnInit(){
    this.obtenerListaTareasCompletadas()
    this.listaService.updateList$.subscribe(() => {
      // Refresh the list or perform any necessary action
      this.refreshList();
    });
  }

  refreshList() {
    // Implement logic to refresh the list from the database
    this.obtenerListaTareasCompletadas();
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
        this.obtenerListaTareasCompletadas();
        this.listaService.updateList();
      },
      error => {
        console.log('Error al eliminar tarea:', error);
      }
    )
  }

  taskIncomplete(descripcion: string, i: number){
    this.deleteTask(i);
    
    const tareaCompletada = new Tarea(descripcion);
    
    this.listaService.agregarTarea(tareaCompletada).subscribe(
      {
        next: (datos) => {
          this.obtenerListaTareasCompletadas();
          this.listaService.updateList();
        }
        ,
        error: (error) => console.log(error)        
      }
    )
  }
}
