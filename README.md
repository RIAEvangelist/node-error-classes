# Custom Node Error Classes
Easy to read custom and extensible error classes for node.js that extend the native error classes.

Sometimes, just throwing an error isn't that helpful. Sometimes, handling an error elegantly preventing a crash just isn't quite good enough. During team development there are times when you want to throw explicit errors to both help developers understand whats going on, as well as enforce some strict rules. That is what this module is for.

## Errors Currently supported

#### Required Parameter
This error is useful when you have a required parameter for a function that you can not default if not present. **It does not validate the type, that is only there to help the developer who caused the error.**

Documentation coming soon, see examples dir

#### Invalid Parameter
This error helps when a parameter is not valid but is of the right type.

Documentation coming soon, see examples dir
