// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "Large", message:string="I Love TypeScript"): 
void {
    console.log(`I want ${size} size T-Shirts with Message ${message}`)
}
make_shirt() //default size and message

make_shirt("Medium") //medium size shirt with deafult message

make_shirt("Small", "I Love Programming") //size with custom message