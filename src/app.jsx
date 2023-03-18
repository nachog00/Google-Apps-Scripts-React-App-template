// import the react library
import React from "react";

// Import the CSS file/s
import './style/index.css'

// import the tester component !! this is just for testing, you can remove this later
import TestRunGoogleScript from './components/utils/TestRunGoogleScript';

// export the component
export default function App() {

  // run the function

  return (
    <>
        {/* Replace all of this with your app */}
      <h1>Hello World</h1>
        <p>My first React app!</p>
        <div className="fetchedData" style={{
              width:'20rem',
              height: '15rem',
              backgroundColor: 'lightBlue',
              padding: '1rem',
              borderRadius: '1rem',
              border: 'darkBlue 1px solid',
              fontWeight: 'bold',
              color: 'darkBlue',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
          <TestRunGoogleScript />
        </div>
    </>
  );
}