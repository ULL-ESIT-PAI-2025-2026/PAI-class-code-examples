/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
  *        updated Jan 30 2026
  * @desc While loop
  */

'use strict';

function whileStatement() {
  let result = 1;
  let counter = 0;
  while (counter < 10) {
    result *= 2;
    counter = ++counter;
  }
  console.log(result);
}

whileStatement();
