'use strict';

const util = require('util');

/**
 * Error Class InvalidParameter
 * */
class RequiredParameter extends Error {
    /**
     * sets the error message
     * @method setMessage
     * @param  {Any} parameterName name of parameter
     * @param  {Any} fromValue     optional value where the parameter came from like an object or array
     * @returns {String}    compiled error message
     */
    setMessage(parameterName,fromValue){
        this.name='RequiredParameter';
        this.message=`Expects ${util.inspect(parameterName,{depth:5,colors:true})} to be defined
        ${(fromValue)?util.inspect(fromValue,{depth:5,colors:true}):''}`;
        return this.message;
    }
}

module.exports = RequiredParameter;
