function saludar(nombre){
    console.log('hola', nombre);
   
}

interface heroe{

    nombre: string;
    apellido:string;
}

const ironman: any=
{
    nombre:'tony',
    apellido:'stark'
};
saludar(ironman.nombre);