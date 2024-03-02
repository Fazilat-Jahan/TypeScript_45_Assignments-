/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

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
