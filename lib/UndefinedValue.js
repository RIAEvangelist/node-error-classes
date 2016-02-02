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
   *
    const Errors = require('node-error-classes');

    const user={
       name:'bob'
    }

    if(!user.age){
      const err = new Errors.UndefinedValue;
      err.setMessage(
          'age',
          user.age,
          user
      );
      throw err;
    }
   *
   * @example
   *
   * ```sh
   *
    git/node-error-classes/example/undefinedValue.js:14
       throw err;
       ^

    Undefined: 'string'

   * ```
   *
   * @method Errors.UndefinedValue.setMessage
   * @param  {String} variableName      varible name
   * @param  {Any} variable      varible
   * @param  {Any} [scope]      scope in which the variable should exist
   * @returns {String}    compiled error message
   */
    setMessage(variableName,variable,scope){
        this.name = 'UndefinedValue';
        this.message = `Expects ${util.inspect(variableName, {colors: true})} to be defined but got ${util.inspect(variable, {colors: true})}
        ${(scope)?
            `Scope : ${util.inspect(scope,{depth:5,colors:true})}`:
            ''
        }`;
        return this.message;
    }
}

module.exports = UndefinedValue;
