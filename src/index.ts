// Author: Igor Dimitrijević (@igorskyflyer)

import { strIsIn } from '@igorskyflyer/str-is-in'
import { platform } from 'node:os'

const os: NodeJS.Platform = platform()
const isWindows: boolean = os === 'win32'
const isUnixLike: boolean = os === 'linux' || os === 'darwin'

export type ComparatorCallback = (path: string, listEntry: string) => boolean

/**
 * @private
 * @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
function comparatorWindows(entry: string, value: string): boolean {
  return entry.toLowerCase() === value.toLowerCase()
}

/**
 * @private
 * @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
function comparatorUnixLike(entry: string, value: string): boolean {
  return entry === value
}

/**
 * @private
 * @returns {ComparatorCallback}
 */
function getDefaultComparator(): ComparatorCallback {
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
export function pathExistsWindows(path: string, list: string[]): boolean {
  return pathExists(path, list, comparatorWindows)
}

/**
 * Checks whether the given path is in the provided list of paths, UNIX-like mode, i.e. case-sensitive.
 * @param {string} path path to check
 * @param {string[]} list  list of paths to check against
 * @returns {boolean}
 */
export function pathExistsUnix(path: string, list: string[]): boolean {
  return pathExists(path, list, comparatorUnixLike)
}

/**
 * Checks whether the given path is in the provided list of paths for the host OS.
 * @param {string} path path to check
 * @param {string[]} list  list of paths to check against
 * @param {ComparatorCallback} [comparator] compare function to use, defaults to a function that uses full, case-insensitive match
 * @returns {boolean}
 */
export function pathExists(
  path: string,
  list: string[],
  comparator?: ComparatorCallback
): boolean {
  return strIsIn(path, list, comparator || getDefaultComparator())
}
