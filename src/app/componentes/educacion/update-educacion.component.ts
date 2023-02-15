import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from '../../model/educacion';
import { EducacionService } from './../../services/educacion.service';

@Component({
  selector: 'app-update-educacion',
  templateUrl: './update-educacion.component.html',
  styleUrls: ['./update-educacion.component.css']
})
export class UpdateEducacionComponent implements OnInit {

  educ: Educacion = null;

  constructor(private servEducacion: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servEducacion.detail(id).subscribe(
      data => {
        this.educ = data;
      }, err => {

        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servEducacion.update(id, this.educ).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar educación.");
        this.router.navigate(['']);
      }
    )
  }

}
