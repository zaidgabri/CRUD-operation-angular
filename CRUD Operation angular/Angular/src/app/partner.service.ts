import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partner } from './partner';
@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  createPartner(partner: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, partner);
  }

  getPartnerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'partner-list');
  }

  deletePartner(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/partner-delete/${id}`, { responseType: 'text' });
  }
}
