function sumar(num1, num2) {
    console.log("La suma de ".concat(num1, " y ").concat(num2, " es: ").concat(num1 + num2));
}
function operacion(_a) {
    var num1 = _a.num1, num2 = _a.num2, _b = _a.operador, operador = _b === void 0 ? '+' : _b;
    console.log("Valores ingresados: ".concat(num1, ", ").concat(num2, ", ").concat(operador));
    switch (operador) {
        case '+':
            console.log("La suma de ".concat(num1, " y ").concat(num2, " es: ").concat(num1 + num2));
            break;
        case '-':
            console.log("La resta de ".concat(num1, " y ").concat(num2, " es: ").concat(num1 - num2));
            break;
        case '*':
            console.log("La multiplicaci\u00F3n de ".concat(num1, " y ").concat(num2, " es: ").concat(num1 * num2));
            break;
        case '/':
            console.log("La divisi\u00F3n de ".concat(num1, " y ").concat(num2, " es: ").concat(num1 / num2));
            break;
        default:
            console.log('Operdaor incorrecto.');
            break;
    }
}
sumar(200, 4);
var valores2 = {
    num1: 10,
    num2: 5,
    operador: '*'
};
operacion(valores2);
