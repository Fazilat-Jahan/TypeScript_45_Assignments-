/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

let users : string[] = ["Eric", "Peton", "Dall", "Fari"]

if (users.length ==0) {
    console.log("we need to find some users!")
}
else {
    for(let u=0; u < users.length; u++){
        console.log(`Hello ${users[u]}, Thank You for logging in again `)
    }
}

//empty list 

users = []

if (users.length ==0) {
    console.log("we need to find some users!")
}
else {
    for(let u=0; u < users.length; u++){
        console.log(`Hello ${users[u]}, Thank You for logging in again `)
    }
}