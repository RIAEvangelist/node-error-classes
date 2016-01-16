<a name="module_node-error-classes"></a>
## node-error-classes
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
        * [.setMessage(parameterName, expected, got, [fromValue])](#Errors.InvalidParameter.setMessage) ⇒ <code>String</code>
    * [.RequiredParameter](#Errors.RequiredParameter) ⇐ <code>Error</code>
        * [.setMessage(parameterName, [fromValue])](#Errors.RequiredParameter.setMessage) ⇒ <code>String</code>
    * [.Type](#Errors.Type) ⇐ <code>TypeError</code>
        * [.setMessage(parameterName, type, value, fromValue)](#Errors.Type.setMessage) ⇒ <code>String</code>

<a name="Errors.InvalidParameter"></a>
### Errors.InvalidParameter ⇐ <code>Error</code>
**Kind**: static class of <code>[Errors](#Errors)</code>  
**Extends:** <code>Error</code>  
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
<a name="Errors.RequiredParameter"></a>
### Errors.RequiredParameter ⇐ <code>Error</code>
**Kind**: static class of <code>[Errors](#Errors)</code>  
**Extends:** <code>Error</code>  
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
<a name="Errors.Type"></a>
### Errors.Type ⇐ <code>TypeError</code>
**Kind**: static class of <code>[Errors](#Errors)</code>  
**Extends:** <code>TypeError</code>  
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
