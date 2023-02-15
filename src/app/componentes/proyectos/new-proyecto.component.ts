import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from './../../services/proyecto.service';
import { Proyecto } from './../../model/proyecto';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';
  img: string = '';
  urlP: string = '';


  constructor(private servProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.img, this.urlP);
    this.servProyecto.save(proyecto).subscribe(
      data => {
        console.log(proyecto)
        alert("Proyecto añadido.");
        this.router.navigate(['']);
      }, err => {
        console.log(proyecto)
    
        alert("No se puede cargar el Proyecto.");
        this.router.navigate(['']);
      }
    )
  }

}
