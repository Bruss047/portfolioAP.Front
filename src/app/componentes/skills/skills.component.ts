import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona.model';
import { PersonaService } from '../../services/persona.service';
import { Skill } from './../../model/skill';
import { SkillService } from './../../services/skill.service';
import { TokenService } from './../../services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class AboutSkillsComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", 0, "", "");
  skill: Skill[] = [];

  constructor(private datos: PersonaService, private tokenService: TokenService, private sk: SkillService) { }
  isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarSkills();

    this.datos.getPersona().subscribe(data => {
      this.persona = data

    })



  }

  cargarSkills(): void {
    this.sk.list().subscribe(data => {
      this.hideloader();
      this.skill = data

    })
  }
  hideloader() {
    document.getElementById('loadingSkill').style.display = "none";
  }
  delete(id?: number) {
    if (id != undefined) {
      this.sk.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }

}
