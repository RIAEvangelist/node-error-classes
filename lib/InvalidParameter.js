'use strict';

const util = require('util');

/**
 * Error for invalid parameters
 *
 * @extends Error
 * @class Errors.InvalidParameter
 * */
class InvalidParameter extends Error {
    /**
     * @example
     *
     * let test={a:1,b:0};
     *
     * if(test.b<1){
     *     err=new Errors.InvalidParameter;
     *     err.setMessage(
     *         'b',
     *         'a value greater than 0',
     *         test.b,
     *         test
     *     );
     *     throw err;
     * }
     *
     * @example
     *
     * ```sh
     *
     * git/node-error-classes/example/invalidParam.js:19
        throw err;
        ^

        InvalidParameter: 'b' Expects 'a value greater than 0' but got 0

        at InvalidParameter (/home/bmiller/git/node-error-classes/lib/InvalidParameter.js:11:1)
        at multiplyNumbers (/home/bmiller/git/node-error-classes/example/invalidParam.js:13:13)
     *
     * ```
     *
     * @method Errors.InvalidParameter.setMessage
     * @param  {Any} parameterName name of parameter
     * @param  {Any} expected      what it expected
     * @param  {Any} got           what it got
     * @param  {Any} [scope]     optional value where the parameter came from like an object or array
     * @returns {String}    compiled error message
     */
    setMessage(parameterName,expected,got,scope){
        this.name='InvalidParameter';
        this.message=`${util.inspect(parameterName,{depth:5,colors:true})} Expects ${util.inspect(expected,{depth:5,colors:true})} but got ${util.inspect(got,{depth:5,colors:true})}
        ${(scope)?
            `Scope : ${util.inspect(scope,{depth:5,colors:true})}`:
            ''
        }`;
        return this.message;
    }
}

module.exports = InvalidParameter;
