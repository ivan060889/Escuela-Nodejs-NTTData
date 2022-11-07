TRABAJO EN CLASE
- HU: Yo siendo usuario deseo buscar el pais segun lo que se ingrese
  ---
const searchByCodeCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
  ---
    CA: * Se debe usar la function searchByCodeCountry para realizar una busqueda de paises (codigo abreviado: col,pe,at)
        * Se debe mostrar en la consola el nombre del país, nombre y simbolo de moneda y el idioma del país.
        * Se debe mostrar el nombre de los pais vecinos (propiedad borders del response), usando la funcion searchByCodeCountry.

TRABAJO EN CLASE
- HU: Yo como usuario deseo emitir eventos en cargas de datos con BRASIL
    CA: 
        * Se debe emitir un evento cuando se tenga una respuesta de las api. ej. ('Se cargo la data: <NombrePais>')
        * Se debe emitir eventos de falla cuando no se encuentre el vecino del pais (ocasionar el error en el 2do vecino
