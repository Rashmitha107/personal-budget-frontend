import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://18.226.222.124:3000';

  constructor(private http: HttpClient) {}
  getUsername(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-username`);
  }
}
