<a name="Errors"></a>
## Errors : <code>object</code>
# Custom Node Error Classes

` npm install node-error-classes `

 Easy to read custom and extensible error classes for node.js that extend the native error classes.

 Sometimes, just throwing an error isn't that helpful. Sometimes, handling an error elegantly preventing a crash just isn't quite good enough. During team development there are times when you want to throw explicit errors to both help developers understand whats going on, as well as enforce some strict rules. That is what this module is for.

**Kind**: global namespace  
**Example**  
```javascript
'use strict';

Errors=require('node-error-classes');
```

* [Errors](#Errors) : <code>object</code>
    * [.InvalidParameter](#Errors.InvalidParameter) ⇐ <code>Error</code>
        * [new InvalidParameter()](#new_Errors.InvalidParameter_new)
        * [.setMessage(parameterName, expected, got, [fromValue])](#Errors.InvalidParameter.setMessage) ⇒ <code>String</code>
    * [.RequiredParameter](#Errors.RequiredParameter) ⇐ <code>Error</code>
        * [new RequiredParameter()](#new_Errors.RequiredParameter_new)
        * [.setMessage(parameterName, [fromValue])](#Errors.RequiredParameter.setMessage) ⇒ <code>String</code>
    * [.Type](#Errors.Type) ⇐ <code>TypeError</code>
        * [new Type()](#new_Errors.Type_new)
        * [.setMessage(parameterName, type, value, fromValue)](#Errors.Type.setMessage) ⇒ <code>String</code>

<a name="Errors.InvalidParameter"></a>
### Errors.InvalidParameter ⇐ <code>Error</code>
**Kind**: static class of <code>[Errors](#Errors)</code>  
**Extends:** <code>Error</code>  

* [.InvalidParameter](#Errors.InvalidParameter) ⇐ <code>Error</code>
    * [new InvalidParameter()](#new_Errors.InvalidParameter_new)
    * [.setMessage(parameterName, expected, got, [fromValue])](#Errors.InvalidParameter.setMessage) ⇒ <code>String</code>

<a name="new_Errors.InvalidParameter_new"></a>
#### new InvalidParameter()
Error for invalid parameters

<a name="Errors.InvalidParameter.setMessage"></a>
#### InvalidParameter.setMessage(parameterName, expected, got, [fromValue]) ⇒ <code>String</code>
**Kind**: static method of <code>[InvalidParameter](#Errors.InvalidParameter)</code>  
**Returns**: <code>String</code> - compiled error message  

| Param | Type | Description |
| --- | --- | --- |
| parameterName | <code>Any</code> | name of parameter |
| expected | <code>Any</code> | what it expected |
| got | <code>Any</code> | what it got |
| [fromValue] | <code>Any</code> | optional value where the parameter came from like an object or array |

**Example**  
```javascript
let test={a:1,b:0};

if(test.b<1){
    err=new Errors.InvalidParameter;
    err.setMessage(
        'b',
        'a value greater than 0',
        test.b,
        test
    );
    throw err;
}
```
**Example**  
```sh

git/node-error-classes/example/invalidParam.js:19
        throw err;
        ^

        InvalidParameter: 'numberOne' Expects 'a value less than 5' but got 6

        at InvalidParameter (/home/bmiller/git/node-error-classes/lib/InvalidParameter.js:11:1)
        at multiplyNumbers (/home/bmiller/git/node-error-classes/example/invalidParam.js:13:13)

```
<a name="Errors.RequiredParameter"></a>
### Errors.RequiredParameter ⇐ <code>Error</code>
**Kind**: static class of <code>[Errors](#Errors)</code>  
**Extends:** <code>Error</code>  

* [.RequiredParameter](#Errors.RequiredParameter) ⇐ <code>Error</code>
    * [new RequiredParameter()](#new_Errors.RequiredParameter_new)
    * [.setMessage(parameterName, [fromValue])](#Errors.RequiredParameter.setMessage) ⇒ <code>String</code>

<a name="new_Errors.RequiredParameter_new"></a>
#### new RequiredParameter()
error for required params that are not set or passed

<a name="Errors.RequiredParameter.setMessage"></a>
#### RequiredParameter.setMessage(parameterName, [fromValue]) ⇒ <code>String</code>
**Kind**: static method of <code>[RequiredParameter](#Errors.RequiredParameter)</code>  
**Returns**: <code>String</code> - compiled error message  

| Param | Type | Description |
| --- | --- | --- |
| parameterName | <code>Any</code> | name of parameter |
| [fromValue] | <code>Any</code> | optional value where the parameter came from like an object or array |

**Example**  
```javascript
let test={a:1,b:0};

if(!test.c){
    err=new Errors.RequiredParameter;
    err.setMessage(
        'c',
        test
    );
    throw err;
}
```
**Example**  
```sh

git/node-error-classes/example/requiredParam.js:17
        throw err;
        ^

        RequiredParameter: Expects 'numberOne' to be defined

        at RequiredParameter (/home/bmiller/git/node-error-classes/lib/RequiredParameter.js:12:1)
        at multiplyNumbers (/home/bmiller/git/node-error-classes/example/requiredParam.js:13:13)
```
<a name="Errors.Type"></a>
### Errors.Type ⇐ <code>TypeError</code>
**Kind**: static class of <code>[Errors](#Errors)</code>  
**Extends:** <code>TypeError</code>  

* [.Type](#Errors.Type) ⇐ <code>TypeError</code>
    * [new Type()](#new_Errors.Type_new)
    * [.setMessage(parameterName, type, value, fromValue)](#Errors.Type.setMessage) ⇒ <code>String</code>

<a name="new_Errors.Type_new"></a>
#### new Type()
Used for normalizing the message of a type error

<a name="Errors.Type.setMessage"></a>
#### Type.setMessage(parameterName, type, value, fromValue) ⇒ <code>String</code>
**Kind**: static method of <code>[Type](#Errors.Type)</code>  
**Returns**: <code>String</code> - compiled error message  

| Param | Type | Description |
| --- | --- | --- |
| parameterName | <code>Any</code> | name of parameter |
| type | <code>String</code> | Type String |
| value | <code>Any</code> | value that caused error |
| fromValue | <code>Any</code> | optional value where the parameter came from like an object or array |

**Example**  
```javascript
let test={a:1,b:0};

if(typeof test.b!=='object'){
    err=new Errors.Type;
    err.setMessage(
        'b',
        'Object',
        test.b,
        test
    );
    throw err;
}
```
**Example**  
```sh

git/node-error-classes/example/typeError.js:19
        throw err;
        ^

        TypeError: 'numberOne' Expects String but got number : 6

        at Type (/home/bmiller/git/node-error-classes/lib/Type.js:12:1)
        at multiplyNumbers (/home/bmiller/git/node-error-classes/example/typeError.js:13:13)
```
