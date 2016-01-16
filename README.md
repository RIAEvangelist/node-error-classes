# Custom Node Error Classes
Easy to read custom and extensible error classes for node.js that extend the native error classes.

Sometimes, just throwing an error isn't that helpful. Sometimes, handling an error elegantly preventing a crash just isn't quite good enough. During team development there are times when you want to throw explicit errors to both help developers understand whats going on, as well as enforce some strict rules. That is what this module is for.

## Errors.*
-----------
  - [new InvalidParameter()](#newinvalidparameter)
  - [InvalidParameter.setMessage()](#invalidparametersetmessageparameternameanyexpectedanygotanyfromvalueany)
  - [new RequiredParameter()](#newrequiredparameter)
  - [RequiredParameter.setMessage()](#requiredparametersetmessageparameternameanyfromvalueany)
  - [new Type()](#newtype)
  - [Type.setMessage()](#typesetmessageparameternameanytypestringvalueanyfromvalueany)

## new InvalidParameter()

  Error Class InvalidParameter

## InvalidParameter.setMessage(parameterName:Any, expected:Any, got:Any, [fromValue]:Any)

  sets the error message

## new RequiredParameter()

  Error Class InvalidParameter

## RequiredParameter.setMessage(parameterName:Any, fromValue:Any)

  sets the error message

## new Type()

  Error Class InvalidParameter

## Type.setMessage(parameterName:Any, type:String, value:Any, fromValue:Any)

  sets the error message
