import { Component } from '@angular/core';
import { Tarea } from './tarea';
import { ListaService } from './lista.service';
import { TareaCompletada } from './tareaCompletada';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listaCompletada: TareaCompletada[];
  
  constructor(private listaService: ListaService){}
  
  
  ngOnInit(){
    this.obtenerListaTareasCompletadas();
    this.listaService.updateList$.subscribe(() => {
      // Refresh the list or perform any necessary action
      this.refreshList();
    });
  }
  
  refreshList() {
    // Implement logic to refresh the list from the database
    this.obtenerListaTareasCompletadas();
  }

  obtenerListaTareasCompletadas(){
    this.listaService.obtenerListaTareasCompletadas().subscribe(
      (datos => {
        this.listaCompletada = datos;
      })
    )
  }
  
  cleanTaskComplete(){
    this.listaService.deleteAllTaskComplete().subscribe(
      {
        next: (datos) => {this.ngOnInit();
        //console.log(datos);
        }
        ,
        error: (error) => {
          console.log(error)
        }
        
      }
    )
  }
}
