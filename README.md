---
[![npm version](https://badge.fury.io/js/malta-jest.svg)](http://badge.fury.io/js/malta-jest)
[![npm downloads](https://img.shields.io/npm/dt/malta-jest.svg)](https://npmjs.org/package/malta-jest)
[![npm downloads](https://img.shields.io/npm/dm/malta-jest.svg)](https://npmjs.org/package/malta-jest)  
---  

This plugin can be used on: **.js** files and even on **.coffee** and **.ts** files after using the right plugin  

The plugin will run `jest` on target files

### Options

- __argz__  
the args for jest-cli


Sample usage:  
```
malta app/src/index.js dist/js -plugins=malta-jest[argz:'tests/index.test.js']
```
or in the .json file :  
```
"source/*.js" : "dist -plugins=malta-jest[argz:'tests/index.test.js']"
"source/tests/*.js" : "tests -plugins=malta-jest[argz:'tests/index.test.js']"
```
