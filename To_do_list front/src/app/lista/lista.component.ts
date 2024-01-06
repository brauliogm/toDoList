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

  constructor(private listaService: ListaService){
    this.lista = [];
  }

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
        this.obtenerTareas();
      },
      error => {
        console.log('Error al eliminar tarea:', error);
      }
    )
  }

  taskComplete(descripcion: string, i: number){
    this.deleteTask(i);
    
    const tareaCompletada = new TareaCompletada(descripcion);
    
    this.listaService.agregarTareaCompletada(tareaCompletada).subscribe(
      {
        next: (datos) => {
          this.obtenerTareas();
          this.listaService.updateList();
        }
        ,
        error: (error) => console.log(error)        
      }
    )
  }


  obtenerTareaPorId(id: number){
    
  }

  editTask(task: Tarea){
    const tareaEstaEnLista:boolean = this.lista.some(tarea => tarea.idTarea === task.idTarea);

    this.listaService.mandarTareaAForm(task, tareaEstaEnLista);
    this.listaService.updateList();
  }
  

}
