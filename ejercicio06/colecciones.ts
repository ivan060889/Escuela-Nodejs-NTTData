"use strict"
//arreglo y acceder a sus elementos
//array son los datos del mismo tipo
"ivan , rocio , aysse , edson , leydi"
let nombres: string[]=["ivan", "rocio","aysse","edson","leydi"]
console.log(nombres[4])



//otra forma de declarar array
let frutas: Array<string>=["pera", "manzana","melon"]
console.log(frutas[1])

const juguetes: Array<string>=["pelota","carro","oso"]
console.log(juguetes[2])

//tuplas ->son de diferentes tipos de datos 
let dog:[string,number,boolean]=["saza",4,true];
console.log(dog[0])


//FUNCIONES 
//parametros en la definición
console.log('**************************');
function sumarse(a:number , b:number):number
{
    console.log( a+b);
    return a+b
}   
//argumentos
sumarse(4,4)

//funcion anonima 
console.log('************resta**************');

let resta= function(c: number,d: number):number
{
    console.log(c-d)
    return c-d
}
resta(10,5)
console.log('************ultiplicacion**************');

let multiplicar=(e:number, f:number):number=>
{
    console.log(e*f)
    return e*f
} 
console.log(multiplicar(50,4))
console.log('************division**************');

const division=(h:number,i:number):number=>h/i
console.log(division(500,10))