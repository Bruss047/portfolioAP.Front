import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from './../model/experiencia';

@Injectable({
    providedIn: 'root'
})

export class ExpService {

    expURL = "https://backendportfolio-uxur.onrender.com/exp"

    constructor(private httpClient: HttpClient) { }

    public list(): Observable<Experiencia[]> {
        return this.httpClient.get<Experiencia[]>(this.expURL + '/get_list');
    }

    public detail(id: number): Observable<Experiencia> {

        return this.httpClient.get<Experiencia>(this.expURL + `/get_list/${id}`);
    }

    public save(experiencia: Experiencia): Observable<any> {
        return this.httpClient.post<any>(this.expURL + '/create', experiencia);
    }

    public update(id: number, experiencia: Experiencia): Observable<any> {
        return this.httpClient.put<any>(this.expURL + `/update/${id}`, experiencia);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.expURL + `/delete/${id}`);
    }
}