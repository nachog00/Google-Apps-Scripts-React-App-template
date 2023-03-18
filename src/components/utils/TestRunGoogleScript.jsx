// import the react library
import React, { useEffect, useState } from "react";

// import the helper function runGoogleScript
import { runGoogleScript as gs } from '../../helpers/runGoogleScript';


// import the loading component
import * as Loaders from './loaders/Loaders';

// export the component
export default function TestRunGoogleScript() {
  // Create a state variable to store the result
  const [result, setResult] = useState(null);

  // we'll test the runGoogleScript function here, you can remove this later
  let options = {
    functionName: 'testrunGoogleScript',
    args: ['Hello from the React app!'], // you can change this to test the functionality
    localCallback: () => {
      return  `Hi from the LOCAL server!\n` +
      `The runGoogleScript function is working properly.\n` +
        `Since you are running the localserver, you got the localCallback data.\n` +
        `You can check the console for the arguments you passed`
    },
    verbose: true,
  }

  function parseResult(result) {
    // for each \n, create a new line
    return result.split('\n').map((item, key) => {
      return <p key={key}>{item}<br /></p>
    })

  }

  useEffect(() => {
    let fetchData = async () => {
      const response = await gs(options);
      let parsedResponse = parseResult(response);
      setResult(parsedResponse); // Set the result state
    }
    
    fetchData();
  }, [] )

  return (
    <div>
      {result ? result : <Loaders.InlineDots />}
    </div>
  );
}
