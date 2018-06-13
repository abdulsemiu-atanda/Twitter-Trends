import settings from '../private/data/settings.json'

/**
 * Returns a promise for an HTTP request
 * @async
 * @param {string} endpoint - HTTP resource enpoint
 * @returns {Promise} - Promise object of HTTP request
 */
const sendRequest = (endpoint) => {
  return fetch(`https://api.twitter.com/1.1/${endpoint}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: settings.twitter.authorization,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
}

export default sendRequest