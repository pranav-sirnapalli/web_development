import React from "react";
import '../App.css'

const Welcome = ({isLoggedIn, userName}) => {
  const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
  const names = storedAccounts.map(account => account.name);
  
  return (
    <>
    <div>
    {isLoggedIn ?<h1 style={{color:"black",fontSize:"50px", textAlign:"center",marginTop:"20px"}}>WELCOME {userName.toUpperCase()}</h1>:<h1 style={{color:"black",fontSize:"50px", textAlign:"center", marginTop:"20px"}}>WELCOME GUEST</h1>}

    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"
  }}>
      <img src="https://amielsfashionboutique.weebly.com/uploads/1/3/5/8/13585149/3773432_orig.gif" alt="Welcome Image" style={{ maxWidth: "100%", height: "auto" }} />
    </div>
    </>
  );
};

export default Welcome;
