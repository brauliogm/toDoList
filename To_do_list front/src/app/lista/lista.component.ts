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
  index: number;

  constructor(private listaService: ListaService){}

  ngOnInit(){
    this.lista = this.listaService.lista;
  }

  deleteTask(numTarea: number){
    console.log(numTarea);
    this.listaService.eliminarTarea(numTarea);
  }

  

}
