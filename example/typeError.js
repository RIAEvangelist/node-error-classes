'use strict';

const Errors=require(`${__dirname}/../Errors.js`);

console.log(multiplyNumbers(6,5));

function multiplyNumbers(numberOne,numberTwo){
    let err;
    numberOne=Number(numberOne);
    numberTwo=Number(numberTwo);

    if(numberOne>5){
        err=new Errors.Type;
        err.setMessage(
            'numberOne',
            'String',
            numberOne
        );
        throw err;
    }

    if(numberTwo>10){
        err=new Errors.InvalidParameter;
        err.setMessage(
            'numberTwo',
            'String',
            numberOne
        );
        throw err;
    }

    return numberOne*numberTwo;
}
