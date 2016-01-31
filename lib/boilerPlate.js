'use strict';
const util = require('util');

/**
 * Error for whatever you want!
 *
 * @extends Error
 * @class Errors.CoolStuff
 * */
class BoilerPlate extends Error{
    /**
 * @example

        put your example here


 * @example
 *
 * ```sh
 *
        and the output here

 * ```
 *
 *
 */
    setMessage(param1, param2){
        this.name = 'New Error';
        this.message = `Say something about ${util.inspect(param1, {depth: null, colors: true})} here and something about ${util.inspect(param2, {depth: null, colors: true})}.
        There`;
        return this.message;
    }
}

module.exports = BoilerPlate;
