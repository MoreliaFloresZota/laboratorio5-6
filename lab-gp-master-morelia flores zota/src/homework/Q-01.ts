(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES ADEMAS DE COMPROBAR SI USA LET O CONST,SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const userEmails: string[] = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];

  console.log(userEmails);
  //MANTENEMOS LA VARIABLE CONST Y CAMBIAMOS POR STRING LA OPERACION Lista de compras de un carrito
  // verificamos y solo cambiamos el nombre de la variable carro de compra y la array por string
  const shoppingCart: { product: string }[] = [
    { product: "switch" },
    { product: "X-box Controller" },
    { product: "steam-gift-card" },
  ];

  console.log(shoppingCart);
  

  //funcion para sumar mas 3 a un numero y retornarlo cambiamos el nombre de la variable 
  const addThree = (number: number): number => {
    return number + 3;
  };

  console.log(addThree(2));
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capi(w: string): string {
    w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }

  console.log(capi("capricorn"));
// en principio cambiamos de una funcion a una const en este caso al cambiar la variable no sucede nada se mantiene  el resultado 
  const capitalize = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  console.log(capitalize("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  //cambiamos a una const colocando un evento ocurrido y utilizando boolean y respondiendo a la variable event
  const eventOccurred: boolean = false;

  if (eventOccurred) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  const canAccess: boolean = true;

  if (canAccess) console.log('welcome');

  //variable para hallar el promedio de 3 numeros
  //cambiamos a const
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);
  //variable que almacena el valor de PI
  //cambiamos nombre de la variable y const
  const pi: number = 3.141592654;

  console.log(pi);

  //variabel que controla si un archivo es modificable 
  const isEditable: boolean = false;

  if (isEditable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const eulerNumber: number = 2.718281828; 


})();