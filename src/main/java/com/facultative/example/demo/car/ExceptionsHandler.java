package com.facultative.example.demo.car;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
class ExceptionsHandler {

    @ExceptionHandler(value = EmptyFieldException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    public String emptyFieldException(EmptyFieldException exception) {
        return exception.getMessage();
    }
}
