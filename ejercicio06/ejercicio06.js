(function () {
    var retirarDinero = function (cantidad) {
        return new Promise(function (resolve, reject) {
            var SALDO_ACTUAL = 1000;
            if (SALDO_ACTUAL >= cantidad)
                resolve("Monto disponible a retirar: ".concat(SALDO_ACTUAL - cantidad));
            else
                reject("No hay suficientes montos.");
        });
    };
    console.log(retirarDinero(1500)
        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn(err); }));
    console.log(retirarDinero(1000)
        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn(err); }));
    console.log(retirarDinero(1500)
        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn(err); }));
})();
