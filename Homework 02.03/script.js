// function dogFunction(number, string) {
//     let obj = {};
//     for (let i = 0; i <=number; i++) {
//         obj[`"${string}${i}"`] = `${string}${i}`;
//     }   
//     return obj;   
// }
// console.log(dogFunction(2, "dog"));


// let sumEven = 0;
// function sumOfEven(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             sumEven += array[i];
//         }
//     }
//     console.log(sumEven);
// }
// const array = [2, 4, 5, 6, 7, 8, 10, 11, 13, 15];
// sumOfEven(array);

// let sumOdd = 0;
// function sumOfOdd(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             sumOdd += array[i];
//         }
//     }
//     console.log(sumOdd);
// }
// sumOfOdd(array);

// function compare(sumEven, sumOdd) {
//     if (sumEven > sumOdd) {
//         console.log(sumEven)
//     }else {
//         console.log(sumOdd)
//     }
// }
// compare(sumEven, sumOdd);

// const fahrenheit = 32;
// let celsiumToFahrenheit = 0;

// function calc(celsium) {
//     celsiumToFahrenheit = (celsium * 1.8) + fahrenheit;
//     console.log(celsiumToFahrenheit)
//     //( °C × 9/5) + 32 =  °F
// }
// calc(2);

const array = [4, 5, 6, 7, 8, 10, 11, 13, 15, 1];
// let max = array[0];
// function findMax(array) {
//     for (let i = 0; i <array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     console.log(max);
// }
// findMax(array);

let min = array[0];
function findMin(array) {
    for (let i = 0; i <array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log(min);
}
findMin(array); 



