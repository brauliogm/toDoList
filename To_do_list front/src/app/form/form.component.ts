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
    
  }

  addTask() {
    this.listaService.agregarTarea(this.tarea).subscribe(
      {
        next: (datos) => {
          //console.log(datos)
          this.tarea = new Tarea();
          this.listaService.updateList();
        }
        ,
        error: (error) => console.log(error)        
      }
    )
  }
}
