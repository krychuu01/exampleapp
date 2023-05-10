import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { CarResponseDTO } from './car-response-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsListService {

  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getCarsList(): Observable<CarResponseDTO[]> {
      return this.http.get<CarResponseDTO[]>(`${this.apiServerUrl}/api/cars`)
  }
  
}
