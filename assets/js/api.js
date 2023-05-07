/**
 * @license MIT
 * @author bassu
 * @copyright bassu 2023
 */

'use strict';

/**
 * Fetch data from server
 * @param {string } url API url [required]
 * @param {*} successCallback Success callback [required] 
 * @param {*} errorCallback Error callback [required]
 */

export async function fetchData(url, successCallback, errorCallback) {
  
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  } else {
    const error = await response.json();
    errorCallback && errorCallback(error);
  }
}