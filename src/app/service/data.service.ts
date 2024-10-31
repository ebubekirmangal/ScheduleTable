import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private apiUrl = 'http://localhost:3000'; // JSON Server URL

  // constructor(private http: HttpClient) { }

  // // Veri çekme örneği
  // getData(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/programs`); // "posts" db.json dosyasındaki endpoint adı
  // }

  // // Veri gönderme örneği
  // sendData(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/programs`, data);
  // }
}
