export { };

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 * 
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

function fahrenheitToCelsius(farenhait: number): number {
    let celsius = (farenhait - 32) * 5 / 9;
    return celsius;
}

function celsiusToFahrenheit(celsius: number): number {
    let farenhait = celsius * 9 / 5 + 32;
    return farenhait;
}

console.log(fahrenheitToCelsius(32).toFixed(1)); // Expected result: 0
console.log(celsiusToFahrenheit(0).toFixed(1)); // Expected result: 32
