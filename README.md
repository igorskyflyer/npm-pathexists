## PathExists

🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems, using `String` manipulation techniques, read more below. 🗺

<br>

> ⚠ It does **NOT** actually check if the file/directory exists **on the disk**, it only checks if the given path exists in the list of paths. Useful when you have already obtained a list of files/directories and you want to check if a given path is eligible/available to, for example, create a new file at it.

<br>

### Usage

Install it first, by doing:

```shell
npm i "@igor.dvlpr/pathexists"
```

and then...

```js
const {
  pathExists,
  pathExistsWindows,
  pathExistsUnix,
} = require('@igor.dvlpr/pathexists')

const allPaths = ['abc.js', 'etc.bak']
const winPaths = ['D:\\', 'D:\\Temp\\a.js']
const unixPaths = ['/home/user', '/home/user/a.js']

// #1 - host OS dependent mode - uses the appropriate function for each host OS
console.log(pathExists('abc.js', allPaths)) // prints true

// #1 - force Windows mode
console.log(pathExistsWindows('abc.js', allPaths)) // prints true

// #1 - force UNIX-like mode
console.log(pathExistsUnix('abc.js', allPaths)) // prints true

// #2 - force Windows mode
console.log(pathExistsWindows('abC.js', allPaths)) // prints true

// #2 - force UNIX-like mode
console.log(pathExistsUnix('abC.js', allPaths)) // prints false

// #3 - force Windows mode
console.log(pathExistsWindows('D:\\Temp\\A.js', winPaths)) // prints true

// #3 - force UNIX-like mode
console.log(pathExistsUnix('D:\\Temp\\A.js', unixPaths)) // prints false

// #4 - force Windows mode, custom Comparator
console.log(
  pathExistsWindows(
    'Temp',
    winPaths,
    (entry, value) => entry.indexOf(value) > -1
  )
) // prints true

// #4 - force UNIX-like mode, custom Comparator
console.log(
  pathExistsUnix('Temp', unixPaths, (entry, value) => entry.indexOf(value) > -1)
) // prints true
```
