"use strict";
//arreglo y acceder a sus elementos
//array son los datos del mismo tipo
"ivan , rocio , aysse , edson , leydi";
var nombres = ["ivan", "rocio", "aysse", "edson", "leydi"];
console.log(nombres[4]);
//otra forma de declarar array
var frutas = ["pera", "manzana", "melon"];
console.log(frutas[1]);
var juguetes = ["pelota", "carro", "oso"];
console.log(juguetes[2]);
//tuplas ->son de diferentes tipos de datos 
var dog = ["saza", 4, true];
console.log(dog[0]);
//FUNCIONES 
//parametros en la definición
console.log('**************************');
function sumarse(a, b) {
    console.log(a + b);
    return a + b;
}
//argumentos
sumarse(4, 4);
//funcion anonima 
console.log('************resta**************');
var resta = function (c, d) {
    console.log(c - d);
    return c - d;
};
resta(10, 5);
console.log('************ultiplicacion**************');
var multiplicar = function (e, f) {
    console.log(e * f);
    return e * f;
};
console.log(multiplicar(50, 4));
console.log('************division**************');
var division = function (h, i) { return h / i; };
console.log(division(500, 10));
