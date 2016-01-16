'use strict';

const util = require('util');

/**
 * Error Class InvalidParameter
 * */
class Type extends TypeError {
    /**
     * sets the error message
     * @method set
     * @param  {Any} parameterName name of parameter
     * @param  {String}   type       Type String
     * @param  {Any}   value         value that caused error
     * @param  {Any}   fromValue     optional value where the parameter came from like an object or array
     * @returns {String}    compiled error message
     */
    setMessage(parameterName, type, value, fromValue){
        this.message=`${util.inspect(parameterName,{depth:5,colors:true})} Expects ${type} but got ${typeof value} : ${util.inspect(value,{depth:5,colors:true})}
        ${(fromValue)?util.inspect(fromValue,{depth:5,colors:true}):''}`;
        return this.message;
    }
}

module.exports = Type;
