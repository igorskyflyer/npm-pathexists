import { assert as chai } from 'chai'
import { platform } from 'os'
import { pathExists, pathExistsUnix, pathExistsWindows } from '../src/main.js'

const os = platform()
const isWindows = os === 'win32'
const isUnixLike = os === 'linux' || os === 'darwin'
const winPaths = ['abc.js', 'etc.bak', 'D:\\', 'D:\\Temp\\a.js']
const unixPaths = ['abc.js', 'etc.bak', '/home/user', '/home/user/a.js']

describe('🧪 path-exists tests 🧪', () => {
  describe('all', () => {
    it('should return false', () => {
      chai.isFalse(pathExists('abc', []))
    }) // #1

    it('should return true', () => {
      chai.isTrue(pathExists('a', ['b', 'a', 'c']))
    }) // #2

    it('should return false', () => {
      chai.isFalse(pathExists('d', ['b', 'a', 'c']))
    }) // #3

    it('should return true', () => {
      chai.isTrue(pathExistsWindows('abc.js', winPaths))
    }) // #4

    it('should return true', () => {
      chai.isTrue(pathExistsWindows('abC.js', winPaths))
    }) // #5

    it('should return true', () => {
      chai.isTrue(pathExistsWindows('D:\\Temp\\a.js', winPaths))
    }) // #6

    it('should return true', () => {
      chai.isTrue(pathExistsWindows('D:\\Temp\\A.js', winPaths))
    }) // #7

    it('should return true', () => {
      chai.isTrue(pathExistsUnix('abc.js', unixPaths))
    }) // #8

    it('should return false', () => {
      chai.isFalse(pathExistsUnix('abC.js', unixPaths))
    }) // #9

    it('should return true', () => {
      chai.isTrue(pathExistsUnix('/home/user/a.js', unixPaths))
    }) // #10

    it('should return false', () => {
      chai.isFalse(pathExistsUnix('/home/user/A.js', unixPaths))
    }) // #11
  })

  if (isWindows) {
    describe('Windows only', () => {
      it('should return true', () => {
        chai.isTrue(pathExists('abc.js', winPaths))
      }) // #12

      it('should return true', () => {
        chai.isTrue(pathExists('abC.js', winPaths))
      }) // #13

      it('should return true', () => {
        chai.isTrue(pathExists('D:\\Temp\\a.js', winPaths))
      }) // #14

      it('should return true', () => {
        chai.isTrue(pathExists('D:\\Temp\\A.js', winPaths))
      }) // #15
    })
  }

  if (isUnixLike) {
    describe('UNIX-like only', () => {
      it('should return true', () => {
        chai.isTrue(pathExists('abc.js', unixPaths))
      }) // #16

      it('should return false', () => {
        chai.isFalse(pathExists('abC.js', unixPaths))
      }) // #17

      it('should return true', () => {
        chai.isTrue(pathExists('/home/user/a.js', unixPaths))
      }) // #18

      it('should return false', () => {
        chai.isFalse(pathExists('/home/user/A.js', unixPaths))
      }) // #19
    })
  }
})
