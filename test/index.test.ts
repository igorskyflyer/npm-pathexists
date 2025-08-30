// Author: Igor Dimitrijević (@igorskyflyer)

import { platform } from 'node:os'
import { assert, describe, it } from 'vitest'
import { pathExists, pathExistsUnix, pathExistsWindows } from '../src/index.js'

const os = platform()
const isWindows = os === 'win32'
const isUnixLike = os === 'linux' || os === 'darwin'
const winPaths = ['abc.js', 'etc.bak', 'D:\\', 'D:\\Temp\\a.js']
const unixPaths = ['abc.js', 'etc.bak', '/home/user', '/home/user/a.js']

describe('🧪 path-exists tests 🧪', () => {
  describe('all', () => {
    it('should return false', () => {
      assert.isFalse(pathExists('abc', []))
    }) // #1

    it('should return true', () => {
      assert.isTrue(pathExists('a', ['b', 'a', 'c']))
    }) // #2

    it('should return false', () => {
      assert.isFalse(pathExists('d', ['b', 'a', 'c']))
    }) // #3

    it('should return true', () => {
      assert.isTrue(pathExistsWindows('abc.js', winPaths))
    }) // #4

    it('should return true', () => {
      assert.isTrue(pathExistsWindows('abC.js', winPaths))
    }) // #5

    it('should return true', () => {
      assert.isTrue(pathExistsWindows('D:\\Temp\\a.js', winPaths))
    }) // #6

    it('should return true', () => {
      assert.isTrue(pathExistsWindows('D:\\Temp\\A.js', winPaths))
    }) // #7

    it('should return true', () => {
      assert.isTrue(pathExistsUnix('abc.js', unixPaths))
    }) // #8

    it('should return false', () => {
      assert.isFalse(pathExistsUnix('abC.js', unixPaths))
    }) // #9

    it('should return true', () => {
      assert.isTrue(pathExistsUnix('/home/user/a.js', unixPaths))
    }) // #10

    it('should return false', () => {
      assert.isFalse(pathExistsUnix('/home/user/A.js', unixPaths))
    }) // #11
  })

  if (isWindows) {
    describe('Windows only', () => {
      it('should return true', () => {
        assert.isTrue(pathExists('abc.js', winPaths))
      }) // #12

      it('should return true', () => {
        assert.isTrue(pathExists('abC.js', winPaths))
      }) // #13

      it('should return true', () => {
        assert.isTrue(pathExists('D:\\Temp\\a.js', winPaths))
      }) // #14

      it('should return true', () => {
        assert.isTrue(pathExists('D:\\Temp\\A.js', winPaths))
      }) // #15
    })
  }

  if (isUnixLike) {
    describe('UNIX-like only', () => {
      it('should return true', () => {
        assert.isTrue(pathExists('abc.js', unixPaths))
      }) // #16

      it('should return false', () => {
        assert.isFalse(pathExists('abC.js', unixPaths))
      }) // #17

      it('should return true', () => {
        assert.isTrue(pathExists('/home/user/a.js', unixPaths))
      }) // #18

      it('should return false', () => {
        assert.isFalse(pathExists('/home/user/A.js', unixPaths))
      }) // #19
    })
  }
})
