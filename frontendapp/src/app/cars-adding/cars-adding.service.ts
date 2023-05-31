import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CarCreateDto} from "./car-create-dto";
import {Observable} from "rxjs";
import {CarResponseDTO} from "../cars-list/car-response-dto";

@Injectable({
  providedIn: 'root'
})
export class CarsAddingService {

  private apiServerUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public createCar(carCreateDTO: CarCreateDto): Observable<CarResponseDTO> {
    return this.http.post<CarResponseDTO>(`${this.apiServerUrl}/api/cars`, carCreateDTO);
  }

}
