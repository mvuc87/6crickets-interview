import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeLeft } from '../models/time-left.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}
  
  getTimeLeft(): Observable<TimeLeft> {
    return this.http.get<TimeLeft>(`${environment.apiUrl}/api/deadline`);
  }
}
