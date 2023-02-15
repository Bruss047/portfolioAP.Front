import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from './../../model/persona.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", 0, "", "");
  

  constructor(private datos: PersonaService) { }

  ngOnInit(): void {
    this.datos.getPersona().subscribe(data => {
      console.log(data)
        hideloader();
        this.persona = data
      
      
    })

    function hideloader() {
      document.getElementById('loading').style.display = "none"; 
    }
  }


}
