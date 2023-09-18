import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    }, 
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    }, 
    {
        id:uuid(), 
        brand: 'Jeep',
        model: 'Cherokee'
    }
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {

    const car = this.cars.find(car => car.id === id);
    
    if (!car) throw new NotFoundException(`Car with id ${id} not found`); // NestJS provides a NotFoundException class to handle 404 errors.
    
    return car
  }

  create( createCarDto: CreateCarDto) {
    const newCar = { 
      id: uuid(),
      ...createCarDto
    }

    this.cars.push(newCar);
    return newCar;
  }

  update( id: string, updateCarDto: UpdateCarDto ) {

    let carDb = this.findOneById(id);

    this.cars = this.cars.map( car => car.id === id ? { ...car, ...updateCarDto, id } : car );

    return updateCarDto
  }

  delete( id:string) {

    this.findOneById(id) 

    this.cars = this.cars.filter(car => car.id !== id); 
  }

}
