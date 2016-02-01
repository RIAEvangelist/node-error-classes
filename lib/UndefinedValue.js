'use strict';
const util = require('util');

/**
 * Error for undefined values
 *
 * @extends Error
 * @class Errors.UndefinedValue
 * */
class UndefinedValue extends Error{
    /**
   * @example
   *
   *if(!importantPassword){
       const err = new Errors.Undefined;
       err.setMessage(
           'importantPassword',
           importantPassword
       );
       throw err;
   }
   *
   * @example
   *
   * ```sh
    git/node-error-classes/example/undefined.js:14
        throw err;
         ^

    Undefined: Expected 'importantPassword' but to be defined or filled but was undefined or empty
        'undefined'

   * ```
   *
   * @method Errors.UndefinedValue.setMessage
   * @param  {String} variableName name of variable
   * @param  {Any} variable      value of varible
   * @returns {String}    compiled error message
   */
    setMessage(variableName, variable){
        this.name = 'Undefined';
        this.message = `${util.inspect(typeof variable, {colors: true})}`;
        return this.message;
    }
}

module.exports = UndefinedValue;
