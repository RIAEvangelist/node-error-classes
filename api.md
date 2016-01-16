## Classes

<dl>
<dt><a href="#InvalidParameter">InvalidParameter</a></dt>
<dd><p>Error Class InvalidParameter</p>
</dd>
<dt><a href="#RequiredParameter">RequiredParameter</a></dt>
<dd><p>Error Class InvalidParameter</p>
</dd>
<dt><a href="#Type">Type</a></dt>
<dd><p>Error Class InvalidParameter</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#setMessage">setMessage(parameterName, expected, got, [fromValue])</a> ⇒ <code>String</code></dt>
<dd><p>sets the error message</p>
</dd>
<dt><a href="#setMessage">setMessage(parameterName, fromValue)</a> ⇒ <code>String</code></dt>
<dd><p>sets the error message</p>
</dd>
<dt><a href="#setMessage">setMessage(parameterName, type, value, fromValue)</a> ⇒ <code>String</code></dt>
<dd><p>sets the error message</p>
</dd>
</dl>

<a name="InvalidParameter"></a>
## InvalidParameter
Error Class InvalidParameter

**Kind**: global class  
<a name="RequiredParameter"></a>
## RequiredParameter
Error Class InvalidParameter

**Kind**: global class  
<a name="Type"></a>
## Type
Error Class InvalidParameter

**Kind**: global class  
<a name="setMessage"></a>
## setMessage(parameterName, expected, got, [fromValue]) ⇒ <code>String</code>
sets the error message

**Kind**: global function  
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

        err=new Errors.InvalidParameter;
        err.setMessage(
            'b',
            'a value greater than 0',
            test.b,
            test
        );
        throw err;

```
<a name="setMessage"></a>
## setMessage(parameterName, fromValue) ⇒ <code>String</code>
sets the error message

**Kind**: global function  
**Returns**: <code>String</code> - compiled error message  

| Param | Type | Description |
| --- | --- | --- |
| parameterName | <code>Any</code> | name of parameter |
| fromValue | <code>Any</code> | optional value where the parameter came from like an object or array |

<a name="setMessage"></a>
## setMessage(parameterName, type, value, fromValue) ⇒ <code>String</code>
sets the error message

**Kind**: global function  
**Returns**: <code>String</code> - compiled error message  

| Param | Type | Description |
| --- | --- | --- |
| parameterName | <code>Any</code> | name of parameter |
| type | <code>String</code> | Type String |
| value | <code>Any</code> | value that caused error |
| fromValue | <code>Any</code> | optional value where the parameter came from like an object or array |

