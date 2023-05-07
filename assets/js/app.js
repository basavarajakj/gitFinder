/**
 * @license MIT
 * @author bassu
 * @copyright bassu 2023
 */

'use strict';

/**
 * Add eventlistener on multiple elements
 * @param {NodeList} $element 
 * @param {String} eventType 
 * @param {Function} callback 
 */
const addEventOnElement = function ($elements, eventType, callback) {
  for (const $item of $elements) {
    $item.addEventListeners(eventType, callback)
  }
  
}


/**
 * HEADER scroll state
 */

const /** {NodeElement} */ $header = document.querySelector('[data-header]');

window.addEventListener('scroll', function () {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active')
})


/**
 * Search toggle
 */

const /** {NodeElement} */ $searchToggler = document.querySelector('[data-search-toggler]');
const /** {NodeElement} */ $searchField = document.querySelector('[data-search-field]');
let /** {Boolean} */ isExpanded = false;

$searchToggler.addEventListener('click', function () {
  $header.classList.toggle('search-active');
  isExpanded = isExpanded ? false : true;
  this.setAttribute('aria-expanded', isExpanded);
  $searchField.focus()
})
