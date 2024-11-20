import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceCService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getServiceName() {
    console.log('This is ServiceC');
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
