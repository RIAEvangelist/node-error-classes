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

 const Errors = require('node-error-classes');

 class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    get name(){
        return this.name;
    }

    set name(value){
        if(this.name){
            const err=new Errors.Immutable;

        }

        this.name=value;
        return this.name;
    }
 }

const bob=new User('bob',42);

bob.name='bobby';

 * @example
 *
 * ```sh
 *
 /git/node-error-classes/example/immutable.js:16
    throw err;
         ^

 Immutable: 'user.age' has been defined and cannot be changed on the scope of : 'pupulateUser'.
    Variable names here must be unique

 * ```
 *
 * @method Errors.Immutable.setMessage
 * @param {String} varaibleName name of immutable variable
 * @param {Any} scope     Scope of varaible
 * @returns {String}    compiled error message
 */
    setMessage(varaibleName, scope){
        this.name = 'Immutable';
        this.message = `${util.inspect(varaibleName, {colors: true})} is Immutable and may not be modified. : ${util.inspect(scope, {depth: 5,colors: true})}.
        Variable names here must be unique`;
        return this.message;
    }
}

module.exports = Immutable;
