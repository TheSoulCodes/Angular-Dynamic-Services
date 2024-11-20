import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceBService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getServiceName() {
    console.log('This is ServiceB');
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
