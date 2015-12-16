'use strict';
var log = require('logalot');
var bin = require('./');

bin.run(['version'], function (err) {
	if (err) {
		log.error(err.message);
		log.error('geth binary test failed');
		return;
	}

	log.success('geth binary test passed successfully');
});
