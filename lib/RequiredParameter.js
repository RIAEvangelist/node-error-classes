'use strict';

const util = require('util');

/**
* @extends Error
* @class Errors.RequiredParameter
 * */
class RequiredParameter extends Error {
    /**
     * @example
     *
     * let test={a:1,b:0};
     *
     * if(!test.c){
     * 		err=new Errors.RequiredParameter;
     *   	err.setMessage(
     *     		'c',
     *       	test
     *        );
     *        throw err;
     * }
     *
     * @method Errors.RequiredParameter.setMessage
     * @param  {Any} parameterName name of parameter
     * @param  {Any} [fromValue]     optional value where the parameter came from like an object or array
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
