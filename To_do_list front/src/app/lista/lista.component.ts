import { ChangeDetectorRef, Component } from '@angular/core';
import { Tarea } from '../tarea';
import { ListaService } from '../lista.service';
import { TareaCompletada } from '../tareaCompletada';

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
    this.listaService.updateList$.subscribe(() => {
      // Refresh the list or perform any necessary action
      this.refreshList();
    });
  }

  refreshList() {
    // Implement logic to refresh the list from the database
    this.obtenerTareas();
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
      datos => {
        console.log(datos);
        this.obtenerTareas();
      },
      error => {
        console.log('Error al eliminar tarea:', error);
      }
    )
  }

  taskComplete(task: Tarea, i: number){
    const idDeleteTask = i;
    console.log(task);
    this.deleteTask(idDeleteTask);
    
    const tareaCompletada = new TareaCompletada(task);

    console.log(tareaCompletada);
    
    this.listaService.agregarTareaCompletada(tareaCompletada).subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.obtenerTareas();
        }
        ,
        error: (error) => console.log(error)        
      }
    )
  }

  editTask(task: Tarea){
    console.log(task);
    
  }
  

}
