import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './../model/skill';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skURL = "https://backendportfolio-uxur.onrender.com/skill"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skURL + '/get_skills');
  }

  public detail(id: number): Observable<Skill> {

    return this.httpClient.get<Skill>(this.skURL + `/get_detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.skURL + '/create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.skURL + `/update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skURL + `/delete/${id}`);
  }
}
