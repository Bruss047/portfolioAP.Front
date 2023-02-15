import { Component, OnInit } from '@angular/core';
import { Proyecto } from './../../model/proyecto';
import { ProyectoService } from './../../services/proyecto.service';
import { TokenService } from './../../services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  pr: Proyecto[] = [];

  constructor(private servProyec: ProyectoService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPro();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarPro(): void {
    this.servProyec.list().subscribe(data => {
      this.hideloader(); 
      this.pr = data


    })
  }

  hideloader() {
    document.getElementById('loadingProj').style.display = "none";
  }

  delete(id?: number) {
    if (id != undefined) {
      this.servProyec.delete(id).subscribe(
        data => {
          this.cargarPro();
        }, err => {
          alert("No se pudo borrar el proyecto.");
        }
      )
    }
  }

}
