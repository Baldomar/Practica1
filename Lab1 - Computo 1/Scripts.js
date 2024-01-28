// Ejercicio 1 Declarar dos variables, una para un número entero y otra para un número decimal. 
// Luego con estos números realiza las operaciones de suma, resta, multiplicación, división y exponente
var numeroEntero = 4;
var numeroDecimal = 0.5;

// Realizar operaciones
var suma = numeroEntero + numeroDecimal;
var resta = numeroEntero - numeroDecimal;
var multiplicacion = numeroEntero * numeroDecimal;
var division = numeroEntero / numeroDecimal;
var exponente = Math.pow(numeroEntero, 2);

// Mostrar resultados
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Exponente: " + exponente);

//Ejercicio 2 Crear dos variables de tipo cadena de texto una con su nombre
//completo y la otra con su carné de estudiante, luego concatena ambas variables

var nombre = "Jeison Baldomar Ventura Sorto"
var carnet = "SMSS135522"
var informacionEstudiante = nombre + "- Carnet:" + carnet
console.log("Nombre del estudiante: " + informacionEstudiante);


// ejercicio 3 Declarar un número luego convertir ese número a una cadena de texto y mostrar el resultado
var numero = 40;
var numeroComoTexto = numero.toString();
console.log("Número como texto: " + numeroComoTexto);


//Ejercicio 4 Declarar una cadena que represente un número luego convertir esa
//cadena a un número y mostrar el resultado.

// Declarar una cadena que represente un número
var cadenaNumero = "124";
var numero = Number(cadenaNumero);
console.log("Número:", numero);



//Ejercicio 5
var masa = 75; 

// Constantes para el valor de la gravedad en diferentes planetas
const gravedadTierra = 9.8;
const gravedadLuna = 1.625; 
const gravedadMarte = 3.721; 
const gravedadMercurio = 3.7; 

// Calcula el peso en diferentes planetas
var pesoTierra = masa * gravedadTierra;
var pesoLuna = masa * gravedadLuna;
var pesoMarte = masa * gravedadMarte;
var pesoMercurio = masa * gravedadMercurio;

// Muestra los resultados
console.log("Peso en la Tierra: " + pesoTierra.toFixed(2) + " Newtons");
console.log("Peso en la Luna: " + pesoLuna.toFixed(2) + " Newtons");
console.log("Peso en Marte: " + pesoMarte.toFixed(2) + " Newtons");
console.log("Peso en Mercurio: " + pesoMercurio.toFixed(2) + " Newtons");


