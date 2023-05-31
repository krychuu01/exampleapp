import { Component } from '@angular/core';
import {CarCreateDto} from "./car-create-dto";
import {CarsAddingService} from "./cars-adding.service";
import {CarResponseDTO} from "../cars-list/car-response-dto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cars-adding',
  templateUrl: './cars-adding.component.html',
  styleUrls: ['./cars-adding.component.css']
})
export class CarsAddingComponent {

  public carCreateDTO: CarCreateDto = new CarCreateDto();

  constructor(private carAddingService: CarsAddingService,
              private snackBar: MatSnackBar) {
  }

  createCar(carCreateDTO: CarCreateDto): void {
    this.carAddingService.createCar(carCreateDTO)
        .subscribe(
            (response: CarResponseDTO) => {
              console.log(response);
              this.snackBar.open(
                  "Successfully added " + response.brand +
                  ' ' + response.model + " to cars list."
              );
            },
            (error: any) => {
              console.error("Error occurred while creating car:", error);
              const errorMessage = error.message || "An error occurred while adding the car. Please try again.";
              this.snackBar.open(errorMessage);
            }
        );
  }

}
