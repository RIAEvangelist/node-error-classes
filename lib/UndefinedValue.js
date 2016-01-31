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
   console.log(`Dont forget this importantPassword: ${importantPassword}, don't!!!`);
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
   * @param  {Any} variableName name of variable
   * @param  {Any} variable      value of varible
   * @returns {String}    compiled error message
   */
    setMessage(variableName, variable){
        this.name = 'Undefined';
        this.message = `Expected ${util.inspect(variableName, {colors: true})} but to be defined or filled but was ${util.inspect(undefined, {depth: null, colors: true})} or empty
        ${util.inspect(typeof variable, {depth: null, colors: true})}`;
        return this.message;
    }
}

module.exports = UndefinedValue;
