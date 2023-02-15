import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = "https://backendportfolio-uxur.onrender.com/persona";

  

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona> {
    console.log(URL + "dqdqd");
    return this.http.get<Persona>(this.URL + '/traer/perfil');
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.URL + `/update/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `/delete/${id}`);
  }

}
