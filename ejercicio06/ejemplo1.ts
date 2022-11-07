(function () {
    var fruits = [
        'apple',
        'melon',
        'mango',
        function () {
            var zumo = "Zumo de ";
            console.log(zumo);
            return zumo;
        }
    ];
    // const a = fruits[3]('');
    console.log('Colección array:', fruits[2]);
    var numbersCollection = new Set();
    numbersCollection.add(9);
    numbersCollection.add(4);
    numbersCollection.add(5);
    numbersCollection.add(6);
    numbersCollection.add(10);

    console.log('Coleccion set: ', numbersCollection);
    var students = new Map();
    students.set('one', 'ivan');
    students.set('two', 'moran');
    students.set('three', 'celi');
    students.set('four','aysse');
    console.log('Coleccion map: ', students.get('four'));
    console.log('--------------*** PROMESAS *** -----------');
    console.log('INICIO DE PROMESAS');
    var inicioPromesa = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Error al carga los  valores');
        }, 1000);
        setTimeout(function () {
            resolve('Los valores esperados son ');
        }, 2000);
    });
    inicioPromesa
        .then(function (res) 
        {
             console.log(res);
        })["catch"](function (err)
         
        {
             return console.warn('[Exception]', err);
         });
    console.log('FIN PROMESAS');
})();