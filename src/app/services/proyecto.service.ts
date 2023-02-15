import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  prURL = "https://backendportfolio-uxur.onrender.com/proyecto"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.prURL + '/get_proyectos');
  }

  public detail(id: number): Observable<Proyecto> {

    return this.httpClient.get<Proyecto>(this.prURL + `/get_detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.prURL + '/create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.prURL + `/update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.prURL + `/delete/${id}`);
  }
}
