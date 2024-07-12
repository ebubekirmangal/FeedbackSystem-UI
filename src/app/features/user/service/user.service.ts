import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../models/registerUserRequest';
import { LoginRequest } from '../models/loginUserRequest';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(private http:HttpClient) { }

  register(user:RegisterRequest):Observable<RegisterRequest>{
    return this.http.post<RegisterRequest>(`${this.apiUrl}/register`,user);
  }

  login(user:LoginRequest):Observable<LoginRequest>{
    return this.http.post<LoginRequest>(`${this.apiUrl}/login`,user);
  }
}
