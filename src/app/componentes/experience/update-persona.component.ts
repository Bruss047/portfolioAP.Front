import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { Persona } from './../../model/persona.model';
import { PersonaService } from './../../services/persona.service';

@Component({
  selector: 'app-update-persona',
  templateUrl: './update-persona.component.html',
  styleUrls: ['./update-persona.component.css']
})
export class UpdatePersonaComponent implements OnInit {

  pers: Persona = null;

  constructor(private servPersona: PersonaService, private activatedRouter: ActivatedRoute, private tokenService: TokenService,
    private router: Router) { }
  isLogged = false;

  ngOnInit(): void {
    //const id = this.activatedRouter.snapshot.params['id'];

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.servPersona.getPersona().subscribe(
      data => {
        this.pers = data;
      }, err => {
        console.log(err)
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    //const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.pers)
    this.servPersona.update(1, this.pers).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        console.log(err)
        alert("Error al modificar usuario");
        this.router.navigate(['']);
      }
    )
  }
}
