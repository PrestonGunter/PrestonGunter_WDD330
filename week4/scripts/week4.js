import { Car } from './car.js';

let cars = [];

if(localStorage.getItem('cars')){
    cars = JSON.parse(localStorage.getItem('cars'));
}

document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault();
    let newCar = new Car(
        document.querySelector('#Make').value,
        document.querySelector('#Model').value,
        document.querySelector('#Year').value,
        document.querySelector('#Color').value,
        document.querySelector('#Miliage').value
    );
    cars.push(newCar);
    localStorage.setItem('cars', JSON.stringify(cars));
    print();

    document.forms[0].reset();
});
// let car1 = new Car('Honda', 'Civic', '2006', 'Silver');
// let car2 = new Car('Ford', 'Focus', '2006', 'Silver');

// cars.push(car1);
// cars.push(car2);


//add to local storage
// localStorage.setItem('cars', JSON.stringify(cars));

let ul = document.querySelector('.cars');
cars.forEach(
    car => {
        ul.innerHTML +=
            `<li>  ${car.Make} ${car.Model} ${car.Year} </li>`;
    }
);

console.log(cars);



