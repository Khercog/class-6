//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

// 1#

function printNumbers() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}

printNumbers();

// 2#
function printOddNumbers() {
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
    }
}

printOddNumbers();

// 3#

function printMultiplicationTable(number) {
    for (let i = number; i <= number; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i}x${j} = ${i * j}`);
        }
    }
}

printMultiplicationTable(7);

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1

*/
function printNumbers() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}

printNumbers();

/* Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99
 */

function printOddNumbers() {
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
    }
}

printOddNumbers();

/* Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
 */
const NUMBER_TO_MULTIPLY = 7;

function printMultiplicationTable(number) {
    for (let i = number; i <= number; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i}x${j} = ${i * j}`);
        }
    }
}

printMultiplicationTable(NUMBER_TO_MULTIPLY);

/* Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
 */

function printTables() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

printTables();

/* Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
 */

function calculateSum() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

calculateSum();

/* Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1 */

function calculateFactorial() {
    const number = 10;
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

calculateFactorial();

/* Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30 */

function calculateSumOfOddNumbers() {
    let sum = 0;
    for (let i = 11; i < 30; i += 2) {
        sum += i;
    }
    return sum;
}

calculateSumOfOddNumbers();

/* Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit */

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

celsiusToFahrenheit(10);

/* Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius */

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

fahrenheitToCelsius(32);

/* Desafío de programación #10: Calcula la suma de todos los números en un array de números */

function calculateSumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

calculateSumOfNumbers(numbers);

/* Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función) */

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

calculateAverage(numbers);

/*
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
*/

function getPositiveNumbers(numbers) {
    const positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
}

getPositiveNumbers(numbers);

/*
Desafío de programación #13: Find the maximum number in an array of numbers
*/

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

findMax(numbers);

/*
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
*/

function printFibonacci() {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    for (let i = 0; i < 8; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

printFibonacci();

/*
Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/
const NUMBER = 10;

function findNinFibonacci(n) {

    if (n === 0) {
        return -1;
    } else if (n === 1) {
        return 1;
    } else {
        return findNinFibonacci(n - 1) + findNinFibonacci(n - 2);
    }
}

findNinFibonacci(NUMBER);

/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
*/
const MY_NUMBER = 34;

function isOddNumber(number) {
    if (number % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

isOddNumber(MY_NUMBER);

/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
*/
const NUMBER_TO_ADD = 123;

function sumPositivesNumbers(numbers) {
    const NUMBER_TO_ARRAY = numbers.toString().split('').map(Number);

    let sum = 0;

    for (let i = 0; i < NUMBER_TO_ARRAY.length; i++) {
        sum += NUMBER_TO_ARRAY[i];
    }
    console.log(sum);
}

sumPositivesNumbers(NUMBER_TO_ADD);

/*
Desafío de programación #18: Imprimir los primeros 100 números primos
*/

const MAX_ODD_NUMBERS = 100;

function printOddNumbersOnly(numbers) {

    for (let i = 1; i <= numbers; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

}

printOddNumbersOnly(MAX_ODD_NUMBERS);

/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

*/

function sumFirstOddNumbers() {
    let firstOddNumbers = [];
    for (let i = 0; i < 5; i + 2) {
        firstOddNumbers.push(i);
    }
    console.log(firstOddNumbers);
}

sumFirstOddNumbers()


/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
*/
const randomArray = [9, 1, 2, 3, 4];

function rotateArrayLeft(array) {
    const firstElement = array.shift();
    array.push(firstElement);
    return array;
}

rotateArrayLeft(randomArray);
/*
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
*/

const randomArray2 = [2, 3, 4, 1];

function rotateArrayRight(array) {
    const lastElement = array.pop();
    array.unshift(lastElement);
    return array;
}

rotateArrayRight(randomArray2);

/*
Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/
const randomArray3 = [5, 6, 3]

randomArray3.reverse();

console.log(randomArray3);

/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/

const randomString = 'bienvenido'

const reversedString = randomString.split('').reverse().join('');

console.log(reversedString);

/*
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
*/

function joinArrays(arr1, arr2) {
    const joinedArray = arr1.concat(arr2);
    return joinedArray;
}

joinArrays([1, 2, 3], ['a', 'b', 'c']);

/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]
*/
const randArr1 = [1, 2, 3, 4];
const randArr2 = [3, 5, 7, 2, 9, 1];

function simetricDifference(arr1, arr2) {
    let newArray = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newArray.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            newArray.push(arr2[i]);
        }
    }

    return newArray;
}

console.log(simetricDifference(randArr1, randArr2));

// Improved version using filter

function improvedSimetricDifference(arr1, arr2) {
    const join = arr1.concat(arr2);

    const result = join.filter(num => {
       return !(arr1.includes(num) && arr2.includes(num));
    });

    return result;
}

console.log(improvedSimetricDifference(randArr1, randArr2));

/*
Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
*/

function newArrayFromTwoArrays(array1, array2) {
    const array3 = [];

    for (let i = 0; i < array1.length; i++) {
        let found = false;

        for (let j = 0; j < array2.length && !found; i++) {
            if (array1[i] === array2[j]) {
                found = true;
            }
        }

        if (!found) {
            array3.push(array1[i]);
        }
    }

    return array3;
}

console.log(newArrayFromTwoArrays([5, 1, 2, 3, 4], [3, 4]));

/*
Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
*/




/*
==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
*/
/*
Desafío de programación #39. Implement the Caesar cypher
*/



/*
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */
