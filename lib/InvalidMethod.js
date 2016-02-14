'use strict';
const util = require('util');

/**
 * Error for methods which are either undefined or not methods (functions)
 *
 * @extends Error
 * @class Errors.InvalidMethod
 * */
class InvalidMethodError extends Error{
    /**
     * @example
     *
     *
         const Errors = require('node-error-classes');

         class User{
            constructor(name,age){
                this.name=name;
                this.age=age;
            }
         }

        const bob=new User('bob',42);

        if(!bob.getInfo || typeof bob.getInfo !== 'function'){
            const err=new Errors.InvalidMethod;
            err.setMessage('getInfo',bob.getInfo,bob);
        }

     * @example
     *
     * ```sh
     *
     * Uncaught InvalidMethod: Expects "getInfo" to be Function but got undefined
            Scope : {
    "name": "bob",
    "age": 42
}

     *
     * ```
     *
     * @method Errors.InvalidMethod.setMessage
     * @param  {String} methodName      method name
     * @param  {Any} method  expected method
     * @param  {Any} [scope] scope in which the invalid method is expected
     * @returns {String}    compiled error message
     */
    setMessage(methodName, method, scope){
        this.name = 'InvalidMethod';
        this.message = `Expects ${util.inspect(methodName,{depth:5, colors:true})} to be Function but got ${util.inspect(method,{depth:5, colors:true})}
            ${(scope)?
                `Scope : ${util.inspect(scope,{depth:5,colors:true})}`:
                ''
            }`;
        return this.message;
    }
}

module.exports = InvalidMethod;
