'use strict';
const util = require('util');

/**
 * Error for whatever you want!
 *
 * @extends Error
 * @class Errors.BoilerPlate
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
    setMessage(param1, param2, scope){
        this.name = 'New Error';
        this.message = `Say something about ${util.inspect(param1, {depth: 5, colors: true})} here and something about ${util.inspect(param2, {depth: 5, colors: true})}.
        There.
        ${util.inspect(scope, {depth: 5, colors: true})} `;
        return this.message;
    }
}

module.exports = BoilerPlate;
