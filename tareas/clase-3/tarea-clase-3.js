// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const MY_NAME = 'kevin';

function greet() {
  
	const userName = (prompt('Insert your name') || '').toLowerCase();
  
    if (userName.trim().length === 0) {
        console.log("Hey you didn't enter your name");
        greet();
    } else if (MY_NAME === userName) {
        console.log("Hey, Tocayo! I'm Kev"); 
    } else {
        console.log(`Sup ${userName}`);
    }
}

greet();

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const MY_AGE = 32;

function checkAge() {
  
    const userAge = Number(prompt('Insert your age'));
  
    if (isNaN(userAge) || userAge === 0) {
        console.log("That's not a valid number. Please enter your age.");
        checkAge();
    } else if (userAge === MY_AGE) {
        console.log('We have the same age');
        return userAge;
    } else if (userAge < MY_AGE) {
        console.log('You are younger');
        return userAge;
    } else if (userAge > MY_AGE) {
        console.log('You are older');
        return userAge;
    } else {
        console.log("Didn't understand");
        checkAge();
    }
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const ALLOWED_AGE = 18;
const POSITIVE_ANSWER = "yes";
const NEGATIVE_ANSWER = "no";

function verifyAge() {

  const askForUserId  = (prompt("Do you have a National ID? \nPlease answer with a yes or no") || '').toLowerCase();

  if (!askForUserId || askForUserId.trim().length === 0) {
      console.log("Only answer with yes or no, please")
      verifyAge();        
  } else {
       if (askForUserId  === POSITIVE_ANSWER) {
          const userAge = checkAge();
          if (userAge >= ALLOWED_AGE) {
              return console.log("Welcome to the bar");
          } else {
              console.log("You are not allowed to enter");
          }    
      } else if (askForUserId === NEGATIVE_ANSWER) {
          console.log("You are not allowed to enter");
          return false;
      } else {
          console.log("Didn't understand");
           return verifyAge();
      }
    }
}

verifyAge();