<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-pathexists/main/media/pathexists.png" alt="Icon of PathExists" width="256" height="256">
  <h1>PathExists</h1>
</div>

<br>

<h4 align="center">
  🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems, using <code>String</code> manipulation techniques. 🗺
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🖥 OS‑aware checks - Adapts comparison rules for Windows or UNIX‑like systems
- 🔍 Path lookup - Quickly finds if a path exists in a given list
- 🛡 Case handling - Case‑insensitive on Windows, case‑sensitive on UNIX‑like
- ⚙️ Custom comparator - Plug in your own matching logic when needed
- 🔄 Reusable helpers - Separate functions for Windows, UNIX, and auto‑detect modes
- 📦 Lightweight - Minimal code, no heavy dependencies
- 🌍 Cross‑platform - Works consistently across different operating systems

<br>

> ⚠️ **WARNING**
>
> It does **NOT** actually check if the file/directory exists **on the disk**, it only checks if the given path exists in the list of paths. Useful when you have already obtained a list of files/directories and you want to check if a given path is eligible/available to, for example, create a new file at it.
>

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/pathexists
```

```bash
yarn add @igorskyflyer/pathexists
```

```bash
npm i @igorskyflyer/pathexists
```

<br>
<br>

## 🤹🏼 API

```ts
import { pathExists, pathExistsWindows, pathExistsUnix } from '@igorskyflyer/pathexists'

const allPaths: string[] = ['abc.js', 'etc.bak']
const winPaths: string[] = ['D:\\', 'D:\\Temp\\a.js']
const unixPaths: string[] = ['/home/user', '/home/user/a.js']

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
console.log(pathExistsWindows('Temp', winPaths, (entry, value) => entry.indexOf(value) > -1)) // prints true

// #4 - force UNIX-like mode, custom Comparator
console.log(pathExistsUnix('Temp', unixPaths, (entry, value) => entry.indexOf(value) > -1)) // prints true
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-pathexists/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-pathexists/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/adblock-header-extract](https://www.npmjs.com/package/@igorskyflyer/adblock-header-extract)

> _✂️ An npm module that provides ways to extract header and metadata from an Adblock filter file. 📃_

<br>

[@igorskyflyer/upath](https://www.npmjs.com/package/@igorskyflyer/upath)

> _🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬_

<br>

[@igorskyflyer/uarray](https://www.npmjs.com/package/@igorskyflyer/uarray)

> _🎉 Provides UArray, an Array type that supports negative indices/indexes, just wrap your regular JavaScript array with UArray() and you are all set! 🙌_

<br>

[@igorskyflyer/git-repo-url](https://www.npmjs.com/package/@igorskyflyer/git-repo-url)

> _🌐 Gets the origin URL a local Git repository. 🗺️_

<br>

[@igorskyflyer/unc-path](https://www.npmjs.com/package/@igorskyflyer/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
