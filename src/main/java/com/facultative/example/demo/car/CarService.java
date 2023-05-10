package com.facultative.example.demo.car;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
class CarService {

    private final CarRepository repository;

    public List<CarResponseDTO> getAllCars() {
        return repository.findAll().stream()
                .map(Car::toDto)
                .toList();
    }

    public CarResponseDTO createCar(CarRequestDTO dto) {
        var car = new Car(dto.brand(), dto.model(), dto.productionYear());
        var savedCar = repository.saveAndFlush(car);
        return savedCar.toDto();
    }

}
