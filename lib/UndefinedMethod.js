'use strict';
const util = require('util');

/**
 * Error for undefined methods
 *
 * @extends Error
 * @class Errors.UndefinedMethod
 * */
class UndefinedMethod extends Error{
    /**
 * @example
 *
     function inverseMatrix(mat){
         if(typeof determinant == 'undefined'){
             const err = new Errors.UndefinedMethod;
             err.setMessage(
                 'inverseMatrix',
                 'inverseMatrix',
                 inverseMatrix
             );
             throw err;
         }
     }

 * @example
 *
 * ```sh
 *
 * git/node-error-classes/example/undefinedMethod.js:13
        throw err;
        ^

    UndefinedMethod: inverseMatrix needs to use inverseMatrix. But it was not set
        requires [Function: inverseMatrix]

 *
 * ```
 *
 * @method Errors.UndefinedMethod.setMessage
 * @param  {Any} scope scope of undefined method
 * @param  {String} methodName      method name
 * @param  {Any} method  method
 * @returns {String}    compiled error message
 */
    setMessage(scope,methodName, method){
        this.name = 'UndefinedMethod';
        this.message = `${scope} needs to use ${methodName}. But it was not set
            requires ${util.inspect(method,{depth:5, colors:true})}`;
        return this.message;
    }
}

module.exports = UndefinedMethod;
