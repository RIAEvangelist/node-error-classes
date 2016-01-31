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

      let piKindOf = 22/7;

      function getItRight(){
          if(typeof piKindOf != 'undefined'){
              const err = new Errors.Immutable;
              err.setMessage(
                  'piKindOf',
                  'global'
              );
              throw err;
          }
          piKindOf = Math.PI;
      }

      getItRight();


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
 * @method Errors.Immutable.setMessage
 * @param {Any} varaibleName Name of variable
 * @param {Any} scope     Scope of varaible
 * @returns {String}    compiled error message
 */
    setMessage(varaibleName, scope){
        this.name = 'Immutable';
        this.message = `${util.inspect(varaibleName, {depth: null, colors: true})} has been defined and cannot be changed on the scope of : ${util.inspect(scope, {depth: null, colors: true})}.
        Variable names here must be unique`;
        return this.message;
    }
}

module.exports = Immutable;
