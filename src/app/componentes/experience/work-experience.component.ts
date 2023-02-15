import { Component, OnInit } from '@angular/core';
import { ExpService } from '../../services/exp.service';
import { Experiencia } from '../../model/experiencia';
import { TokenService } from '../../services/token.service';
import { PersonaService } from './../../services/persona.service';
import { Persona } from './../../model/persona.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})

export class WorkExperienceComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", 0, "", "");
  exp: Experiencia[] = [];

  constructor(private servExperiencia: ExpService, private tokenService: TokenService, private datos: PersonaService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExp();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.datos.getPersona().subscribe(data => {
      this.hideloaderPers();
      this.persona = data
    })


  }

  cargarExp(): void {
    this.servExperiencia.list().subscribe(data => {
      this.hideloaderExp()
      this.exp = data

    })
  }

  hideloaderPers() {
    document.getElementById('loadingAbout').style.display = "none";
  }

  hideloaderExp() {
    document.getElementById('loadingExp').style.display = "none";
  }

  delete(id?: number) {
    if (id != undefined) {
      this.servExperiencia.delete(id).subscribe(
        data => {
          this.cargarExp();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}

