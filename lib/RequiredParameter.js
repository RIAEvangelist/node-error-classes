var util = require('util');

/**
 * Error Class RequiredParameter
 * */
function RequiredParameter(name,type) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = [
        'Required parameter {',
        name ,
        '} of type {',
        type,
        '} not provided.'
    ].join('');
}

util.inherits(RequiredParameter, Error);

module.exports = RequiredParameter;
