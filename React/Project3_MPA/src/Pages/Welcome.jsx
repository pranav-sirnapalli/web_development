import React from "react";

const Welcome = ({ isLoggedIn, userName }) => {
  return (
    <>
      <style>
        {`
          .welcome-message {
            color: green;
            font-size: 50px;
            text-align: center;
            margin-top: 20px;
          }

          .welcome-content {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            color: red;
          }
        `}
      </style>
      <div>
        {isLoggedIn ? (
          <h1 className="welcome-message">WELCOME {userName.toUpperCase()}</h1>
        ) : (
          <h1 className="welcome-message">Home page</h1>
        )}
      </div>
      <div className="welcome-content">
        <h1>Welcome to the Website</h1>
      </div>
    </>
  );
};

export default Welcome;
