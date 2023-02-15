import { Injectable } from '@angular/core';
import { Educacion } from './../model/educacion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  edURL = "https://backendportfolio-uxur.onrender.com/educacion";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.edURL + '/get_list');
  }

  public detail(id: number): Observable<Educacion> {

    return this.httpClient.get<Educacion>(this.edURL + `/get_list/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.edURL + '/create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.edURL + `/update/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.edURL + `/delete/${id}`);
  }
}
