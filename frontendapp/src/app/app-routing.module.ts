import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import {CarsAddingComponent} from "./cars-adding/cars-adding.component";

const routes: Routes = [
  { path: '', redirectTo: "/", pathMatch: 'full'},
  { path: 'cars-list', component: CarsListComponent},
  { path: 'cars-adding', component: CarsAddingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
