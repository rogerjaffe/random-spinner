### Spinner to call a function from a list at random

Provide this function an array of callback functions and it will pick one of them at random and call it with no parameters.

If you need parameters, curry the function to call with the required parameters first, then send it to `spinner`

Example 1:

```
const { spinner } = require('spinner');
const a = () => console.log("this is a");
const b = () => console.log("this is b");
const c = () => console.log("this is c");

spinner([a, b, c]);
```

Example 2:
```
const { spinner } = require('spinner');
const a = (p1, p2) => () => console.log("this is a with two parameters");
const b = (p1) => () => console.log("this is b with one parameter");
const c = () => console.log("this is c");

spinner([a, b, c]);
```
