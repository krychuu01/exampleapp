package com.facultative.example.demo.car;

import org.springframework.data.jpa.repository.JpaRepository;

interface CarRepository extends JpaRepository<Car, Long> {

}
