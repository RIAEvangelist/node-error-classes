'use strict';
const util = require('util');

/**
 *
 */
class Undefined extends Error{
    /**
     * [setMessage description]
     * @return {[type]} [description]
     */
    setMessage(variableName, variable){
        this.name = 'Undefined';
        this.message = `Expected ${util.inspect(variableName, {depth: null, colors: true})} but to be defined or filled but was ${util.inspect(undefined, {depth: null, colors: true})} or empty
        ${util.inspect(typeof variable, {depth: null, colors: true})}`;
        return this.message;
    }
}

module.exports = Undefined;
