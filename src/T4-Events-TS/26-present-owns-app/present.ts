/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
  * @description OO Present. Present Class
  *              The Present holds a reference (app) to the class that owns this Present
  *              NOTE: This is a BAD Practice! Don't do this.
  */

import {App} from './app.js';

/** @classdesc Represents a single present */
export class Present {
  private image: HTMLImageElement;        /** New DOM element to hold the present image */

  /**
   * @description Sets up a present object placing it in the page (DOM)
   *       It set up an event listener for the click event on the initial image
   * @param containerElement - The DOM element that will host the button
   * @param presentSrc - URL for the (new) image for this present
   * @param app - The object that owns this present
   */
  constructor(private containerElement: HTMLElement, 
              private presentSrc: string,  /** URL for the final (opened) image of the present */
              private app: App) {  // <-- POOR STYLE: DON'T DO THIS:

    // Create image and append to container
    this.image = document.createElement('img');
    const INITIAL_IMAGE = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    this.image.src = INITIAL_IMAGE;  
    this.image.addEventListener('click', this.openPresent);
    this.containerElement.append(this.image);
  } 
  
  /**
   * @method
   * @description Listener for the click event on images (presents)
   *              Replaces the initial image with the present (opened) image
   *              Removes the click event listener
   *              Calls the app onPresentOpened() method 
   * @param event - The event object 
   */
  private openPresent = (event: Event): void => {
    this.image.src = this.presentSrc;
    this.image.removeEventListener('click', this.openPresent);
    this.app.onPresentOpened(); // <-- POOR STYLE: DON'T DO THIS:
  }
}
