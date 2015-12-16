'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');

var BASE = 'https://github.com/ethereum/go-ethereum/releases/download/v1.3.2/';

module.exports = new BinWrapper()
	.src(BASE + 'geth-Linux64-20151125145000-1.3.2-5490437.tar.bz2', 'linux')
	.src(BASE + 'Geth-Win64-20151125103701-1.3.2-5490437.zip', 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'geth.exe' : 'geth');
