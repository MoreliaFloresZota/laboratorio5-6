## SOLID
SOLID es un acrónimo que representa cinco principios de diseño de software que promueven la creación de código modular, mantenible y escalable. Fueron definidos por Robert C. Martin en la década de 1990 y se han convertido en una guía fundamental para muchos desarrolladores de software. Aquí te explico cada uno de los principios:
# Principios SOLID
# S - Principio de Responsabilidad Única (Single Responsibility Principle):
 Este principio establece que una clase o módulo debe tener una única razón para cambiar. En otras palabras, una clase debe tener una única responsabilidad o tarea en el sistema.

# O - Principio de Abierto/Cerrado (Open/Closed Principle):
 Según este principio, las entidades de software deben estar abiertas para su extensión pero cerradas para su modificación. Esto significa que uno debe poder extender el comportamiento de una clase sin alterar su código fuente.

# L - Principio de Sustitución de Liskov (Liskov Substitution Principle):
 Este principio establece que los objetos de un programa deben ser reemplazables por instancias de sus subtipos sin afectar la correctitud del programa. En otras palabras, si S es un subtipo de T, entonces los objetos de tipo T pueden ser reemplazados por objetos de tipo S sin alterar las propiedades deseadas del programa.

# I - Principio de Segregación de Interfaces (Interface Segregation Principle):
 Este principio establece que los clientes no deben verse obligados a depender de interfaces que no utilizan. En lugar de eso, las interfaces deben ser lo más pequeñas y específicas posible para los clientes que las utilizan.

# D - Principio de Inversión de Dependencias (Dependency Inversion Principle):
 Este principio sugiere que los módulos de alto nivel no deben depender de los módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.

Estos principios SOLID son ampliamente utilizados en el desarrollo de software orientado a objetos y ayudan a crear sistemas más flexibles, fáciles de mantener y de entender.
.................................................

### Ejemplo01:


```typescript
class UserManager {
  constructor(private userRepository: UserRepository) {}

  addUser(user: User) {
    this.userRepository.save(user);
  }

  removeUser(userId: string) {
    this.userRepository.delete(userId);
  }

  // Otros métodos relacionados con la gestión de usuarios
}
#### Ejemplo02:

interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
interface Worker {
  work(): void;
  eat(): void;
}

### Ejemplo 
class Robot implements Worker {
  work(): void {
    console.log("Working");
  }

  eat(): void {
    // Los robots no necesitan comer, no se implementa esta función
  }
}

class Human implements Worker {
  work(): void {
    console.log("Working");
  }

  eat(): void {
    console.log("Eating");
  }
}