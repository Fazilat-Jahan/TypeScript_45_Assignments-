/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

let fav_fruits: string[] = ["Banana", "Cherry", "Pomogranate"]

if (fav_fruits.includes("Banana")) {
    console.log("You really like Bananas")
}
if (fav_fruits.includes("Cherry")) {
    console.log("You really like cherry")
}
if (fav_fruits.includes("Pomogranate")) {
    console.log("You really like Pomogranate")
}

if (fav_fruits.includes("Oranges")) {
    console.log("You really like Oranges")
} else {
    console.log("Oranges are not in your fav fruits list!")
}

if (fav_fruits.includes("Apple")) {
    console.log("You really like Apple")
} else {
    console.log("Apple is not in your fav fruits list!")
}
