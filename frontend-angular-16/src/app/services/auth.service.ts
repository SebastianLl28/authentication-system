import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {}

  public login(
    email: string,
    password: string
  ): Observable<{ message: string; token: string }> {
    return this._httpClient.post(`${this.baseUrl}/login`, {
      email,
      password,
    }) as Observable<{ message: string; token: string }>;
  }

  public verifyToken(token: string): Observable<{ message: string }> {
    return this._httpClient.post(`${this.baseUrl}/verifyToken`, {
      token,
    }) as Observable<{ message: string }>;
  }
}
