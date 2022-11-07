import { rejects } from "assert";
import { resolve } from "path";

let productos=[
    {
        nombre:"pc-gamer",
        marca : "lenovo",
        precio :1000
    },
    {
        nombre:"pc-latitude",
        marca : "sansung",
        precio :2000   
    },
    {
        nombre:"pc-gamer",
        marca : "lenovo",
        precio :1000,
    }
];
function conseguirProductos()
{
    return new Promise((resolve,rejects)=>
    {
        console.log('cargando productos');
        setTimeout(()=>
        {
            resolve(productos);

        },3000)
    });
}
//convertimos la funcion en asyn(asincrona va esperar el resultado)
async function getMisProductos(){
    let mi_productos= await conseguirProductos();
    console.log(mi_productos);
}
getMisProductos();
/*
conseguirProductos().then(datos=>
    {
        console.log(datos)
    })*/