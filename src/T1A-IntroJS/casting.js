/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 04.feb.2020
  *       updated Jan 30 2026
  * @desc Casting
  *       To cast, use constructors without new if you want the primitive:
  */

'use strict';

function casting() {
  // do this
  let myVar1 = Boolean(false);

  // not this
  let myVar2 = new Boolean(false);

  // because
  console.log(typeof myVar1); // --> boolean
  console.log(typeof myVar2); // --> object

  // you'll have a SAD FACE after you try this...
  Boolean(new Boolean(false))
}

casting();
