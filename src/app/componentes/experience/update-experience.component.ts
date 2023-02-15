import { Component, OnInit } from '@angular/core';
import { ExpService } from '../../services/exp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../../model/experiencia';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateEperienceComponent implements OnInit {

  expLab: Experiencia = null;

  constructor(private servExperiencia: ExpService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {

        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
