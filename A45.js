"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function Cars(manufacturer, model, ...properties) {
    const info = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        info[key] = value;
    }
    return info;
}
const information = Cars("Audi", "S3", ["color", "Red"], ["optional_feature", "Panoramic Sunroof"], ["speed", "250km/hr"]);
console.log(information);
