'use strict';

// Create a function to count vowel letters in the string

let str = 'I am a servant of the Secret Fire, wielder of the flame of Anor. You cannot pass. The dark fire will not avail you, flame of Udun. Go back to the Shadow! You cannot pass.';

// Solution 01

const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
}

function vowelsCounter(str) {
    str = str.trim().toLowerCase().split(' ').join('');
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] in vowels) {
            counter++
        }
    }
    return counter;
}

console.log(vowelsCounter(str));

// Solution 02

const vowelsV2 = ['a', 'e', 'i', 'o', 'u',];

function vowelsCounterV2(str) {
    str = str.trim().toLowerCase().split(' ').join('');
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsV2.indexOf(str[i]) !== -1) {
            counter++
        }
    }
    return counter;
}

console.log(vowelsCounterV2(str));