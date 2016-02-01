'use strict';

const Errors = require('../Errors.js');

function populateUser(){
    let user = {
        name : 'Mike',
        age: 99,
    }
    if(typeof user.age != 'undefined'){
        const err = new Errors.Immutable;
        err.setMessage(
            'user.age',
            'pupulateUser'
        );
        throw err;
    }
    user.age = 45;
}

populateUser();
