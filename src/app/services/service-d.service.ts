import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceDService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getServiceName() {
    console.log('This is ServiceD');
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
