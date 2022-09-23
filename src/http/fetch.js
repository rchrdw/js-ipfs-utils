'use strict'

/**
 * @typedef {object} fetchImpl
 * @property {globalThis.fetch} fetchImpl.fetch
 * @property {globalThis.Request} fetchImpl.Request
 * @property {globalThis.Response} fetchImpl.Response
 * @property {globalThis.Headers} fetchImpl.Headers
 */

if (typeof XMLHttpRequest === "function") {
  // Electron has `XMLHttpRequest` and should get the browser implementation
  // instead of node.
  /** @type {fetchImpl} */
  module.exports = require("./fetch.browser");
} else {
  /** @type {fetchImpl} */
  module.exports = require("./fetch.node");
}
