package com.facultative.example.demo.car;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cars")
class CarController {

    private final CarService carService;

    @GetMapping("")
    private ResponseEntity<List<CarResponseDTO>> getCars() {
        var cars = carService.getAllCars();
        return cars.size() > 0 ? ResponseEntity.ok(cars) : ResponseEntity.noContent().build();
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.OK)
    private CarResponseDTO createCar(@RequestBody CarRequestDTO car) {
        return carService.createCar(car);
    }

}
