'use strict';

const util = require('util');

/**
 *
 * Used for normalizing the message of a type error
 *
* @extends TypeError
* @class Errors.Type
 * */
class Type extends TypeError {
    /**
     * @example
     *
     * let test={a:1,b:0};
     *
     * if(typeof test.b!=='object'){
     *     err=new Errors.Type;
     *     err.setMessage(
     *         'b',
     *         'Object',
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
     * git/node-error-classes/example/typeError.js:19
        throw err;
        ^

        TypeError: 'numberOne' Expects String but got number : 6

        at Type (/home/bmiller/git/node-error-classes/lib/Type.js:12:1)
        at multiplyNumbers (/home/bmiller/git/node-error-classes/example/typeError.js:13:13)

     * ```
     *
     * @method Errors.Type.setMessage
     * @param  {Any} parameterName name of parameter
     * @param  {String}   type       Type String
     * @param  {Any}   value         value that caused error
     * @param  {Any}   [scope]     optional value where the parameter came from like an object or array
     * @returns {String}    compiled error message
     */
    setMessage(parameterName, type, value, scope){
        this.message=`${util.inspect(parameterName,{depth:5,colors:true})} Expects ${type} but got ${typeof value} : ${util.inspect(value,{depth:5,colors:true})}
        ${(scope)?
            `Scope : ${util.inspect(scope,{depth:5,colors:true})}`:
            ''
        }`;
        return this.message;
    }
}

module.exports = Type;
