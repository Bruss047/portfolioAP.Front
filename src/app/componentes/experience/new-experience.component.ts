import { Component, OnInit } from '@angular/core';
import { ExpService } from '../../services/exp.service';
import { Router } from '@angular/router';
import { Experiencia } from '../../model/experiencia';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewEperienceComponent implements OnInit {

  nombreExp: string = '';
  puesto: string = '';
  descExp: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';

  constructor(private servExperiencia: ExpService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExp, this.puesto, this.descExp, this.fechaInicio, this.fechaFin);
    this.servExperiencia.save(expe).subscribe(
      data => {
        console.log(data)
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        console.log(expe)
        console.log(err)
        alert("No se puede cargar la experiencia.");
        this.router.navigate(['']);
      }
    )
  }
}
