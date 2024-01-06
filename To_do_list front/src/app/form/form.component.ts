import { ChangeDetectorRef, Component } from '@angular/core';
import { Tarea } from '../tarea';
import { ListaService } from '../lista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  tarea: Tarea = new Tarea();

  constructor(private listaService: ListaService){}

  ngOnInit(){
    this.listaService.updateList$.subscribe(() => {
      // Refresh the list or perform any necessary action
      this.refreshList();
    });
  }

  refreshList() {
    // Implement logic to refresh the list from the database
    this.tarea = this.listaService.tarea;
  }

  addTask() {
    const tareaExiste = this.listaService.tareaExiste;

    if(!tareaExiste){
      this.listaService.agregarTarea(this.tarea).subscribe(
        {
          next: (datos) => {
            this.tarea = new Tarea();
            this.listaService.tarea = new Tarea();
            this.listaService.updateList();
          }
          ,
          error: (error) => console.log(error)        
        }
      )
    } else {
      this.listaService.editTask(this.tarea.idTarea, this.tarea).subscribe(
        {
          next: (datos) => {
            this.listaService.tareaExiste = false;
            this.tarea = new Tarea();
            this.listaService.tarea = new Tarea();
            this.listaService.updateList();
          }
          ,
          error: (error) => console.log(error)        
        }
      )
    }
    
  }
}
