const { platform } = require('os')
const { strIsIn } = require('@igor.dvlpr/str-is-in')

const os = platform()
const isWindows = os === 'win32'
const isUnixLike = os === 'linux' || os === 'darwin'

/**
 * @callback ComparatorCallback
 * @param {string} path
 * @param {string} listEntry
 * @returns {boolean}
 */

/**
 * @private
 * @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
function comparatorWindows(entry, value) {
  return entry.toLowerCase() === value.toLowerCase()
}

/**
 * @private
 * @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
function comparatorUnixLike(entry, value) {
  return entry === value
}

/**
 * @private
 * @returns {ComparatorCallback|null}
 */
function getDefaultComparator() {
  if (isWindows) {
    return comparatorWindows
  } else if (isUnixLike) {
    return comparatorUnixLike
  } else {
    return () => false
  }
}

/**
 * Checks whether the given path is in the provided list of paths, Windows mode, i.e. case-insensitive.
 * @param {string} path path to check
 * @param {string[]} list  list of paths to check against
 * @returns {boolean}
 */
function pathExistsWindows(path, list) {
  return pathExists(path, list, comparatorWindows)
}

/**
 * Checks whether the given path is in the provided list of paths, UNIX-like mode, i.e. case-sensitive.
 * @param {string} path path to check
 * @param {string[]} list  list of paths to check against
 * @returns {boolean}
 */
function pathExistsUnix(path, list) {
  return pathExists(path, list, comparatorUnixLike)
}

/**
 * Checks whether the given path is in the provided list of paths for the host OS.
 * @param {string} path path to check
 * @param {string[]} list  list of paths to check against
 * @param {ComparatorCallback} [comparator] compare function to use, defaults to a function that uses full, case-insensitive match
 * @returns {boolean}
 */
function pathExists(path, list, comparator) {
  return strIsIn(path, list, comparator || getDefaultComparator())
}

module.exports = {
  pathExists,
  pathExistsUnix,
  pathExistsWindows,
}
