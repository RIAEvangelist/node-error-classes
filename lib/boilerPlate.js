'use strict';
const util = require('util');

/**
 *
 */
class BoilerPlate extends Error{
    /**
     * [setMessage description]
     * @return {[type]} [description]
     */
    setMessage(variables){
        this.name = 'BoilerPlate';
        this.message = `insert your message and your ${util.inspect(variables, {depth: null, colors: true})} in here!`;
        return this.message;
    }
}

module.exports = BoilerPlate;
