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
    this.listaService.obtenerListaTareasCompletadas().subscribe(
      (datos => {
        this.listaCompletada = datos;
        console.log(datos);
        
      })
    )
  }
  
  cleanTaskComplete(){
    this.listaService.deleteAllTaskComplete().subscribe(
      {
        next: (datos) => this.ngOnInit(),
        error: (error) => console.log(error)
        
      }
    )
  }
}
