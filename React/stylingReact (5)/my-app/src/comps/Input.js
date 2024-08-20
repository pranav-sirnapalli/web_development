import { useState } from "react";

import Button from './Button.js';
import Input from './UserInput.js';


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-7" >
        
          <Input 
          label='Email'
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
            // }}
            oid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
         
          <Input
          label='Password'
            type="password"
            oid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
       
      </div>

      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button  onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
