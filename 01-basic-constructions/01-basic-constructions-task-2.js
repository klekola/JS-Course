'use strict';

// Ask user for his ID, control wrong data, alert all data once

let userName,
    userSurname,
    userSecondName,
    userAge,
    userAgeInFiveYears,
    userAgeInDays,
    isUserSexMale,
    userSex,
    isPension;

do {
    userSurname = prompt('Please, enter your surname', '');
    console.log(userSurname);
} while (isFinite(userSurname)) {
    alert('Enter right surname');
}

do {
    userName = prompt('Please, enter your name', '');
    console.log(userName);
} while (isFinite(userName));

do {
    userSecondName = prompt('Please, enter your second name', '');
    console.log(userSecondName);
} while (isFinite(userSecondName));

do {
    userAge = +prompt('Please, enter your age', '');
    console.log(userAge);
} while (isNaN(userAge) || userAge === 0);

isUserSexMale = confirm('Is your sex - male?');

userAgeInFiveYears = +userAge + 5;
userAgeInDays = userAge * 365;

if (isUserSexMale) {
    userSex = 'Male';
} else {
    userSex = 'Female';
}

if (userAge > 65 && isUserSexMale) {
    isPension = 'Yes';
} else if (userAge < 65 && isUserSexMale) {
    isPension = 'No';
} else if (userAge > 55 && isUserSexMale === false) {
    isPension = 'Yes';
} else if (userAge < 55 && !isUserSexMale === false) {
    isPension = 'No';
}

alert(`
Your ID is: ${userSurname} ${userName} ${userSecondName}
Your age is: ${userAge}
Your age in days is: ${userAgeInDays}
Your age in 5 years will be: ${userAgeInFiveYears}
Your sex is: ${userSex}
Are you pensioner: ${isPension}
`);