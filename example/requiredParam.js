var Errors=require('../Errors.js');

console.log(Errors);

init();

function init(someSocket){
    if(!someSocket){
        throw new Errors.RequiredParameter('someSocket','socket');
    }

    mySocket=someSocket;

    //do sockety stuff
}
