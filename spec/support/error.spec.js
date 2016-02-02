'use strict';

const Errors=require('../../Errors.js');
const ipc=require('node-ipc');

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

    it(
        'should throw SocketUnavailable Error',
        badSocket
    );

    it(
        'should throw Immutable Error',
        immutable
    );

    it(
        'should throw invalid method Error',
        invalidMethod
    );

    it(
        'should throw undefined value Error',
        undefinedValue
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

function badSocket(done){
    let err=null;
    let error={};
    ipc.config.id   = 'hello';
    ipc.config.maxRetries = 0;
    ipc.config.silent=true;

    ipc.connectTo(
        'world',
        function(){
            ipc.of.world.on(
                'destroy',
                function(data){
                    err=new Errors.SocketUnavailable;
                    err.setMessage(
                        ipc.of.world.path
                    );

                    try{
                        throw err;
                    }catch(err){
                        error=err;
                    }

                    expect(error.name).toBe('SocketUnavailable');
                    done();
                }
            );
        }
    );
}

function immutable(done){
    const err=new Errors.Immutable;
    let error=null;

    err.setMessage(
        'testError'
    );

    try{
        throw err;
    }catch(err){
        error=err;
    }

    expect(error.name).toBe('Immutable');

    done();
}

function invalidMethod(done){
    const err=new Errors.InvalidMethod;
    let error=null;

    err.setMessage(
        'testError'
    );

    try{
        throw err;
    }catch(err){
        error=err;
    }

    expect(error.name).toBe('InvalidMethod');

    done();
}

function undefinedValue(done){
    const err=new Errors.UndefinedValue;
    let error=null;

    err.setMessage(
        'testError'
    );

    try{
        throw err;
    }catch(err){
        error=err;
    }

    expect(error.name).toBe('UndefinedValue');

    done();
}
