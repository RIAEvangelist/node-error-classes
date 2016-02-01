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
    function populateUser() {
        let user = {
            name: 'Mike',
            age: 99,
        }
        if (typeof user.age != 'undefined') {
            const err = new Errors.Immutable;
            err.setMessage(
                'user.age',
                'pupulateUser'
            );
            throw err;
        }
        user.age = 45;
    }

 populateUser();
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
 * @param {String} varaibleName Name of variable
 * @param {Any} scope     Scope of varaible
 * @returns {String}    compiled error message
 */
    setMessage(varaibleName, scope){
        this.name = 'Immutable';
        this.message = `${util.inspect(varaibleName, {colors: true})} has been defined and cannot be changed on the scope of : ${util.inspect(scope, {depth: 5,colors: true})}.
        Variable names here must be unique`;
        return this.message;
    }
}

module.exports = Immutable;
