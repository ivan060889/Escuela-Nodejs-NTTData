const arrayNumber: number[] = [1, 2, 3];
const arrayString_2: string[] = ['1', '2', '3'];
// Ó bien de la siguiente manera
const arrayNumber_3: Array<number> = [1, 2, 3];
const arrayString_4: Array<string> = ['1', '2', '3'];

let arrayMixed: any[] = [2, '5', 3];
// Declaramos el tuple
let array: [string, number];
// Inicializamos Correctamente
array = ['Hola', 2];
// Inicializamos Incorrectamente
//array = [2, 'hola']; // Regresará un error
console.log( `${arrayNumber}`)
console.log('================================')
console.log('enum')
// Roles
enum Roles = { Admin, User}; // Admin = 0, User = 1
const user: Roles = Roles.Admin;


// Any
let list: any[] = [1, '2', true];
let user: Object = {
    name: "Tu nombre",
    age: 29,
    havePets: true
};
console.log(list[0], user.name);

// Interface
interface Puppy { 
    name: string,
    age: string
};
// Declaración Válida
const puppy: Puppy = {
   name: "Mascota",
   age: 2
};
// Declaración Inválida
const invalidPuppy: Puppy = {
   eat: true
};
// Esta declaración es inválida puesto que la prop eat no existe en la interface.