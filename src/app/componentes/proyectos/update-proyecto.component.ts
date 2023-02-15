import { Component, OnInit } from '@angular/core';
import { Proyecto } from './../../model/proyecto';
import { ProyectoService } from './../../services/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-proyecto',
  templateUrl: './update-proyecto.component.html',
  styleUrls: ['./update-proyecto.component.css']
})
export class UpdateProyectoComponent implements OnInit {

  proyec: Proyecto = null;

  constructor(private servProyecto: ProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servProyecto.detail(id).subscribe(
      data => {
        this.proyec = data;
      }, err => {

        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servProyecto.update(id, this.proyec).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto.");
        this.router.navigate(['']);
      }
    )
  }


}
