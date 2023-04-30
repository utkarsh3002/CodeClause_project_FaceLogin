import "./App.css";

import { useEffect } from "react";

function App() {
  let faceio =new faceIO("fioa0a98");

  
  function enrollNewUser(){
    
    faceio.enroll({
      "locale": "auto", 
      "payload": {
         
          "whoami": 123456 
          
          }
      }).then(userInfo => {
          
          alert(
              `User Successfully Enrolled! Details:
             Unique Facial ID: ${userInfo.facialId}
             Enrollment Date: ${userInfo.timestamp}
             Gender: ${userInfo.details.gender}
             Age Approximation: ${userInfo.details.age}`
          );
         console.log(userInfo);
         
      }).catch(errCode => {
         
         handleError(errCode);
      })
  }
  function authenticateUser(){
    
    faceio.authenticate({
        "locale": "auto" 
    }).then(userData => {
        console.log("Success, user identified")
        
        console.log("Linked facial Id: " + userData.facialId)
        
        console.log("Associated Payload: " + JSON.stringify(userData.payload)) 
    }).catch(errCode => {
        handleError(errCode)
    })
}

  return (
        <section className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="font-sans font-bold text-xl mb-4">
        Face Login
      </h1>
      <div className="flex flex-col justify-center items-center style">
        <button
          className="block px-4 py-2 outline-none bg-blue-500 rounded text-white mb-2"
          onClick={enrollNewUser}
        >
          Register
        </button>
        <button
          className="block px-4 py-2 outline-none bg-blue-500 rounded text-white mb-2"
          onClick={authenticateUser}
        >
          Authenticate
        </button>
      </div>
    </section>
  );
}

export default App;