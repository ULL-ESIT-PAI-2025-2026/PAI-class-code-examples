/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc Constructors can be overloaded
  *       This code is clearly a didactic example designed to illustrate how the overload mechanism works, 
  *       but it has several intentional bad practices:
  *       Issue                               Explanation
  *       Parameters are ignored              The implementation doesn't use coordX or coordY at all — it hardcodes 9 and 8
  *       Using any types                     The implementation uses any, which defeats TypeScript's type safety. Better to use union types like string | number
  *       Misleading overload types           Overload 1 takes (number, string) for a Point — a string for a coordinate makes no sense
  *       No runtime type checking            A proper implementation should use typeof checks to handle each overload differently
  *
  *       Key observations:
  *       The implementation completely ignores the arguments passed. It doesn't use coordX or coordY parameters at all.
  *       It hardcodes this.coordX = 9 and this.coordY = 8 regardless of what you pass.
  *       The implementation signature itself is not directly callable by external code — only the two overload signatures above it are visible to callers.
  * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors
  */

class Point1 {
  coordX: number;
  coordY: number;

  // Normal signature with defaults
  constructor(coordX = 0, coordY = 0) {
    this.coordX = coordX;
    this.coordY = coordY;
    console.log(`Usual constructor. Point (${this.coordX}, ${this.coordY})`);
  }
}

class Point2 {
  coordX: number = 0;
  coordY: number = 0;

  // Overloads
  constructor(coordX: number, coordY: string);
  constructor(coord: string);
  // This is the single implementation that handles all overloads. 
  // It must be compatible with every overload signature, which is why it uses any types and makes coordY optional.
  constructor(coordX: any, coordY?: any) {
    this.coordX = 9;
    this.coordY = 8;
    console.log(`Overloaded constructor. Point (${this.coordX}, ${this.coordY})`);
  }
}

export function entryPoint() {
  let point1: Point1 = new Point1();
  let point2: Point2 = new Point2('Pay attention');
};

entryPoint();
