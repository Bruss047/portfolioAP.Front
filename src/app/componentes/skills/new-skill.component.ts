import { Component, OnInit } from '@angular/core';
import { Skill } from './../../model/skill';
import { SkillService } from './../../services/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {


  nombre: string = '';
  porcentaje: number;


  constructor(private servSkill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const sk = new Skill(this.nombre, this.porcentaje);
    this.servSkill.save(sk).subscribe(
      data => {
        alert("Skill añadido");
        this.router.navigate(['']);
      }, err => {
        console.log(err)
        alert("No se agregar el skill.");
        this.router.navigate(['']);
      }
    )
  }

}
