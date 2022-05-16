import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {
  private api="http://localhost:8080/qrCode"
  constructor(private httpClient:HttpClient) {
    
   }
   
}
