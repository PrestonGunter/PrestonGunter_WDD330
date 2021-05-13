export class Car {
    constructor(make, model, year, color, mileage=100000){
        this.CarId = Date.now(),
        this.Make = make,
        this.Model = model,
        this.Year = year,
        this.Color = color,
        this.Available = true
    }
}