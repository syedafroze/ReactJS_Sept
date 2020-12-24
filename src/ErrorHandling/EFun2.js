import React from "react";

function EFun2(props) {
  if (props.email.includes("@")) {
    return <h2>{props.email}</h2>;
  } else {
    throw new Error("Invalid Email");
  }
}

export default EFun2;
