'use strict';

const Errors = require('../Errors.js');

class User{
   constructor(name,age){
       Object.defineProperties(
           this,
           {
               age:{
                   enumerable:true,
                   writable:true,
                   value:age
               },
               name:{
                   enumerable:true,
                   get:getName,
                   set:setName
               }
           }
       );

       let userName=null;

       function getName(){
           return userName;
       }

       function setName(value){
           if(userName){
               const err=new Errors.Immutable;
               err.setMessage(
                   'name',
                   this
               );

               throw err;
           }
           userName=value;
           return userName;
       }

       if(name){
           this.name=name;
       }
   }
}

const bob=new User('bob',42);

bob.name='bob';
