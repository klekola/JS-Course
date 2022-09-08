'use strict';

/** Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 *
 * BMI = mass / height^2 = mass / (height * height).
 *
 * (mass in kg and height in meter).
 *
 * 1. Store Mark's and John's mass and height in variables
 * 2. Calculate both their BMIs
 * 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
 * 4. Print a string to the console containing the variable from step 3.(Something like "Is Mark's BMI higher than John's? true").*/

let MarksMass = 105;
let MarksHeight = 194;

let JohnsMass = 115;
let JohnsHeight = 180;

function calculateBMI (mass, height) {
    return (mass / (height ^ 2));
}

let MarksBMI = calculateBMI(MarksMass, MarksHeight);
let JohnsBMI = calculateBMI(JohnsMass, JohnsHeight);

let isMarksBMIHigher = MarksBMI > JohnsBMI;

console.log(`Is Mark's BMI higher than John's? ${isMarksBMIHigher}`);