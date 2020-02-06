let title = null;
title = 'Hello there';

/**
 * Array Definition
 * @type {*[]}
 */
let books = [];
books.push('Harry Potter');
books.push('To Kill a mockingbird');

/**
 * Number definition
 * @type {number}
 */
let height = 120;


/**
 * Object definition
 * @type {{model: string, displacement: number, bhp: number, make: string}}
 */
let car_info = {
    make: 'Seat',
    model: 'Leon ST FR',
    displacement: 1.4,
    bhp: 150
};

let sams_car_info = {
    make: 'Seat',
    model: 'Ibiza',
    displacement: 1,
    bhp: 80
};

let car_group = [];
car_group.push(car_info);
car_group.push(sams_car_info);


/**
 * Boolean
 */
let coffee_is_great = true;


/**
 * Changing title in vanilla js
 */
// let html_title = document.getElementById('title');
// html_title.innerHTML = title;

/**
 * Change element every 3.5 seconds
 */
// setInterval(() => {
//     document.getElementById('title').innerHTML = books[Math.floor(Math.random() * books.length)];
// }, 3500);


/*
Opening div on click
 */

let anchor = document.getElementsByClassName('expand');

Array.from(anchor).forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target.dataset.target;

        let well = document.getElementById(target);

        if( well.style.display === 'none' ){
            well.style.display = 'block';
        } else {
            well.style.display = 'none';
        }

    });
});




