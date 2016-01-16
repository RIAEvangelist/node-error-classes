'use strict';

const Errors=require('../../Errors.js');

describe(
    'All errors should be thrown appropriately',
    describeErrorsTests
);

function describeErrorsTests(){
    it(
        'should throw Required Parameter Error',
        requiredParam
    );

    it(
        'should throw Invalid Parameter Error',
        invalidParam
    );

    it(
        'should throw Type Error',
        type
    );
}

function requiredParam(done){
    const err=new Errors.RequiredParameter;
    err.setMessage('testError');

    let error={};

    try{
        throw err;
    }catch(err){
        error=err;
    }

    expect(error.name).toBe('RequiredParameter');

    err.setMessage('testError',{a:'testError'});

    try{
        throw err;
    }catch(err){
        error=err;
    }

    expect(error.name).toBe('RequiredParameter');

    done();
}

function invalidParam(done){
    const err=new Errors.InvalidParameter;
    err.setMessage(
        'testError',
        '0 || 1',
        1
    );

    let error={};

    try{
        throw err;
    }catch(err){
        error=err;
    }

    expect(error.name).toBe('InvalidParameter');

    err.setMessage(
        'testError',
        '0 || 1',
        1,
        {a:1}
    );

    try{
        throw err;
    }catch(err){
        error=err;
    }

    expect(error.name).toBe('InvalidParameter');

    done();
}

function type(done){
    const err=new Errors.Type;
    err.setMessage(
        'testError',
        'String',
        12
    );

    let error={};

    try{
        throw err;
    }catch(err){
        error=err;
    }

    expect(error.name).toBe('TypeError');

    err.setMessage(
        'testError',
        'String',
        12,
        {a:12}
    );

    try{
        throw err;
    }catch(err){
        error=err;
    }

    expect(error.name).toBe('TypeError');

    done();
}
