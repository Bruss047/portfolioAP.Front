import { Component, OnInit } from '@angular/core';
import { EducacionService } from './../../services/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEd: string = '';
  tituloEd: string = '';
  descEd: string = '';
  imgEdu: string = '';
  inicio: string = '';
  fin: string = '';

  constructor(private servEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educ = new Educacion(this.nombreEd, this.tituloEd, this.descEd, this.imgEdu, this.inicio, this.fin);
    this.servEducacion.save(educ).subscribe(
      data => {
        console.log(data)
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        console.log(educ)
        console.log(err)
        alert("No se puede cargar la carrera/ curso.");
        this.router.navigate(['']);
      }
    )
  }

}
