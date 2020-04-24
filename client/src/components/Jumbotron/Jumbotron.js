import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
    style={{ height: 175, paddingTop: 60, clear: "both", textAlign: "center", fontFamily: "Georgia", fontSize: 25 }}
    className="jumbotron"
  > 
    (React) Google Book Search  
    <br/>
    Search For and Save Books of Interest
    {children}
  </div>
  );
}

export default Jumbotron;

{/* <div    
style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
className="jumbotron"
>
{children}
</div> */}

