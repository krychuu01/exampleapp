package com.facultative.example.demo.car;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "cars")
public class Car extends BasicEntity {

    private String brand;
    private String model;
    private String productionYear;

    public Car(String brand, String model, String productionYear) {
        this.brand = brand;
        this.model = model;
        this.productionYear = productionYear;
    }

    public CarResponseDTO toDto() {
        return CarResponseDTO.builder()
                .carId(this.id)
                .brand(this.brand)
                .model(this.model)
                .productionYear(this.productionYear)
                .build();
    }
}
