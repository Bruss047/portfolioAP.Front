import { Component, OnInit } from '@angular/core';
import { Skill } from './../../model/skill';
import { SkillService } from './../../services/skill.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(private servSkill: SkillService, private activatedRouter: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servSkill.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar el skill.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servSkill.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el skill.");
        this.router.navigate(['']);
      }
    )
  }

}
