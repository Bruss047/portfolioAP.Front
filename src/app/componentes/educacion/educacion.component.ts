import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { TokenService } from './../../services/token.service';
import { EducacionService } from './../../services/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: Educacion[] = [];

  constructor(private servEducacion: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEdu();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarEdu(): void {
    this.servEducacion.list().subscribe(data => {
      this.hideloader()
      this.edu = data


    })
  }

    hideloader() {
      document.getElementById('loadingEducacion').style.display = "none";
    }
    
  delete(id?: number) {
    if (id != undefined) {
      this.servEducacion.delete(id).subscribe(
        data => {
          this.cargarEdu();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }


}
