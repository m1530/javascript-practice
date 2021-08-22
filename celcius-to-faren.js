// celcius to fahrenheit= (c*9/5)+32

// function calciusToFahrenheit(calcius) {
//     var cal = (calcius * 9 / 5) + 32;
//     return cal;
// }
// var result = calciusToFahrenheit(34);
// console.log(result);

//fahrenheit to celcius => (°F − 32) × 5/9 = °C

function fahrenheitToCelcius(f) {
    var celcius = (f - 32) * 5 / 9;
    return celcius;
}
var result = fahrenheitToCelcius(222);
console.log(result);