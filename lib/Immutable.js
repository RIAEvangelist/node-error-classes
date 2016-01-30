'use strict';
const util = require('util');

/**
 *
 */
class Immutable extends Error{
    /**
     * [setMessage description]
     * @return {[type]} [description]
     */
    setMessage(namespace, id){
        this.name = 'Immutable';
        this.message = `${util.inspect(namespace, {depth: null, colors: true})} has been defined and is Immutable on ${util.inspect(id, {depth: null, colors: true})}.
        Names must be unique`;
        return this.message;
    }
}

module.exports = Immutable;
