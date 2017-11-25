"use strict"

const request = require('request-promise');

// Request the datavide API for <path> with given key, return the result as JSON
// Supports both promises and callbacks
function getDatavideApi(path, key, cb) {

  let callback = cb == null ? function() {} : cb

  return new Promise(function (resolve, reject) {
    request(`http://api.datavide.com/api/${path}?apikey=${key}`)
      .then(function (res) {
        let data = JSON.parse(res)

        if (typeof data.status !== 'undefined') {
          reject(`Error: status code ${data.status}, ${data.title}`)
          return callback(`Error: status code ${data.status}, ${data.title}`)
        }

        // resolve promise
        resolve(data)
        // return callback
        return callback(null, data)
      }, function (err) {
        // reject as promise
        reject(err)
        // return callback using 'error-first-pattern'
        return callback(err)
      });
  })
}

// Checks the validity of the options object
function checkOptions(required, options) {
  // Checks that each key in the required array is defined in the options object
  required.forEach((key) => {
    if (typeof options[key] === 'undefined') {
        throw `Error: Required key '${key}' in options is undefined.`
    }
  })
}

exports.getDatavideApi = getDatavideApi;
exports.checkOptions   = checkOptions;
