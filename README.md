# nw-react-boilerplate

This project was bootstrapped with [Create NW.js React App](https://github.com/naviapps/create-nw-react-app)

* Hot Loading
* [react-router-redux](https://github.com/reactjs/react-router-redux)
* [Redux DevTools](https://github.com/gaearon/redux-devtools)
* [webpack](https://webpack.js.org/)
* [ESLint](http://eslint.org/)
* [redux-saga](https://github.com/redux-saga/redux-saga)
* [Flow](https://flow.org/)

## Installation

```bash
git clone --depth 1 https://github.com/naviapps/nw-react-boilerplate my-app
cd my-app
npm install
```

## Start

```bash
npm start
```

## Build

```bash
npm run build
```

### Build settings

package.json

```js
{
  //...
  // See https://github.com/nwjs-community/nw-builder
  "nwBuilder": {
    "platforms": [
      "osx64",
      "win32",
      "win64"
    ],
    "version": "latest", // 0.24.4, 0.25.0 etc.
    "buildDir": "./build",
    "cacheDir": "./cache"
  }
}
```
