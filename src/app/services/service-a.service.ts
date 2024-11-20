import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceAService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getServiceName() {
    console.log('This is ServiceA');
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
