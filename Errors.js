'use strict';

/**
 * # Custom Node and Browser Error Classes
 *
 * ` npm install node-error-classes `
 *
 Easy to read isomorphic, custom and extensible error classes for node.js and the browser that extend the native error classes.

 This will work in the browser too with webpack, browserify, or any other common.js module loader!

 Sometimes, just throwing an error isn't that helpful. Sometimes, handling an error elegantly preventing a crash just isn't quite good enough. During team development there are times when you want to throw explicit errors to both help developers understand whats going on, as well as enforce some strict rules. That is what this module is for.
 *
 *
 * @example
 *
 * 'use strict';
 *
 * Errors=require('node-error-classes');
 *
 * @namespace Errors
 */

const RequiredParameter=require('./lib/RequiredParameter.js');
const InvalidParameter=require('./lib/InvalidParameter.js');
const Type=require('./lib/Type.js');
const SocketUnavailable=require('./lib/SocketUnavailable.js');
const UndefinedValue = require('./lib/UndefinedValue.js');
const InvalidMethod = require('./lib/InvalidMethod.js');
const Immutable = require('./lib/Immutable.js');

exports.RequiredParameter=RequiredParameter;
exports.InvalidParameter=InvalidParameter;
exports.Type=Type;
exports.SocketUnavailable=SocketUnavailable;
exports.UndefinedValue = UndefinedValue;
exports.Immutable=Immutable;
exports.InvalidMethod = InvalidMethod;
