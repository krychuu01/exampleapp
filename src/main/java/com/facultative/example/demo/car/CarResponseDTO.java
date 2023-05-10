package com.facultative.example.demo.car;

import lombok.Builder;

public record CarResponseDTO(Long carId, String brand, String model, String productionYear) {

    @Builder public CarResponseDTO {}
}
