import { Component, OnInit } from '@angular/core';
import { CarResponseDTO } from './car-response-dto';
import { CarsListService } from './cars-list.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  public cars: CarResponseDTO[] = [];

  constructor(private carListService: CarsListService) {

  }

  ngOnInit(): void {
    this.getCarsList();
    console.log(this.cars)
  }

  public getCarsList(): void {
    this.carListService.getCarsList().subscribe((response: any) => {
      console.log(response);
      this.cars = response;
    })
  }


}
