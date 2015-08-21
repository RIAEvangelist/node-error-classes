var util = require('util');
var colors=require('colors');

/**
 * Error Class InvalidParameter
 * */
function InvalidParameter(name,type,min,max,step) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = colors.bgRed.green.bold(this.constructor.name);
    this.message = [
        colors.green(name) ,
        ' must be of type ',
        colors.green(type)
    ].join('');

    if(!min){
        return;
    }

    switch(typeof min){
        case 'number' :
            this.message+=[
                ', must be between :',
                colors.green(
                    [
                        '[',
                        min,
                        '-',
                        max,
                        '] '
                    ].join('')
                )
            ].join('');

            if(step){
                this.message+='and use a step of : '+colors.green(step);
            }

            break;
        case 'object' : //array
            this.message+='must be one of the following discreet values : '+colors.green(min);
            break;
        case 'string' :
            this.message+='must be : '+colors.green(min);
            break;
    }

    this.message=colors.red(this.message);
}
util.inherits(InvalidParameter, Error);

module.exports = InvalidParameter;
