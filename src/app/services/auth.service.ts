import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';

import { NuevoUsuario } from './../model/nuevousuario';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from './../model/jwt-dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  authURL = "https://backendportfolio-uxur.onrender.com/auth"
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUsuario)
  }

}