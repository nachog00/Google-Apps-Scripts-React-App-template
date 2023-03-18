# runGoogleScript

`runGoogleScript` is a utility module that provides a convenient way to call Google Apps Script functions in a React application. It handles both local development and production environments seamlessly. When running in a local environment, it uses a mock function to simulate the Google Apps Script function call, while in production, it calls the actual Google Apps Script function.

## Functions

### `isGoogleScriptAvailable`

Checks if the Google Apps Script environment is available.

**Returns**: `boolean` - `true` if Google Apps Script is available, `false` otherwise.

### `runGoogleScript`

Calls a Google Apps Script function or a local mock function, depending on the environment.

**Parameters**:

- `functionName` (string): The name of the Google Apps Script function to call.
- `args` (Array): An array of arguments to pass to the function (optional, default: `[]`).
- `localCallback` (Function): A local mock function to call when running in a local environment (optional, default: `defaultLocalCallback`).
- `mockDelay` (number): A delay in milliseconds to simulate when running the local mock function (optional, default: `1000`).

**Returns**: `Promise` - Resolves with the result from the Google Apps Script function or the local mock function.

## Usage

### Basic usage with async/await

`runGoogleScript` allows you to use async/await, making it easier to work with asynchronous code compared to the classical `google.script.run` method.

```javascript
import { runGoogleScript } from './helper';

async function fetchData() {
  try {
    // Assuming there's a Google Apps Script function named 'getAppData'
    const result = await runGoogleScript({ functionName: 'getAppData' });
    console.log('Result from getAppData:', result);
  } catch (error) {
    console.error('Error calling getAppData:', error);
  }
}

fetchData();
```

### Custom local mock function with async/await

```javascript
import { runGoogleScript } from './helper';

const myLocalCallback = () => {
  return {
    data: 'Sample data from local mock function',
  };
};

async function fetchData() {
  try {
    const result = await runGoogleScript({ functionName: 'getAppData', localCallback: myLocalCallback });
    console.log('Result from getAppData:', result);
  } catch (error) {
    console.error('Error calling getAppData:', error);
  }
}

fetchData();

```

### Passing arguments to the function with async/await

```javascript

import { runGoogleScript } from './helper';

const args = ['arg1', 'arg2', 'arg3'];

async function fetchData() {
  try {
    const result = await runGoogleScript({ functionName: 'getAppData', args: args });
    console.log('Result from getAppData:', result);
  } catch (error) {
    console.error('Error calling getAppData:', error);
  }
}

fetchData();


```
