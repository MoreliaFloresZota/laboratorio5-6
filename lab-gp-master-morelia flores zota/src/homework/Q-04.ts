(() => {

  /* APLICA DRY */
  
  //EX - 1 dejamos el codigo factorizado ya que ambos cumplen la misma funcion
  
  function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  /*function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;*/
  
  // EX - 2 EX - 2: Ambas funciones calculateRectangleArea y calculateCircleArea calculan áreas. 
  //Podemos crear una función genérica para calcular áreas y usarla para ambas formas.
  /*function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }*/
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }

})();