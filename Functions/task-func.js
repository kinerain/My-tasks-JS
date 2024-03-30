// function sayHi(name) {
//     const greeting = 'Привет, ' + name + '!';
//     console.log(greeting);
// }

import { ageMin } from "./data";

// sayHi('Кирилл');


function checkAge(age) {

    if (age>ageMin) {
        console.log('you are welcome');
        console.log(age)
    } 
     else{
        console.log('you are not allowed');
        console.log(age)
    }
}

checkAge();
