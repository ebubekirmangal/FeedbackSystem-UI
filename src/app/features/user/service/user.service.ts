import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../models/registerUserRequest';
import { LoginRequest } from '../models/loginUserRequest';
import { RegisterResponse } from '../models/registerUserResponse';
import { LoginResponse } from '../models/loginUserResponse';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(private http:HttpClient) { }

  register(user:RegisterRequest):Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`,user);
  }

  login(user:LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`,user);
  }
  logout():void{
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('role');

  }
  saveUserId(userId: number): void {
    localStorage.setItem('userId', userId.toString());
  }

  getUserId(): number | null {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const userId = localStorage.getItem('userId');
      return parseInt(userId, 10);
    } else {
      return null;
    }
  }
  saveEmail(email: string): void {
    localStorage.setItem('email', email);
  }

  getEmail(): string | null {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      return localStorage.getItem('email');
    } else {
      return null;
    }
  }

  saveRole(role: string): void {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      return localStorage.getItem('role');
    } else {
      return null;
    }
  }
}
