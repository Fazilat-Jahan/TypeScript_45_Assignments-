/* Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. */

let guest: string[] = ["Aru", "Sob", "Komi", "Fazi"];
console.log(guest);

let changeGuest = "Komi";
//console.log(`Dear! ${changeGuest}! Sorry But Can't Make It For Dinner.\n`);

//adding guest instead of one person.
let addguest = "Nighat";
guest[guest.indexOf(changeGuest)] = addguest;
console.log(guest);
                                                                                                                                                                        
//adding guest in the beginning of an array.
let guestbegin:string ="Anas";
guest.unshift(guestbegin);

//adding guest in middle of an array.
let middleguest: string = "Sam";
let middleindex = guest.length/2;
guest.splice(middleindex,0,middleguest);
console.log(guest);

//adding guest in the end of an array.
guest.push("Younus")
console.log(guest);
console.log("New Guest List", guest, '\n');

console.log("Invitation Sent List: \n");

guest.map((items) => console.log(`Dear! ${items} You are invited for dinner`));

let numberofGuest = guest.length;
console.log(numberofGuest,"Guest Are Invited");
