# geth-bin [![Build Status](https://travis-ci.org/mastilver/geth-bin.svg?branch=master)](https://travis-ci.org/mastilver/geth-bin)

> Binary wrapper for [geth](https://github.com/ethereum/go-ethereum)


## CLI

```
$ npm install --global geth-bin
```

```
$ geth help
```


## API

```
$ npm install --save geth-bin
```

```js
const execFile = require('child_process').execFile;
const geth = require('geth-bin');

execFile(geth, ['version'], (err, stdout) => {
	console.log(stdout);
});
```


## License

MIT © [Thomas Sileghem](http://mastilver.com)
