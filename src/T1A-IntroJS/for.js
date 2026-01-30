/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 16.ene.2020
 * @desc for statement
 *        updated Jan 30 2026
 *
 * Computes 2^N
 */

'use strict';

function forStatement() {
  const readlineSync = require('readline-sync');
  const exponent = Number(readlineSync.question('Introduce exponente: '));
  let result = 1;
  for (let counter = 0; counter < exponent; ++counter) {
    result *= 2;
  }
  console.log('2^', exponent, " = ", result);
}

forStatement();
