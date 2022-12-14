
(()=>{

    const retirarDinero = (montoRetirar: number): Promise<number> => {

        let dineroActual = 1000;

        return new Promise( (resolve, reject) => {

            if (montoRetirar > dineroActual) {
                reject('Usted no tiene suficiente dinero');
            } else {
                dineroActual -= montoRetirar;
                resolve( dineroActual );
            }
        });
    }

    retirarDinero(5000)
        .then( montoActual => console.log(`Me queda ${montoActual}`))
        .catch( console.warn)
})();


  