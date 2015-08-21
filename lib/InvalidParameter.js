var util = require('util');

/**
 * Error Class InvalidParameter
 * */
function InvalidParameter(name,type,min,max,step) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = [
        'Invalid parameter {',
        name ,
        '} must be of type {',
        type,
        '}'
    ].join('');

    if(!min){
        return;
    }

    switch(typeof min){
        case 'number' :
            this.message+=[
                ', must be between : [',
                min,
                '-',
                max,
                '] '
            ].join('');

            if(step){
                this.message+='and use a step of : '+step;
            }

            break;
        case 'object' : //array
            this.message+='must be one of the following discreet values : '+min;
            break;
        case 'string' :
            this.message+='must be : '+min;
            break;
    }
}
util.inherits(InvalidParameter, Error);

module.exports = InvalidParameter;
