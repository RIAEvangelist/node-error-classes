'use strict';
const util = require('util');

/**
 * Error for Immutable variables
 *
 * @extends Error
 * @class Errors.Immutable
 * */
class Immutable extends Error{
    /**
 * @example
 *
 * let piKindOf = 22/7;
 *
 * function getItRight(){
 *     if(typeof piKindOf != 'undefined'){
 *         const err = new Errors.Immutable;
 *         err.setMessage(
 *             'piKindOf',
 *             'global'
 *         );
 *         throw err;
 *     }
 *     piKindOf = Math.PI;
 * }
 *
 * getItRight();
 *
 *
 * @example
 *
 * ```sh
 *
    git/node-error-classes/example/immutable.js:13
         throw err;
         ^

    Immutable: 'piKindOf' has been defined and is Immutable on 'global'.
         Names must be unique

 * ```
 *
 * @method Errors.InvalidParameter.setMessage
 * @param {Any} namespace Name of variable
 * @param {Any} scope     Scope of varaible
 * @returns {String}    compiled error message
 */
    setMessage(namespace, scope){
        this.name = 'Immutable';
        this.message = `${util.inspect(namespace, {depth: null, colors: true})} has been defined and is Immutable on ${util.inspect(scope, {depth: null, colors: true})}.
        Names must be unique`;
        return this.message;
    }
}

module.exports = Immutable;
