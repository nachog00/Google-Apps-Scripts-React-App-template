// import the react library
import React from "react";

// // Import the CSS file/s
// import './style/index.css'

// import the tester component !! this is just for testing, you can remove this later
import TestRunGoogleScript from './components/utils/TestRunGoogleScript';

// export the component
export default function App() {

  // run the function

  return (
    <div className="p-10">
        {/* Replace all of this with your app */}
      <h1 className="text-xl bold">Hello World!</h1>
        <p className="m-0 text-2xl">My first React app!</p>
        <div className="fetchedData m-10 w-80 h-60 bg-lightBlue p-4 rounded-lg border border-darkBlue font-bold text-darkBlue flex items-center justify-center">
          <TestRunGoogleScript />
        </div>

        <p className="text-xl tc-g">This version of the app includes Tailwind!</p>

    </div>
  );
}