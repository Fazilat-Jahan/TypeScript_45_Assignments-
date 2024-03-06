// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function Sandwiches (...sandwich:string[]): 
void{
    console.log("Orders \n")
    for(let s=0; s < sandwich.length; s++){
        console.log(sandwich[s])
    }
}

Sandwiches("Club Sandwich", "Cheese Sandwich", "BBQ Grilled Sandwich", "\n")
Sandwiches("Grilled Sandwich", "Wrap Sandwich", "\n")
Sandwiches("BBQ Grilled Sandwich", "\n")