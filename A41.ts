// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians (names: string[]): void {
    for (let i=0; i < names.length; i++){
        console.log(names[i])
    }
}
const magicianNames : string[] = ["David", "Pen", "Harry", "Potter", "Teller"]
show_magicians(magicianNames)