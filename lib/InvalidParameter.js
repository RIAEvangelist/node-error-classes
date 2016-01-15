'use strict';

const util = require('util');

/**
 * Error Class InvalidParameter
 * */
class InvalidParameter extends Error {
    /**
     * sets the error message
     * @method set
     * @param  {Any} parameterName name of parameter
     * @param  {Any} expected      what it expected
     * @param  {Any} got           what it got
     * @param  {Any} fromValue     optional value where the parameter came from like an object or array
     * @returns {String}    compiled error message
     */
    setMessage(parameterName,expected,got,fromValue){
        this.name='InvalidParameter';
        this.message=`${util.inspect(parameterName,{depth:5,colors:true})} Expects ${util.inspect(expected,{depth:5,colors:true})} but got ${util.inspect(got,{depth:5,colors:true})}
        ${(fromValue)?util.inspect(fromValue,{depth:5,colors:true}):''}`;
        return this.message;
    }
}

module.exports = InvalidParameter;
