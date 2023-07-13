'use strict';

// -------------Low---------

// 1.  Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//     2.  Метод, який виводить на екран інформацію про автомобіль.
//     3.  Додавання ім’я водія у список
//     4.  Перевірка водія на наявність його ім’я у списку
//     5.  Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

let carInfo = {
    manufacturer: 'Nissan Motor',
    model: 'Infiniti QX50',
    year: 2023,
    averageSpeed: 100,
    volumeTank: 60,
    consumption: 10,

}
function info() {
    alert(` виробник ${carInfo.manufacturer} \n модель ${carInfo.model}\n рік випуску ${carInfo.year}\n середня швидкість ${carInfo.averageSpeed}\n обсяг паливного баку ${carInfo.volumeTank} \n середня витрата палива на 100 км ${carInfo.consumption}`)
}

let btnCarInfo = document.querySelector('#btn__carInfo');
btnCarInfo.addEventListener('click', info);
console.log(carInfo);

function addCarDriver() {

    let UserChengeDriverName = prompt('ім’я');
    carInfo.carDriverName = UserChengeDriverName;
}

let btnAdd = document.querySelector('#btn__addCarDriver');
btnAdd.addEventListener('click', addCarDriver);

function checkCarDriver() {
    let UserCheckCarDriver = 0;
    if ('carDriverName' in carInfo) {
        UserCheckCarDriver = prompt('Перевір ім’я');
        carInfo.carDriverName === UserCheckCarDriver  ?  alert(`Є таке ім’я`) : alert(`Такого ім’я немає в списку`);
    } else {
        alert(`Такого ім’я не існує в списку!`);
    }
}

let btnCheck = document.querySelector('#btn__checkCarDriver');
btnCheck.addEventListener('click', checkCarDriver);

function cunt() {
let distance = +prompt('Вкажи відстань');

let time = distance / carInfo.averageSpeed + ((distance / carInfo.averageSpeed) / 4) ;
let fuelQuantity = (distance / carInfo.averageSpeed) * carInfo.consumption;

alert(` Потрібна кількість палива ${fuelQuantity}\n Кількість часу з відпочинком ${Math.trunc(time)}`)
}
let btnCount = document.querySelector('#btn__checkTime');
btnCount.addEventListener('click', cunt);


// -------------Med---------
// 1.  Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
//     1.  Для виведення часу на екран.
//     2.  Зміни часу на передану кількість секунд.
//     3.  Зміни часу на передану кількість хвилин.
//     4.  Зміни часу на передану кількість годин.
//     5.  Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

let fullDate = new Date();
let body = 0;
function dateReal() {

    body = dateResult.innerHTML = `${new Date()}`;
}

let btnDate = document.querySelector('#btn__dateReal');
let dateResult = document.querySelector('.header__title');
btnDate.addEventListener('click', dateReal);

function chengeSec() {

    let UserChengeSec = +prompt('Скільки додати/відняти секунд ?')
    fullDate.setSeconds(fullDate.getSeconds() + UserChengeSec);
    dateResult.innerHTML = `${fullDate}`;
}

let btnChengeSec = document.querySelector('#btn__chengeSec');
let ChengeSecSumResult = document.querySelector('.header__title');
btnChengeSec.addEventListener('click', chengeSec);

function chengeMin() {

    let UserChengeMin = +prompt('Скільки додати/відняти хвилин?')
    fullDate.setMinutes(fullDate.getMinutes() + UserChengeMin);
    body = dateResult.innerHTML = `${fullDate}`;
}

let btnChengeMin = document.querySelector('#btn__chengeMin');
let ChengeMinSumResult = document.querySelector('.header__title');
btnChengeMin.addEventListener('click', chengeMin);

function chengeHours() {

    let UserChengeHours = +prompt('Скільки додати/відняти годин?')
    fullDate.setHours(fullDate.getHours() + UserChengeHours);
    body = dateResult.innerHTML = `${fullDate}`;
}

let btnChengeHours = document.querySelector('#btn__chengeHours');
let ChengeHoursSumResult = document.querySelector('.header__title');
btnChengeHours.addEventListener('click', chengeHours);