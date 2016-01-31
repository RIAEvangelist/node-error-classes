'use strict';

const Errors = require('../Errors.js');

let piKindOf = 22/7;

function getItRight(){
    if(typeof piKindOf != 'undefined'){
        const err = new Errors.Immutable;
        err.setMessage(
            'piKindOf',
            'global'
        );
        throw err;
    }
    piKindOf = Math.PI;
}

getItRight();
