var nombre_completo = "ivan moran celi";
var edad = 33;
var resultado = "Hola, mi nombre es ".concat(nombre_completo, ".\nEste a\u00F1o voy a cumplir ").concat(edad + 1, " a\u00F1os.");
// Esto sería equivalente a
//let sentence: string = "Hola, mi nombre es " + nombre_completo + ".\n\n" + "Este año voy a cumplir " + (edad + 1) + " años.";
console.log(resultado);
