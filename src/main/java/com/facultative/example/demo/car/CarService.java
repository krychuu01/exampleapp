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
        if(dto.brand() == null || dto.brand().isEmpty()) {
            throw new EmptyFieldException("Brand name can't be empty.");
        }
        if (dto.model() == null || dto.model().isEmpty()) {
            throw new EmptyFieldException("Model name can't be empty.");
        }
        if (dto.productionYear() == null) {
            throw new EmptyFieldException("Production year can't be empty.");
        }
        var car = new Car(dto.brand(), dto.model(), dto.productionYear());
        var savedCar = repository.saveAndFlush(car);
        return savedCar.toDto();
    }

}
