'use strict';

const Errors = require('../Errors.js');

const importantPassword = process.env.IMPORTANT_PASSWORD;

function displayImportantPassword(){
    if(!importantPassword){
        const err = new Errors.UndefinedValue;
        err.setMessage(
            'importantPassword',
            importantPassword
        );
        throw err;
    }
    console.log(`Dont forget this importantPassword: ${importantPassword}, don't!!!`);
}

displayImportantPassword();
