#!/usr/bin/env node

// This file was created to facilitate solidity test coverage using openzeppelin-test-environment
// https://github.com/OpenZeppelin/openzeppelin-test-environment/issues/21
const { runCoverage } = require('@openzeppelin/test-environment');

runCoverage([], 'yarn run compile', './node_modules/.bin/mocha --exit --timeout 10000 --recursive'.split(' '));