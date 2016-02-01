'use strict';

const Errors = require('../Errors.js');

class User{
   constructor(name,age){
       this.name=name;
       this.age=age;
   }
}

const bob=new User('bob',42);

if(!bob.getInfo || typeof bob.getInfo !== 'function'){
   const err=new Errors.InvalidMethod;

   err.setMessage(
       'getInfo',
       bob.getInfo,
       bob
   );

   throw err;
}
