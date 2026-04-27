/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. OO Present. Multiple Presents. Present class
*/

/** @classdesc Represents a single present */
export class Present {
  private image: HTMLImageElement; /** New DOM element to hold the present image */

  /**
   * @constructor
   * @description Inserts the Present image HTML element in the DOM
                  The present is created with it's initial (package) image
   * @param presentContainer- The DOM element that hosts the presents
   * @param presentSrc - URL of the image for this present
   */
  constructor(private containerElement: HTMLElement, 
              private presentSrc: string) {  /** URL for the final (opened) image of the present */
    // Create image and append to container.
    this.image = document.createElement('img');
    const INITIAL_IMAGE: string = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    this.image.src = INITIAL_IMAGE;  
    this.image.addEventListener('click', this.openPresent);
    this.containerElement.append(this.image);
  }

  /**
   * @method
   * @description Listener for the click event on images (presents)
   *              Replaces the initial image with the present (new) image
   *              Removes the click event listener
   */
  private openPresent = (event: Event): void => {
    this.image!.src = this.presentSrc;
    this.image!.removeEventListener('click', this.openPresent);
  }

}
