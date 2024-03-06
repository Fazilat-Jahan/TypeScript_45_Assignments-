"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
function show_magicians(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
function make_great2(names) {
    const Magicians = [];
    for (let i = 0; i < names.length; i++) {
        Magicians.push(names[i] + ` The Great `);
    }
    return Magicians;
}
const Magicians1 = ["David", "Pen", "Harry", "Potter", "Teller"];
const Magicians2 = make_great2(Magicians1);
show_magicians(Magicians1);
show_magicians(Magicians2);
