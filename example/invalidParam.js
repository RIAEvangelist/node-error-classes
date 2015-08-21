var Errors=require('../Errors.js');

var bigNum=multiplyNumbers(3,200);

function multiplyNumbers(numberOne,numberTwo){
    numberOne=Number(numberOne);
    numberTwo=Number(numberTwo);

    if(!numberOne){//catches NaN
        throw new Errors.InvalidParameter(
            'numberOne',
            'number'
        );
    }
    if(!numberTwo || numberTwo>10 || numberTwo<1){
        throw new Errors.InvalidParameter(
            'numberTwo',
            'number',
            1,10,
            1
        );
    }
    if(numberTwo && numberTwo % 1){ //detects float (non-whole number like 1.25)
        throw new Errors.InvalidParameter(
            'numberTwo',
            'number',
            1,10,
            1
        );
    }

    return a*b;
}
