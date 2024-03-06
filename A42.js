"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified
function show_magicians(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i] + ' The Great';
    }
}
const magicianNames = ["David", "Pen", "Harry", "Potter", "Teller"];
make_great(magicianNames);
show_magicians(magicianNames);
