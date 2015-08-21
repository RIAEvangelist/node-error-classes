# Custom Node Error Classes
Easy to read custom error classes for node.js 

Sometimes, just throwing an error isn't that helpful. Sometimes, handling an error elegantly preventing a crash just isn't quite strong enough. During team development there are times when you want to throw explicit errors to both help developers understand whats going on, as well as enforce some strict rules. That is what this module is for.

If there are more errors you would like to see, create an issue, or fork and contribute. Share the love!

![node-error-classes](https://raw.githubusercontent.com/RIAEvangelist/node-error-classes/master/screenshot.png)

## Errors Currently supported

#### Required Parameter
This error is useful when you have a required parameter for a function that you can not default if not present. **It does not validate the type, that is only there to help the developer who caused the error.**

|argument|type|description|
|---|---|---|
|name|string / number|name of the missing param.|
|type|string|type of the parameter just a courtesy to the developer that caused the error. Can be any string, not just official JS types.|

example :
    
    var Errors=require('node-error-classes');
    
    var mySocket=false;
        
    function init(someSocket){
        if(!someSocket){
            throw new Errors.RequiredParameter('someSocket','socket');
        }

        mySocket=someSocket;

        //do sockety stuff
    }

    function updateSocket(data){
        if(!data){
            throw new Errors.RequiredParameter('data','object');
        }

        //do sockety stuff
    }
  
---

#### Invalid Parameter
This error helps when you have a value that must be in a specific range or descreet value.

|argument|type|description|
|---|---|---|
|name|string / number|name of the missing param.|
|type|string|type of the parameter just a courtesy to the developer that caused the error. Can be any string, not just official JS types.|
|min|number / array / string|optional. If a number is passed the parameter will be treated as a range. If an array, the parameter will be treated as a set of discreet values. If a string, the string will be displayed.|
|max|number|If min is a number this is required. Upper end of the parameters range, only used if min is a number|
|step|number|optional. The valid step between the range min and max. Only used if min is a number|

example :
    
    var Errors=require('node-error-classes');
    
    function multiplyNumbers(numberOne,numberTwo){
        numberOne=Number(numberOne);
        numberTwo=Number(numberTwo);

        if(!numberOne){//catches NaN
            throw new Errors.InvalidParameter(
                'numberOne',
                'number'
            );
        }
        if(!numberTwo || numberTwo>10 || numberTwo<1){
            throw new Errors.InvalidParameter(
                'numberTwo',
                'number',
                1,10,
                1
            );
        }
        if(numberTwo && numberTwo % 1){ //detects float (non-whole number like 1.25)
            throw new Errors.InvalidParameter(
                'numberTwo',
                'number',
                1,10,
                1
            );
        }

        return a*b;
    }
