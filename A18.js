"use strict";
/* Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
Object.defineProperty(exports, "__esModule", { value: true });
let places = ["Swat", "Kagan", "Naran", "Kashmir", "Skardu"];
//printing array in it's original order.
console.log("Original Order", places);
//print array in alphabetical order
console.log("Alphabetical Order", [...places].sort());
//printing array in it's original order.
console.log("Original Order", places);
//print array in reverse alphabetical order
console.log("Reverse Alphabetical Order", [...places].reverse());
//printing array in it's original order.
console.log("Original Order", places);
//print array in reverse sort alphabetical order
console.log("Changed Reverse Alphabetical Order", [...places].sort().reverse());
//print array in again reverse alphabetical order
console.log("Reverse Alphabetical Order", [...places].reverse());
//sort array 
places.sort();
console.log("Sort Alphabetical Order", places);
//reverse array
places.reverse();
console.log("Reverse Alphabetical Order", places);
