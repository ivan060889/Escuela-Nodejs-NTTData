"use strict";
exports.__esModule = true;
var productos = [
    {
        nombre: "pc-gamer",
        marca: "lenovo",
        precio: 1000
    },
    {
        nombre: "pc-latitude",
        marca: "sansung",
        precio: 2000
    },
    {
        nombre: "pc-gamer",
        marca: "lenovo",
        precio: 1000
    }
];
function conseguirProductos() {
    return new Promise(function (resolve, rejects) {
        console.log('cargando productos');
        setTimeout(function () {
            resolve(productos);
        }, 1000);
    });
}
conseguirProductos().then(function (datos) {
    console.log(datos);
});
