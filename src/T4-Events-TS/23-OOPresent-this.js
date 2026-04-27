/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description JS Events. OO Present Class with this bug
 */
/**
 * @class
 * @classdesc Represents a present
 *            Each present has an original image.
 *            When it is clicked, it is replaced with a (new) present image.
 */
var Present = /** @class */ (function () {
    /**
     * @constructor
     * @description Sets up a present object (new image) placing it in the page (DOM)
     *              Creates an image and appends it to the container
     * @param containerElement - The DOM element that will host the present (image)
     */
    function Present(containerElement) {
        var _this = this;
        this.containerElement = containerElement;
        /**
         * @method
         * @description Listener. Changes the image property with the new image and removes the listener
         * @param {object} event - Event object
         */
        this.openPresent = function (event) {
            _this.image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
            _this.image.removeEventListener('click', _this.openPresent);
        };
        this.image = document.createElement('img');
        this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
        this.image.addEventListener('click', this.openPresent);
        this.containerElement.append(this.image);
    }
    return Present;
}());
function main() {
    var containerElement = document.querySelector('#presents');
    var present = new Present(containerElement);
}
main();
