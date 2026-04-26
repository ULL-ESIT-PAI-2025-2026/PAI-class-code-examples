/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description OO App class
 */

import {Present} from './present.js';
import {PRESENT_SOURCES} from './present-sources.js';

/** * @classdesc Holds and manages multiple presents (objects) */
export class App {
  private presents: Present[] = []; /** Array of presents */
  private openedCount: number = 0;  /** Holds the number of presents that have been opened */

  /*
   * @constructor
   * @param {object} presentContainer - DOM element that holds the array of presents
   * @param {object} titleContainer - DOM element that holds the header title of the page
   */
  constructor(private presentContainer: HTMLElement, 
              private titleContainer: HTMLElement) {
    this.fillPresentContainer();
    document.addEventListener('present-opened', this.onPresentOpened);
  }

  /**
   * @method fillPresentContainer
   * @description Creates the present objects and stores them in the presents array
   */
  private fillPresentContainer(): void {
    for (const SOURCE of PRESENT_SOURCES) {
      const PRESENT = new Present(this.presentContainer, SOURCE);
      this.presents.push(PRESENT);
    }
  }

  /**
   * @method onPresentOpened
   * @description When a present is opened, the method updates the number of opened presents
   *       If it is the last present, modifies the page header message
   */
  private onPresentOpened = (): void => {
    this.openedCount++;
    if (this.openedCount === this.presents.length) {
      this.titleContainer.textContent = 'Enjoy your presents!';
    }
  }
}
