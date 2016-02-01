'use strict';

const util = require('util');

/**
 * Error for when an expected socket is not available
 *
 * @extends Error
 * @class Errors.SocketUnavailable
 * */
class SocketUnavailable extends Error {
    /**
     * @example

        const ipc=require('node-ipc');
        const Errors=require('node-error-classes');
        ipc.config.id   = 'hello';
        ipc.config.maxRetries = 3;
        ipc.config.silent=true;

        ipc.connectTo(
            'world',
            function(){
                ipc.of.world.on(
                    'destroy',
                    function(data){
                        const err=new Errors.SocketUnavailable;
                        err.setMessage(
                            ipc.of.world.path,
                            ipc.of.world
                        );
                        throw err;
                    }
                );
            }
        );

     *
     * @example
     *
     * ```sh
     *
        git/node-error-classes/example/socketUnavailable.js:19
                throw err;
                ^

        SocketUnavailable: Socket of '/tmp/app.world' Unavailable

        at SocketUnavailable (/home/bmiller/git/node-error-classes/lib/SocketUnavailable.js:11:1)
        at Object.<anonymous> (/home/bmiller/git/node-error-classes/example/socketUnavailable.js:14:27)
        at Object.pub (/home/bmiller/git/node-error-classes/node_modules/node-ipc/node_modules/event-pubsub/event-pubsub.js:69:19)
        at Object.trigger (/home/bmiller/git/node-error-classes/node_modules/node-ipc/node_modules/event-pubsub/event-pubsub.js:111:21)
        at Socket.connectionClosed (/home/bmiller/git/node-error-classes/node_modules/node-ipc/dao/client.js:157:24)
        at emitOne (events.js:77:13)
        at Socket.emit (events.js:169:7)
        at Pipe._onclose (net.js:469:12)

     *
     * ```
     *
     * @method Errors.SocketUnavailable.setMessage
     * @param  {Any} socketPath name of parameter
     * @param  {Any} [scope]     optional value with information on the socket or constructor
     * @returns {String}    compiled error message
     */
    setMessage(socketPath,scope){
        this.name='SocketUnavailable';
        this.message=`Socket of ${util.inspect(socketPath,{depth:5, colors:true})} Unavailable
        ${(scope)?
            `Scope : ${util.inspect(scope,{depth:5,colors:true})}`:
            ''
        }`;
        return this.message;
    }
}

module.exports = SocketUnavailable;
