/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. Menu and buttons with custom Events
 */
/** @description Class to hold the (array of) buttons of the page */
var Menu = /** @class */ (function () {
    /**
     * @constructor
     * @description Holds an array of Buttons which are created when the Menu is created
     */
    function Menu() {
        var _this = this;
        /**
         * @method
         * @description Console logs and prints the button changing the DOM
         */
        this.showButtonClicked = function (event) {
            console.log('Menu notified!');
            var BUTTON_NAME = event.currentTarget.textContent;
            _this.statusBar.textContent = BUTTON_NAME + ' was clicked';
        };
        this.buttonContainer = document.querySelector('#menu');
        this.statusBar = document.querySelector('#status-bar');
        this.buttons = [
            new Button(this.buttonContainer, 'A'),
            new Button(this.buttonContainer, 'B'),
            new Button(this.buttonContainer, 'C')
        ];
        document.addEventListener('button-click', this.showButtonClicked);
    }
    return Menu;
}());
/**
 * @description Class for the buttons objects to be placed in the page
 */
var Button = /** @class */ (function () {
    /**
     * @description Sets up a button object placing it in the page (DOM)
     *              It set up an event listener for the click event on the button
     *              Notifies Menu when clicked, so that Menu can update the <h1>
     * @param containerElement - The DOM element that will host the button
     * @param text - Button text
     */
    function Button(containerElement, text) {
        var _this = this;
        this.text = ''; /** The button text */
        /**
         * @method onClick
         * @description Event handler method for click events on the button
         *              console logs and dispathes the event
         */
        this.onClick = function () {
            console.log('clicked: ' + _this.text);
            document.dispatchEvent(new CustomEvent('button-click'));
        };
        this.containerElement = containerElement;
        this.text = text;
        var button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', this.onClick);
        this.containerElement.append(button);
    }
    return Button;
}());
var menu = new Menu();
