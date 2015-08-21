var util = require('util');
var colors=require('colors');

/**
 * Error Class RequiredParameter
 * */
function RequiredParameter(name,type) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = colors.bgRed.green.bold(this.constructor.name);
    this.message = [
        colors.green(name),
        ' of type ',
        colors.green(type),
        ' not provided.'
    ].join('');

    this.message=colors.red(this.message);
}

util.inherits(RequiredParameter, Error);

module.exports = RequiredParameter;
