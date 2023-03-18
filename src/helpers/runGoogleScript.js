// runGoogleScript

// Checks if Google Apps Script runtime is available.
const isGoogleScriptAvailable = () => {
  return typeof google !== 'undefined' && google.script && google.script.run;
};

// Default local callback function for mock mode.
const defaultLocalCallback = (...args) => {
  return 'Default mock result';
};

/**
 * Runs a Google Apps Script function with support for async/await.
 *
 * @param {Object} options - Configuration options for the function call.
 * @param {string} options.functionName - The name of the Google Apps Script function to call.
 * @param {Array} [options.args=[]] - Optional array of arguments to pass to the Google Apps Script function.
 * @param {Function} [options.localCallback=defaultLocalCallback] - Optional local callback function to use in mock mode.
 * @param {number} [options.mockDelay=1000] - Optional delay (in ms) to simulate network latency in mock mode.
 * @param {boolean} [options.verbose=false] - Optional flag for verbose logging.
 *
 * @returns {Promise<any>} - Returns a Promise that resolves with the result of the Google Apps Script function call.
 */
export const runGoogleScript = ({
  functionName,
  args = [],
  localCallback = defaultLocalCallback,
  mockDelay = 1000,
  verbose = true,
}) => {

  let isMock = !isGoogleScriptAvailable();

  if (verbose) {
    console.groupCollapsed(`[Google Script${isMock && 'Mock'}]: ${functionName} called.`);
    console.table('Arguments:', args);
    console.log('Environment: ', process.env.NODE_ENV);
  }

  return new Promise((resolve, reject) => {
    if (!isMock) {
      google.script.run
        .withSuccessHandler((result) => {
          if (verbose) {
            console.log(`State: success`);
          }

          let parsedResult = JSON.parse(result);
          resolve(parsedResult);

          if (verbose) {
            console.log('Result:', parsedResult);
          }
        })
        .withFailureHandler((error) => {
          if (verbose) {
            console.error(`State: failure - `, error);
          }
          reject(error);
        })[functionName](...args)
        .finally(() => {
          if (verbose) {
            console.groupEnd();
          }
        });
    } else {
      const mockResult = localCallback(...args);

      if (verbose) {
        console.log('Result:', mockResult);
      }

      // simulate a bit of delay
      setTimeout(() => {
        resolve(mockResult);
      }, mockDelay);
    }

    if (verbose) {
      console.groupEnd();
    }
  });
};
